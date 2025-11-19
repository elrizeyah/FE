import React from "react";

export default function TransactionHistory({ tHistory = [] }) {
  if (!tHistory || tHistory.length === 0) {
    return (
      <h1 style={{ color: "#6b7280", fontSize: "1rem", margin: "1rem 0" }}>
        No Transaction History Available
      </h1>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        Transaction History
      </h1>

      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: 0, listStyle: "none" }}>
        {tHistory.map((history) => (
          <li
            key={history.id}
            style={{
              padding: "1rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <div>
              <strong>Action:</strong> {history.action}
            </div>
            <div>
              <strong>Changed Data:</strong> {history.changed_data}
            </div>
            <div>
              <strong>Changed at:</strong> {history.updated_at}
            </div>
          </li>
        ))}
      </ul>

      <hr style={{ borderColor: "#d1d5db", marginTop: "1rem" }} />
    </div>
  );
}
