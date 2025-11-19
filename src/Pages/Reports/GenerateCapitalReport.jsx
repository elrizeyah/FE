import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function GenerateCapitalReport() {
  const [reportType, setReportType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const routeMap = {
    Daily: "/generate-capital-report/daily",
    Weekly: "/generate-capital-report/weekly",
    Monthly: "/generate-capital-report/monthly",
    Custom: "/generate-capital-report/custom",
  };

  const handleGenerate = () => {
    if (!reportType) return;

    if (reportType === "Custom") {
      if (!fromDate || !toDate) {
        alert("Please select both start and end dates for the custom report.");
        return;
      }
      window.location.href = routeMap[reportType] + `?from=${fromDate}&to=${toDate}`;
    } else {
      window.location.href = routeMap[reportType];
    }
  };

  const containerStyle = {
    maxWidth: "48rem",
    margin: "2.5rem auto 0",
    padding: "1.5rem",
    backgroundColor: "white",
    borderRadius: "1rem",
    border: "1px solid #d7bfa0",
  };

  const headerStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  };

  const paragraphStyle = {
    marginBottom: "1rem",
    color: "#4b5563",
  };

  const radioContainerStyle = (selected) => ({
    cursor: "pointer",
    borderRadius: "0.5rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    paddingLeft: "2.5rem",
    border: selected ? "2px solid #4b2e17" : "2px solid #e0d6c4",
    backgroundColor: selected ? "#f3dfc3" : "#f9f5f0",
    transition: "all 0.3s",
  });

  const radioOuterCircleStyle = (selected) => ({
    position: "absolute",
    left: "0.75rem",
    top: "50%",
    transform: "translateY(-50%)",
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "50%",
    border: selected ? "2px solid #4b2e17" : "2px solid gray",
    backgroundColor: selected ? "#4b2e17" : "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const radioInnerCircleStyle = {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    backgroundColor: "white",
  };

  const labelTextStyle = {
    fontWeight: "600",
  };

  const labelSubTextStyle = {
    fontSize: "0.875rem",
    color: "#6b7280",
  };

  const dateInputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    outline: "none",
  };

  const buttonStyle = {
    padding: "0.5rem 1.5rem",
    borderRadius: "0.375rem",
    fontWeight: "bold",
    border: "2px solid #4b2e17",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "white",
    color: "#374151",
    border: "1px solid #d1d5db",
  };

  const generateButtonStyle = reportType
    ? {
        ...buttonStyle,
        backgroundColor: "#f9f5f0",
        color: "#000",
      }
    : {
        ...buttonStyle,
        backgroundColor: "#f9f5f0",
        color: "#9ca3af",
        cursor: "not-allowed",
      };

  return (
    <AuthenticatedLayout>
      <div style={containerStyle}>
        <h1 style={headerStyle}>Select Capital Report Date Range</h1>
        <p style={paragraphStyle}>Choose a date range to generate your capital report.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
          {["Daily", "Weekly", "Monthly", "Custom"].map((type) => (
            <label key={type} style={radioContainerStyle(reportType === type)}>
              <input
                type="radio"
                name="reportType"
                value={type}
                checked={reportType === type}
                onChange={() => setReportType(type)}
                style={{ display: "none" }}
              />
              <span style={radioOuterCircleStyle(reportType === type)}>
                {reportType === type && <span style={radioInnerCircleStyle}></span>}
              </span>
              <span style={labelTextStyle}>{type}</span>
              <span style={labelSubTextStyle}>
                {type === "Daily" && "Pick a single date"}
                {type === "Weekly" && "Choose a week"}
                {type === "Monthly" && "Select a month"}
                {type === "Custom" && "Select start and end dates"}
              </span>
            </label>
          ))}
        </div>

        {reportType === "Custom" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>From</label>
              <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={dateInputStyle} />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "500" }}>To</label>
              <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={dateInputStyle} />
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <button style={cancelButtonStyle} onClick={() => (window.location.href = "/sales-report")}>
            Cancel
          </button>
          <button style={generateButtonStyle} disabled={!reportType} onClick={handleGenerate}>
            Generate Report
          </button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
