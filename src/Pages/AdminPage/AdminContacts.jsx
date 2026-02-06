import React, { useEffect, useMemo, useState } from "react";
import { RefreshCcw, Trash2, Search, Mail, Phone, MessageSquare, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import {
  clearContactRequests,
  deleteContactRequest,
  getContactRequests,
} from "../../data/adminApi";
import ConfirmModal from "./ConfirmModal";

const formatDate = (value) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString();
};

const AdminContacts = () => {
  const [requests, setRequests] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Filter & Pagination states
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Modal states
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null, name: "" });
  const [clearModal, setClearModal] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getContactRequests();
      setRequests(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Failed to load contact requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const filtered = useMemo(() => {
    let result = requests;

    // Date Filter
    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      result = result.filter((item) => {
        const itemDate = new Date(item.createdAt);
        return itemDate >= start;
      });
    }

    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      result = result.filter((item) => {
        const itemDate = new Date(item.createdAt);
        return itemDate <= end;
      });
    }

    // Search Filter
    const term = query.trim().toLowerCase();
    if (term) {
      result = result.filter((item) => {
        return (
          item.name?.toLowerCase().includes(term) ||
          item.email?.toLowerCase().includes(term) ||
          item.phone?.toLowerCase().includes(term) ||
          item.message?.toLowerCase().includes(term)
        );
      });
    }

    return result;
  }, [requests, query, startDate, endDate]);

  // Pagination Logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [query, startDate, endDate]);

  const handleClear = async () => {
    setActionLoading(true);
    setError("");
    try {
      await clearContactRequests();
      await refresh();
      setClearModal(false);
    } catch (err) {
      setError(err.message || "Failed to clear contact requests.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteOne = async () => {
    if (!deleteModal.id) return;
    setActionLoading(true);
    setError("");
    try {
      await deleteContactRequest(deleteModal.id);
      await refresh();
      setDeleteModal({ open: false, id: null, name: "" });
    } catch (err) {
      setError(err.message || "Failed to delete contact request.");
    } finally {
      setActionLoading(false);
    }
  };

  const openDeleteModal = (id, name) => {
    setDeleteModal({ open: true, id, name });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Contact Requests</h2>
          <p className="text-sm text-gray-500 mt-1">
            {requests.length} total messages
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={refresh}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
          <button
            onClick={() => setClearModal(true)}
            disabled={loading || requests.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            <Trash2 size={16} />
            Clear All
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative max-w-md flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email, phone..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <Calendar size={16} />
            </span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <h1 className="mt-2">to</h1>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <Calendar size={16} />
            </span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 text-sm">
              {query ? "No results found" : "No contact requests yet"}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-12">
                      #
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paginatedItems.map((item, index) => {
                    const itemIndex = (currentPage - 1) * itemsPerPage + index + 1;
                    return (
                      <tr key={item._id || item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-xs text-gray-500">
                          {itemIndex}
                        </td>
                        <td className="px-4 py-4">
                          <div>
                            <p className="font-medium text-gray-900">{item.name || "-"}</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                              <Mail size={12} />
                              {item.email || "-"}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                              <Phone size={12} />
                              {item.phone || "-"}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <p className="text-sm text-gray-600 max-w-xs truncate">
                            {item.message || "-"}
                          </p>
                        </td>
                        <td className="px-4 py-4">
                          <p className="text-sm text-gray-500">
                            {formatDate(item.createdAt)}
                          </p>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <button
                            onClick={() => openDeleteModal(item._id || item.id, item.name)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-100">
              {paginatedItems.map((item) => (
                <div key={item._id || item.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.name || "-"}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.email}</p>
                      <p className="text-xs text-gray-500">{item.phone}</p>
                    </div>
                    <button
                      onClick={() => openDeleteModal(item._id || item.id, item.name)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  {item.message && (
                    <p className="text-sm text-gray-600 mb-2">{item.message}</p>
                  )}
                  <p className="text-xs text-gray-400">{formatDate(item.createdAt)}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Pagination Controls */}
      {filtered.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, filtered.length)}
                </span>{" "}
                of <span className="font-medium">{filtered.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Delete One Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, id: null, name: "" })}
        onConfirm={handleDeleteOne}
        title="Delete Contact Request"
        message={`Are you sure you want to delete the message from "${deleteModal.name || 'this contact'}"? This action cannot be undone.`}
        confirmText="Delete"
        loading={actionLoading}
      />

      {/* Clear All Modal */}
      <ConfirmModal
        isOpen={clearModal}
        onClose={() => setClearModal(false)}
        onConfirm={handleClear}
        title="Clear All Contact Requests"
        message={`Are you sure you want to delete all ${requests.length} contact requests? This action cannot be undone.`}
        confirmText="Clear All"
        loading={actionLoading}
      />
    </div>
  );
};

export default AdminContacts;