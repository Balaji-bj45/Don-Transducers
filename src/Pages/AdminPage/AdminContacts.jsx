import React, { useEffect, useMemo, useState } from "react";
import { RefreshCcw, Trash2 } from "lucide-react";
import {
  clearContactRequests,
  deleteContactRequest,
  getContactRequests,
} from "../../data/adminApi";

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
    const term = query.trim().toLowerCase();
    if (!term) return requests;
    return requests.filter((item) => {
      return (
        item.name?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.phone?.toLowerCase().includes(term) ||
        item.message?.toLowerCase().includes(term)
      );
    });
  }, [requests, query]);

  const latest = requests[0];

  const handleClear = async () => {
    setLoading(true);
    setError("");
    try {
      await clearContactRequests();
      await refresh();
    } catch (err) {
      setError(err.message || "Failed to clear contact requests.");
      setLoading(false);
    }
  };

  const handleDeleteOne = async (id) => {
    if (!id) return;
    setLoading(true);
    setError("");
    try {
      await deleteContactRequest(id);
      await refresh();
    } catch (err) {
      setError(err.message || "Failed to delete contact request.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Contact Intelligence
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 mt-2">
            Contact Requests
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            All messages from the contact page are captured here for review and
            follow-up.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={refresh}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm hover:bg-slate-800"
          >
            <RefreshCcw size={14} />
            Refresh
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-2 rounded-2xl border border-rose-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-rose-600 hover:bg-rose-50"
          >
            <Trash2 size={14} />
            Clear All
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Total Messages
          </p>
          <p className="text-2xl font-semibold text-slate-900 mt-2">
            {requests.length}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Last Received
          </p>
          <p className="text-sm font-semibold text-slate-900 mt-2">
            {formatDate(latest?.createdAt)}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Search Messages
          </p>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, email, message..."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-4 lg:p-6 shadow-sm">
        <div className="overflow-x-auto">
          <div className="min-w-[820px]">
            <div className="grid grid-cols-[1.1fr_1.2fr_2fr_0.7fr_0.5fr] gap-4 border-b border-slate-200/80 pb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <span>Contact</span>
              <span>Reach</span>
              <span>Message</span>
              <span>Received</span>
              <span className="text-right">Action</span>
            </div>

            {loading ? (
              <div className="py-10 text-center text-sm text-slate-500">
                Loading contact requests...
              </div>
            ) : error ? (
              <div className="py-10 text-center text-sm text-rose-600">
                {error}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-10 text-center text-sm text-slate-500">
                No contact messages yet.
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item._id || item.id}
                  className="grid grid-cols-[1.1fr_1.2fr_2fr_0.7fr_0.5fr] gap-4 border-b border-slate-100 py-4 text-sm text-slate-700"
                >
                  <div>
                    <p className="font-semibold text-slate-900">
                      {item.name || "-"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500">{item.email || "-"}</p>
                    <p className="text-xs text-slate-500">{item.phone || "-"}</p>
                  </div>
                  <p className="text-sm text-slate-600">
                    {item.message || "-"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {formatDate(item.createdAt)}
                  </p>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleDeleteOne(item._id || item.id)}
                      className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-widest text-rose-600 hover:bg-rose-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;
