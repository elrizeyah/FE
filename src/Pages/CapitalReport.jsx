import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CapitalReport({ user, title }) {
  // Sample front-end data
  const [reportData] = useState([
    {
      id: 1,
      date: "01/05/2025 - 10:30 AM",
      user: "John Doe",
      action: "Sale",
      amount: 1500,
      remarks: "Paid in cash",
    },
    {
      id: 2,
      date: "01/05/2025 - 1:15 PM",
      user: "Jane Smith",
      action: "Refund",
      amount: -500,
      remarks: "Returned product",
    },
    {
      id: 3,
      date: "01/05/2025 - 3:45 PM",
      user: "John Doe",
      action: "Sale",
      amount: 2200,
      remarks: "Paid by card",
    },
  ]);

  return (
    <AuthenticatedLayout
      user={user}
      header={<h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4b2e17" }}>{title}</h1>}
    >
      <div style={{ maxWidth: "72rem", margin: "1.5rem auto" }}>
        <div style={{ backgroundColor: "#fff", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "1px solid #000", borderRadius: "1rem", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#4b2e17" }}>
            January 2025 - Sales Summary
          </h2>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", border: "1px solid #000" }}>
            <thead style={{ backgroundColor: "#f9e7d0" }}>
              <tr>
                <th style={{ padding: "0.5rem", border: "1px solid #000" }}>Date & Time</th>
                <th style={{ padding: "0.5rem", border: "1px solid #000" }}>User</th>
                <th style={{ padding: "0.5rem", border: "1px solid #000" }}>Action</th>
                <th style={{ padding: "0.5rem", border: "1px solid #000" }}>Amount</th>
                <th style={{ padding: "0.5rem", border: "1px solid #000" }}>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {reportData.length > 0 ? (
                reportData.map((item) => (
                  <tr key={item.id} style={{ color: "#2e1a0e" }}>
                    <td style={{ padding: "0.5rem", border: "1px solid #000" }}>{item.date}</td>
                    <td style={{ padding: "0.5rem", border: "1px solid #000" }}>{item.user}</td>
                    <td style={{ padding: "0.5rem", border: "1px solid #000" }}>{item.action}</td>
                    <td style={{ padding: "0.5rem", border: "1px solid #000" }}>₱ {item.amount.toLocaleString()}</td>
                    <td style={{ padding: "0.5rem", border: "1px solid #000" }}>{item.remarks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "1rem", color: "#6b7280" }}>
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
