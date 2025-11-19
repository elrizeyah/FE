import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function GenerateSalesReportCustom({ user, onGenerate }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleGenerate = () => {
    if (!from || !to) return;

    // Call the onGenerate callback if provided
    if (onGenerate) onGenerate({ from, to });

    // For demo purposes, log the selected dates
    console.log(`Generate report from ${from} to ${to}`);
  };

  return (
    <AuthenticatedLayout user={user}>
      <div
        style={{
          maxWidth: "48rem",
          margin: "2.5rem auto",
          padding: "1.5rem",
          backgroundColor: "white",
          borderRadius: "0.75rem",
          border: "1px solid #d7bfa0",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
          Custom Sales Report
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold" }}>
              From:
            </label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold" }}>
              To:
            </label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <button
            onClick={handleGenerate}
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
