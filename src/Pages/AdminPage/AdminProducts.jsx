import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RefreshCcw, Trash2, ExternalLink } from "lucide-react";
import {
  clearProductRequests,
  getProductRequests,
} from "../../data/adminApi";

const formatDate = (value) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString();
};

const AdminProducts = () => {
  const [requests, setRequests] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const latest = requests[0];

  const handleClear = async () => {
    setLoading(true);
    setError("");
    try {
      await clearProductRequests();
      await refresh();
    } catch (err) {
      setError(err.message || "Failed to clear product requests.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Product Information
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 mt-2">
            Product Request Table
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Requests submitted from the product detail form appear here.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={refresh}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700 hover:bg-slate-100"
          >
            <RefreshCcw size={14} />
            Refresh
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-rose-600 hover:bg-rose-50"
          >
            <Trash2 size={14} />
            Clear All
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Total Requests
          </p>
          <p className="text-2xl font-semibold text-slate-900 mt-2">
            {requests.length}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Last Received
          </p>
          <p className="text-sm font-semibold text-slate-900 mt-2">
            {formatDate(latest?.createdAt)}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Search Requests
          </p>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by product, customer, category..."
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 lg:p-6">
        <div className="overflow-x-auto">
          <div className="min-w-[820px]">
            <div className="grid grid-cols-[1.6fr_1.1fr_1.7fr_0.8fr] gap-4 border-b border-slate-200 pb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <span>Product</span>
              <span>Customer</span>
              <span>Message</span>
              <span>Received</span>
            </div>

            {loading ? (
              <div className="py-10 text-center text-sm text-slate-500">
                Loading product requests...
              </div>
            ) : error ? (
              <div className="py-10 text-center text-sm text-rose-600">
                {error}
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-10 text-center text-sm text-slate-500">
                No product requests yet.
              </div>
            ) : (
              filtered.map((item) => {
                const product = item.product || {};
                return (
                  <div
                    key={item._id || item.id}
                    className="grid grid-cols-[1.6fr_1.1fr_1.7fr_0.8fr] gap-4 border-b border-slate-100 py-4 text-sm text-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name || "Product"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-lg bg-slate-200" />
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold text-slate-900">
                          {product.name || "Unknown product"}
                        </p>
                        <p className="text-xs text-slate-500">
                          {product.categoryName || "—"}{" "}
                          {product.sectionTitle ? `· ${product.sectionTitle}` : ""}
                        </p>
                        {item.productPath ? (
                          <Link
                            to={item.productPath}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                          >
                            View product <ExternalLink size={12} />
                          </Link>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900">
                        {item.fullName || "—"}
                      </p>
                      <p className="text-xs text-slate-500">{item.email || "—"}</p>
                      <p className="text-xs text-slate-500">{item.phone || "—"}</p>
                    </div>

                    <p className="text-sm text-slate-600">
                      {item.message || "—"}
                    </p>

                    <p className="text-xs text-slate-500">
                      {formatDate(item.createdAt)}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
