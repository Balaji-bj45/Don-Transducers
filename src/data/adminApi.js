const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const TOKEN_KEY = "don_admin_token";

const getToken = () => {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  if (typeof window === "undefined") return;
  if (token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  } else {
    window.localStorage.removeItem(TOKEN_KEY);
  }
};

const request = async (path, options = {}) => {
  const token = getToken();
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    let message = "Request failed.";
    try {
      const body = await response.json();
      message = body?.message || message;
    } catch (error) {
      // ignore
    }
    throw new Error(message);
  }

  if (response.status === 204) return null;
  return response.json();
};

export const createProductRequest = (payload) =>
  request("/api/product-requests", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getProductRequests = () => request("/api/product-requests");

export const clearProductRequests = () =>
  request("/api/product-requests", { method: "DELETE" });

export const createContactRequest = (payload) =>
  request("/api/contact-requests", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getContactRequests = () => request("/api/contact-requests");

export const clearContactRequests = () =>
  request("/api/contact-requests", { method: "DELETE" });

export const loginAdmin = async (payload) => {
  const result = await request("/api/admin/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  setToken(result?.token || "");
  return result;
};

export const getAdminProfile = () => request("/api/admin/me");

export const logoutAdmin = () => setToken("");
