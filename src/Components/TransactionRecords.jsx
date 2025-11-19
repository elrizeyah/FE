import React from "react";

export default function TransactionRecords({ tRecords = [] }) {
  if (!tRecords || tRecords.length === 0) {
    return (
      <h1 style={{ color: "#6b7280", fontSize: "1rem", margin: "1rem 0" }}>
        No Transaction Records Available
      </h1>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        Transaction Records
      </h1>

      <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: 0, listStyle: "none" }}>
        {tRecords.map((record) => (
          <li
            key={record.id}
            style={{
              padding: "1rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              transition: "background-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            <a
              href={`/user/${record.id}`}
              style={{
                display: "block",
                color: "#374151",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >
              <div>
                <strong>User:</strong> {record.user_name}
              </div>
              <div>
                <strong>Quantity:</strong> {record.quantity}
              </div>
              <div>
                <strong>Price:</strong> {record.price}
              </div>
              <div>
                <strong>Total Amount:</strong> {record.total_amount}
              </div>
            </a>
          </li>
        ))}
      </ul>

      <hr style={{ borderColor: "#d1d5db", marginTop: "1rem" }} />
    </div>
  );
}
