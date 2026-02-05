import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, LogIn, LogOut, Package, PhoneCall } from "lucide-react";
import { getAdminProfile, loginAdmin, logoutAdmin } from "../../data/adminApi";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setLogin] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getAdminProfile();
        setIsAuthed(true);
      } catch (error) {
        setIsAuthed(false);
      } finally {
        setIsChecking(false);
      }
    };
    checkAuth();
  }, []);

  const navItems = useMemo(
    () => [
      { label: "Product Requests", to: "/admin/products", icon: Package },
      { label: "Contact Requests", to: "/admin/contacts", icon: PhoneCall },
    ],
    []
  );

  const onLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    if (!login.username.trim() || !login.password.trim()) {
      setLoginError("Enter both username and password.");
      return;
    }
    setIsSubmitting(true);
    setLoginError("");
    try {
      await loginAdmin({
        username: login.username.trim(),
        password: login.password.trim(),
      });
      setIsAuthed(true);
      if (location.pathname === "/admin") {
        navigate("/admin/products", { replace: true });
      }
    } catch (error) {
      setLoginError(error.message || "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onLogout = () => {
    logoutAdmin();
    setIsAuthed(false);
    setLogin({ username: "", password: "" });
    navigate("/admin", { replace: true });
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">
        <div className="text-sm text-slate-500">Checking admin session...</div>
      </div>
    );
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full bg-white border border-slate-200 rounded-3xl shadow-sm p-8 lg:p-10">
          <div className="flex items-center gap-3 text-slate-900">
            <ShieldCheck className="text-slate-900" size={28} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Admin Access
              </p>
              <h1 className="text-3xl font-semibold mt-2">Login</h1>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Enter your admin credentials to open the dashboard.
          </p>

          <form onSubmit={onLoginSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-slate-500">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={login.username}
                onChange={onLoginChange}
                placeholder="admin"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-slate-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={login.password}
                onChange={onLoginChange}
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              />
            </div>

            {loginError ? (
              <p className="text-sm text-red-600">{loginError}</p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-slate-800"
            >
              <LogIn size={16} />
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[720px]">
            <aside className="lg:w-72 bg-slate-950 text-white p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Don Transducers
                  </p>
                  <p className="text-lg font-semibold mt-1">Admin Panel</p>
                </div>
              </div>

              <div className="mt-10 space-y-2">
                {navItems.map(({ label, to, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-white text-slate-900"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={18} />
                    {label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Tip
                </p>
                <p className="mt-2">
                  New requests appear here after a customer submits a form.
                </p>
              </div>
            </aside>

            <div className="flex-1 bg-slate-50/80">
              <div className="flex flex-col gap-4 border-b border-slate-200/80 px-6 py-6 lg:px-10">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Dashboard
                    </p>
                    <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 mt-2">
                      Admin Overview
                    </h1>
                  </div>
                  <button
                    type="button"
                    onClick={onLogout}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-widest text-slate-700 hover:bg-slate-100"
                  >
                    <LogOut size={16} />
                    Log out
                  </button>
                </div>
              </div>

              <div className="px-6 py-8 lg:px-10 lg:py-10">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
