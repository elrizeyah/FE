import React, { useState } from "react";

export default function DeletePHistoryButton({ onDelete }) {
  const [visible, setVisible] = useState(false);

  const redButtonStyle = {
    backgroundColor: "#dc2626",
    color: "#ffffff",
    fontWeight: 600,
    padding: "0.5rem 1.5rem",
    borderRadius: "0.75rem",
    border: "none",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    transition: "background-color 0.2s",
    marginBottom: "0.5rem",
  };

  const secondaryButtonStyle = {
    backgroundColor: "#e5e7eb",
    color: "#1f2937",
    fontWeight: 600,
    padding: "0.5rem 1.5rem",
    borderRadius: "0.75rem",
    border: "none",
    cursor: "pointer",
    width: "100%",
    textAlign: "center",
    transition: "background-color 0.2s",
    marginBottom: "0.5rem",
  };

  const modalStyle = {
    marginTop: "1rem",
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    border: "1px solid #e2cdbf",
    width: "100%",
    maxWidth: "28rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    marginTop: "1rem",
  };

  return (
    <>
      <button
        style={redButtonStyle}
        onClick={() => setVisible(true)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
      >
        Delete Product History
      </button>

      {visible && (
        <div style={modalStyle}>
          <h2 style={headingStyle}>Are you sure you want to delete?</h2>

          <div style={buttonContainerStyle}>
            <button
              style={secondaryButtonStyle}
              onClick={() => setVisible(false)}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d1d5db")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e5e7eb")}
            >
              No
            </button>

            <button
              style={redButtonStyle}
              onClick={() => {
                if (onDelete) onDelete();
                setVisible(false);
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
            >
              Confirm Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}
