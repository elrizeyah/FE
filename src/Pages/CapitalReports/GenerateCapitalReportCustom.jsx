import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function GenerateCapitalReportCustom({ auth }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleGenerate = () => {
    if (!from || !to) return;
    // Simulate navigation
    window.location.href = `/generate-capital-report/custom?from=${from}&to=${to}`;
  };

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div
        style={{
          maxWidth: "48rem",
          margin: "2.5rem auto",
          padding: "1.5rem",
          backgroundColor: "white",
          borderRadius: "0.75rem",
          border: "1px solid #d7bfa0",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
          Custom Capital Report
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
              From:
            </label>
            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                padding: "0.5rem 0.75rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
              To:
            </label>
            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "0.375rem",
                padding: "0.5rem 0.75rem",
                boxSizing: "border-box",
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
