import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function GenerateCapitalReportDaily({ auth }) {
  // Mock transactions for frontend demonstration
  const [transactions, setTransactions] = useState([
    { id: 1, created_at: "2025-11-19 08:30 AM", amount: 1500 },
    { id: 2, created_at: "2025-11-19 10:00 AM", amount: 2500 },
    { id: 3, created_at: "2025-11-19 01:15 PM", amount: 3200 },
  ]);

  const handleGenerateReport = () => {
    // Demo action: replace with your own report logic
    console.log("Generating daily capital report...");
    alert("Daily capital report generated!");
  };

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div
        style={{
          maxWidth: "80rem",
          margin: "2.5rem auto",
          padding: "1.5rem",
          backgroundColor: "white",
          borderRadius: "0.75rem",
          border: "1px solid #d7bfa0",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
          Daily Capital Report
        </h1>

        <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
            <thead>
              <tr style={{ backgroundColor: "#d6d6d6", color: "black" }}>
                <th style={{ border: "1px solid #000", padding: "0.5rem" }}>Transaction #</th>
                <th style={{ border: "1px solid #000", padding: "0.5rem" }}>Date</th>
                <th style={{ border: "1px solid #000", padding: "0.5rem" }}>Total Sales</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length ? (
                transactions.map((t) => (
                  <tr
                    key={t.id}
                    style={{
                      backgroundColor: "#fff",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                  >
                    <td style={{ border: "1px solid #999", padding: "0.5rem" }}>#{t.id}</td>
                    <td style={{ border: "1px solid #999", padding: "0.5rem" }}>{t.created_at}</td>
                    <td style={{ border: "1px solid #999", padding: "0.5rem" }}>₱ {t.amount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    style={{
                      textAlign: "center",
                      padding: "1rem",
                      color: "#6b6b6b",
                    }}
                  >
                    No sales records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Generate Report Button */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleGenerateReport}
            style={{
              padding: "0.5rem 1.5rem",
              border: "1px solid #4b2e17",
              backgroundColor: "#f9f5f0",
              fontWeight: "bold",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
          >
            Generate Report
          </button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
