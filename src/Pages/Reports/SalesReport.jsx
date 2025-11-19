import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateReport() {
  const [auth] = useState({ user: { name: "John Doe" } });

  const [sales] = useState([
    { id: 1, date: "2025-11-19", amount: 1500 },
    { id: 2, date: "2025-11-18", amount: 2300 },
  ]);

  const [capital] = useState([
    { id: 1, date: "2025-11-10", amount: 5000 },
    { id: 2, date: "2025-11-12", amount: 3200 },
  ]);

  const currentUser = auth.user;

  const goTo = (url) => {
    alert(`Redirect to ${url}`); // simulate navigation
  };

  return (
    <AuthenticatedLayout user={currentUser}>
      <div>
        {/* Header with Back button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "7rem",
            paddingRight: "7rem",
            marginTop: "-1.5rem",
            marginBottom: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              lineHeight: "1.3",
              WebkitTextStroke: ".8px #000000",
              backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Create Report
          </h1>

          <button
            style={{
              backgroundColor: "#4b2e17",
              color: "white",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.375rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              border: "none",
              transition: "0.3s",
            }}
            onClick={() => goTo("/dashboard")}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6b3e1f")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
          >
            ← Back
          </button>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button
            style={{
              textAlign: "left",
              border: "2px solid #4b2e17",
              backgroundColor: "#f9f5f0",
              color: "#000",
              fontWeight: "700",
              fontSize: "1.5rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              maxWidth: "68rem",
              margin: "0 auto",
              transition: "0.3s",
            }}
            onClick={() => goTo("/generate-sales-report")}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
          >
            Generate Sales Report
          </button>

          <button
            style={{
              textAlign: "left",
              border: "2px solid #4b2e17",
              backgroundColor: "#f9f5f0",
              color: "#000",
              fontWeight: "700",
              fontSize: "1.5rem",
              padding: "0.75rem 2rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              maxWidth: "68rem",
              margin: "0 auto",
              transition: "0.3s",
            }}
            onClick={() => goTo("/generate-capital-report")}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
          >
            Generate Capital Report
          </button>
        </div>

        {/* Sales and Capital History Tables */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", maxWidth: "68rem", margin: "2rem auto" }}>
          {/* Sales History */}
          <section>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2e1a0e", marginBottom: "1rem" }}>
              Sales History
            </h2>
            <div
              style={{
                border: "2px solid black",
                backgroundColor: "white",
                padding: "1rem",
                boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                overflowX: "auto",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                <thead style={{ backgroundColor: "#d6d6d6" }}>
                  <tr>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}>Sales Transaction #</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}>Date</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}>Total Sales</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {sales.length > 0 ? (
                    sales.map((item) => (
                      <tr key={item.id} style={{ backgroundColor: "white", transition: "0.3s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9f5f0"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>#{item.id}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>{item.date}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>₱ {item.amount}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>→</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ padding: "1rem", color: "#555" }}>
                        No sales records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Capital History */}
          <section>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2e1a0e", marginBottom: "1rem" }}>
              Capital History
            </h2>
            <div
              style={{
                border: "2px solid black",
                backgroundColor: "white",
                padding: "1rem",
                boxShadow: "6px 6px 0px rgba(0,0,0,0.3)",
                overflowX: "auto",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                <thead style={{ backgroundColor: "#d6d6d6" }}>
                  <tr>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}>Capital #</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}>Date</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}>Total Capital</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.5rem" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {capital.length > 0 ? (
                    capital.map((item) => (
                      <tr key={item.id} style={{ backgroundColor: "white", transition: "0.3s" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9f5f0"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>#{item.id}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>{item.date}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>₱ {item.amount}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>→</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ padding: "1rem", color: "#555" }}>
                        No capital records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
