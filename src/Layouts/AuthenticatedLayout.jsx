import { useEffect, useRef, useState } from "react";
import Menu from "@/Components/Menu";

export default function AuthenticatedLayout({ header, children, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  // Dummy user if none passed
  const currentUser = user || { name: "John Doe", email: "johndoe@example.com" };

  return (
    <div style={{ minHeight: "100vh", display: "flex", backgroundColor: "#f3f3f3" }}>
      {/* SIDEBAR */}
      <aside
        ref={sidebarRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "14rem",
          backgroundColor: "#4b2e17",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s",
          zIndex: 40,
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem 0", borderBottom: "1px solid #5c3c21" }}>
            <img src="/images/2.png" alt="Logo" style={{ height: "5rem" }} />
          </div>

          {/* Links */}
          <nav style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
            {[
              { href: "/dashboard", label: "📊 Dashboard" },
              { href: "/inventory1", label: "📦 Products" },
              { href: "/transaction-record", label: "💰 Transactions" },
              { href: "/sales-report", label: "📑 Reports" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                  color: "white",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3c24")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div style={{ marginBottom: "1.5rem", padding: "0 1.5rem" }}>
          <button
            onClick={() => alert("Logging out...")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              width: "100%",
              padding: "0.5rem",
              background: "transparent",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3c24")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            ⏻ Log Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginLeft: sidebarOpen ? "14rem" : 0, transition: "margin 0.3s" }}>
        {/* HEADER NAVBAR */}
        <nav style={{ height: "7rem", backgroundColor: "white", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 1.5rem", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Left: Burger Menu */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ position: "fixed", top: "1rem", left: "1rem", zIndex: 50 }}>
                {!sidebarOpen ? (
                  <Menu toggleMenu={() => setSidebarOpen(true)} />
                ) : (
                  <button onClick={() => setSidebarOpen(false)} style={{ padding: "0.5rem", color: "white", fontSize: "1.25rem" }}>✕</button>
                )}
              </div>
              <a href="/dashboard">
                <img src="/images/2.png" alt="Logo" style={{ height: "7rem" }} />
              </a>
            </div>

            {/* Right: Links + Profile */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ display: "none", gap: "2rem" }}>
                <a
                  href="/dashboard"
                  style={{
                    color: "#4b2e17",
                    fontWeight: 500,
                    fontSize: "1.3rem",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.fontWeight = "700";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.fontWeight = "500";
                  }}
                >
                  Dashboard
                </a>
              </div>
              <a href="/profile" title="Profile" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "2.5rem", height: "2.5rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4b2e17" style={{ width: "1.5rem", height: "1.5rem" }}>
                  <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" />
                  <path d="M4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v1H4v-1z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        {/* Optional Page Header */}
        {header && <header style={{ backgroundColor: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>{header}</header>}

        {/* Main Content */}
        <main style={{ flex: 1, padding: "1.5rem" }}>{children}</main>
      </div>
    </div>
  );
}
