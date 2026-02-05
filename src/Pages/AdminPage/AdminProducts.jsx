import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RefreshCcw, Trash2, ExternalLink, Search, Package } from "lucide-react";
import {
  clearProductRequests,
  deleteProductRequest,
  getProductRequests,
} from "../../data/adminApi";
import ConfirmModal from "./ConfirmModal";

const formatDate = (value) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString();
};

const AdminProducts = () => {
  const [requests, setRequests] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Modal states
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null, name: "" });
  const [clearModal, setClearModal] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getProductRequests();
      setRequests(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message || "Failed to load product requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return requests;
    return requests.filter((item) => {
      const product = item.product || {};
      return (
        item.fullName?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        product.name?.toLowerCase().includes(term) ||
        product.categoryName?.toLowerCase().includes(term) ||
        product.sectionTitle?.toLowerCase().includes(term)
      );
    });
  }, [requests, query]);

  const handleClear = async () => {
    setActionLoading(true);
    setError("");
    try {
      await clearProductRequests();
      await refresh();
      setClearModal(false);
    } catch (err) {
      setError(err.message || "Failed to clear product requests.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteOne = async () => {
    if (!deleteModal.id) return;
    setActionLoading(true);
    setError("");
    try {
      await deleteProductRequest(deleteModal.id);
      await refresh();
      setDeleteModal({ open: false, id: null, name: "" });
    } catch (err) {
      setError(err.message || "Failed to delete product request.");
    } finally {
      setActionLoading(false);
    }
  };

  const openDeleteModal = (id, productName, customerName) => {
    setDeleteModal({ 
      open: true, 
      id, 
      name: productName,
      customer: customerName 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Product Requests</h2>
          <p className="text-sm text-gray-500 mt-1">
            {requests.length} total requests
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
      <div className="relative max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product, customer, category..."
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <Package size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 text-sm">
              {query ? "No results found" : "No product requests yet"}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Customer
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
                  {filtered.map((item) => {
                    const product = item.product || {};
                    return (
                      <tr key={item._id || item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              {product.image ? (
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="h-full w-full flex items-center justify-center">
                                  <Package size={20} className="text-gray-400" />
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {product.name || "Unknown Product"}
                              </p>
                              <p className="text-xs text-gray-500">
                                {product.categoryName}
                                {product.sectionTitle && ` • ${product.sectionTitle}`}
                              </p>
                              {item.productPath && (
                                <Link
                                  to={item.productPath}
                                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1"
                                >
                                  View <ExternalLink size={10} />
                                </Link>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div>
                            <p className="font-medium text-gray-900">{item.fullName || "-"}</p>
                            <p className="text-xs text-gray-500">{item.email}</p>
                            <p className="text-xs text-gray-500">{item.phone}</p>
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
                            onClick={() => openDeleteModal(
                              item._id || item.id,
                              product.name,
                              item.fullName
                            )}
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

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden divide-y divide-gray-100">
              {filtered.map((item) => {
                const product = item.product || {};
                return (
                  <div key={item._id || item.id} className="p-4">
                    {/* Product Info */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="h-14 w-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center">
                            <Package size={24} className="text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">{product.name || "Unknown"}</p>
                        <p className="text-xs text-gray-500">{product.categoryName}</p>
                        {item.productPath && (
                          <Link
                            to={item.productPath}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 mt-1"
                          >
                            View Product <ExternalLink size={10} />
                          </Link>
                        )}
                      </div>
                      <button
                        onClick={() => openDeleteModal(
                          item._id || item.id,
                          product.name,
                          item.fullName
                        )}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Customer Info */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="font-medium text-gray-900 text-sm">{item.fullName}</p>
                      <p className="text-xs text-gray-500">{item.email}</p>
                      <p className="text-xs text-gray-500">{item.phone}</p>
                    </div>

                    {/* Message */}
                    {item.message && (
                      <p className="text-sm text-gray-600 mb-2">{item.message}</p>
                    )}

                    {/* Date */}
                    <p className="text-xs text-gray-400">{formatDate(item.createdAt)}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Delete One Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, id: null, name: "" })}
        onConfirm={handleDeleteOne}
        title="Delete Product Request"
        message={`Are you sure you want to delete the request for "${deleteModal.name || 'this product'}" from ${deleteModal.customer || 'this customer'}? This action cannot be undone.`}
        confirmText="Delete"
        loading={actionLoading}
      />

      {/* Clear All Modal */}
      <ConfirmModal
        isOpen={clearModal}
        onClose={() => setClearModal(false)}
        onConfirm={handleClear}
        title="Clear All Product Requests"
        message={`Are you sure you want to delete all ${requests.length} product requests? This action cannot be undone.`}
        confirmText="Clear All"
        loading={actionLoading}
      />
    </div>
  );
};

export default AdminProducts;