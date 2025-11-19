import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function GenerateReport() {
  // Mock data
  const [sales] = useState([
    { id: 1, date: "2025-11-18", amount: 1500 },
    { id: 2, date: "2025-11-19", amount: 2300 },
  ]);

  const [capital] = useState([
    { id: 1, date: "2025-11-18", amount: 5000 },
    { id: 2, date: "2025-11-19", amount: 7500 },
  ]);

  const handleGenerateSales = () => {
    alert("Sales Report Generated!");
  };

  const handleGenerateCapital = () => {
    alert("Capital Report Generated!");
  };

  return (
    <AuthenticatedLayout>
      <div style={{ padding: "3rem 1.5rem" }}>
        <h1
          style={{
            WebkitTextStroke: ".8px #000",
            backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.3",
            fontSize: "3rem",
            marginLeft: "5rem",
            marginTop: "-5rem",
            marginBottom: "1rem",
            fontWeight: "800",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Create Report
        </h1>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem", maxWidth: "68rem", marginLeft: "auto", marginRight: "auto" }}>
          <button
            onClick={handleGenerateSales}
            style={{
              textAlign: "left",
              border: "2px solid #4b2e17",
              color: "#000",
              fontWeight: "bold",
              padding: "0.75rem 2rem",
              backgroundColor: "#f9f5f0",
              cursor: "pointer",
              fontSize: "2rem",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
          >
            Generate Sales Report
          </button>

          <button
            onClick={handleGenerateCapital}
            style={{
              textAlign: "left",
              border: "2px solid #4b2e17",
              color: "#000",
              fontWeight: "bold",
              padding: "0.75rem 2rem",
              backgroundColor: "#f9f5f0",
              cursor: "pointer",
              fontSize: "2rem",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
          >
            Generate Capital Report
          </button>
        </div>

        {/* Tables Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", maxWidth: "68rem", marginLeft: "auto", marginRight: "auto" }}>
          {/* Sales History */}
          <section>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2e1a0e", marginBottom: "1rem" }}>
              Sales History
            </h2>
            <div style={{ border: "2px solid black", backgroundColor: "#fff", padding: "1rem", boxShadow: "6px 6px 0 rgba(0,0,0,0.3)", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead style={{ backgroundColor: "#d6d6d6", color: "#000" }}>
                  <tr>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem", textAlign: "center" }}>Sales Transaction #</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem", textAlign: "center" }}>Date</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem", textAlign: "center" }}>Total Sales</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {sales.length ? (
                    sales.map((item, idx) => (
                      <tr key={idx} style={{ textAlign: "center", cursor: "pointer" }}>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>#{item.id}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>{item.date}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>₱ {item.amount}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem", textAlign: "right" }}>→</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center", padding: "1rem", color: "#666" }}>
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
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2e1a0e", marginBottom: "1rem" }}>
              Capital History
            </h2>
            <div style={{ border: "2px solid black", backgroundColor: "#fff", padding: "1rem", boxShadow: "6px 6px 0 rgba(0,0,0,0.3)", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead style={{ backgroundColor: "#d6d6d6", color: "#000" }}>
                  <tr>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem", textAlign: "center" }}>Capital #</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem", textAlign: "center" }}>Date</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem", textAlign: "center" }}>Total Capital</th>
                    <th style={{ borderBottom: "2px solid #4b2e17", padding: "0.75rem" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {capital.length ? (
                    capital.map((item, idx) => (
                      <tr key={idx} style={{ textAlign: "center", cursor: "pointer" }}>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>#{item.id}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>{item.date}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>₱ {item.amount}</td>
                        <td style={{ borderBottom: "1px solid #ccc", padding: "0.5rem", textAlign: "right" }}>→</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center", padding: "1rem", color: "#666" }}>
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
