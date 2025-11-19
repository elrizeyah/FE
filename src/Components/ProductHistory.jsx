import React, { useState } from "react";

// Pure front-end delete button
function DeletePHistoryButton({ onDelete }) {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <button
        onClick={() => setVisible(true)}
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          fontWeight: "600",
          padding: "0.5rem 1rem",
          borderRadius: "0.75rem",
          width: "100%",
          cursor: "pointer",
          border: "none",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
      >
        Delete Product History
      </button>

      {visible && (
        <div
          style={{
            marginTop: "1rem",
            backgroundColor: "#ffffff",
            padding: "1.5rem",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            border: "1px solid #e2cdbf",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.125rem", fontWeight: "700", marginBottom: "1rem" }}>
            Are you sure you want to delete?
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <button
              onClick={() => setVisible(false)}
              style={{
                backgroundColor: "#e5e7eb",
                color: "#111827",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                borderRadius: "0.75rem",
                cursor: "pointer",
                border: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d1d5db")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e5e7eb")}
            >
              No
            </button>

            <button
              onClick={() => {
                if (onDelete) onDelete();
                setVisible(false);
              }}
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                borderRadius: "0.75rem",
                cursor: "pointer",
                border: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
            >
              Confirm Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ProductHistory Component
export default function ProductHistory({ pHistory }) {
  const [historyList, setHistoryList] = useState(pHistory || []);

  const handleDelete = (id) => {
    setHistoryList(historyList.filter((item) => item.id !== id));
  };

  if (!historyList || historyList.length === 0) {
    return <h1 style={{ fontSize: "1.25rem", color: "#6b7280" }}>No Product History Available</h1>;
  }

  return (
    <div key="product-history" style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>Product History</h1>

      {historyList.map((history) => (
        <div
          key={history.id}
          style={{
            backgroundColor: "#ffffff",
            padding: "1rem",
            borderRadius: "0.75rem",
            border: "1px solid #e2cdbf",
            marginBottom: "1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          }}
        >
          <p>
            <strong>Action: </strong> {history.action}
          </p>
          <p>
            <strong>Changed Data: </strong> {history.changed_data}
          </p>
          <p>
            <strong>Changed at: </strong> {history.updated_at}
          </p>

          <DeletePHistoryButton onDelete={() => handleDelete(history.id)} />
        </div>
      ))}
    </div>
  );
}
