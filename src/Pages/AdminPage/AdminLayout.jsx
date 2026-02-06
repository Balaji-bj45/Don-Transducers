import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { ShieldCheck, LogIn, LogOut, Package, PhoneCall, Menu, X } from "lucide-react";
import { getAdminProfile, loginAdmin, logoutAdmin } from "../../data/adminApi";
import logo2 from "../../assets/logo2.png";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setLogin] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

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

  // Loading State
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  // Login Page
  if (!isAuthed) {
    return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="w-full max-w-sm bg-white rounded-3xl p-9 shadow-lg">
    <img
      src={logo2}
      alt="Don Transducers"
      className="h-16 w-auto mx-auto mb-10"
    />
    

    <form onSubmit={onLoginSubmit} className="space-y-4">
      <input
        type="text"
        name="username"
        value={login.username}
        onChange={onLoginChange}
        placeholder="Username"
        className="w-full px-5 py-3 text-gray-800 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      <input
        type="password"
        name="password"
        value={login.password}
        onChange={onLoginChange}
        placeholder="Password"
        className="w-full px-5 py-3 text-gray-800 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      />

      {loginError && (
        <p className="text-red-500 text-xs text-center">{loginError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 disabled:opacity-50 mt-2"
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
      </button>
    </form>
  </div>
</div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b  border-gray-800">
            <div className=" items-center">
              <div className="h-11 w-50 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logo2} alt="Don Transducers" className="h-full w-full object-contain" />
              </div>
              
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-800">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={20} />
              </button>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Manage your requests
                </p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;