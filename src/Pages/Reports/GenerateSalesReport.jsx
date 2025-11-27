import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function GenerateSalesReport() {
  const [reportType, setReportType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [hover, setHover] = useState(false);

  // Monthly dropdown states
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const routeMap = {
    Daily: "/generate-sales-report/daily",
    Weekly: "/generate-sales-report/weekly",
    Monthly: "/generate-sales-report/monthly",
    Custom: "/generate-sales-report/custom",
  };

  // Update inputs based on reportType
  useEffect(() => {
    const today = new Date();

    if (reportType === "Daily") {
      const dateStr = today.toISOString().split("T")[0];
      setFromDate(dateStr);
      setToDate(dateStr);
    } else if (reportType === "Weekly" || reportType === "Monthly" || reportType === "Custom") {
      setFromDate("");
      setToDate("");
      setMonth("");
      setYear("");
    }
  }, [reportType]);

  // Weekly: Map selected date to 7-day week
  const handleWeeklyChange = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let startDay = 1;
    let endDay = 7;

    if (day >= 1 && day <= 7) startDay = 1, endDay = 7;
    else if (day >= 8 && day <= 14) startDay = 8, endDay = 14;
    else if (day >= 15 && day <= 21) startDay = 15, endDay = 21;
    else startDay = 22, endDay = lastDayOfMonth;

    const from = new Date(date.getFullYear(), date.getMonth(), startDay).toISOString().split("T")[0];
    const to = new Date(date.getFullYear(), date.getMonth(), endDay).toISOString().split("T")[0];

    setFromDate(from);
    setToDate(to);
  };

  // Monthly: Map selected month+year to first/last day
  const handleMonthlyChange = (monthValue, yearValue) => {
    if (!monthValue || !yearValue) return;
    const firstDay = new Date(yearValue, monthValue - 1, 1).toISOString().split("T")[0];
    const lastDay = new Date(yearValue, monthValue, 0).toISOString().split("T")[0];
    setFromDate(firstDay);
    setToDate(lastDay);
  };

  const handleGenerate = () => {
    if (!reportType) return;
    if (reportType === "Custom" && (!fromDate || !toDate)) {
      alert("Please select both start and end dates for the custom report.");
      return;
    }
    window.location.href = routeMap[reportType] + `?from=${fromDate}&to=${toDate}`;
  };

  // Styles (same as before)
  const containerStyle = { maxWidth: "48rem", margin: "2.5rem auto 0", padding: "1.5rem", backgroundColor: "white", borderRadius: "1rem", border: "1px solid #d7bfa0", boxShadow: "0 10px 15px rgba(0,0,0,0.1)" };
  const headerStyle = { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#4b2e17" };
  const paragraphStyle = { marginBottom: "1rem", marginTop: "-1.4rem", marginLeft: "1rem", color: "#4b5563" };
  const radioContainerStyle = (selected) => ({
    cursor: "pointer",
    borderRadius: "0.5rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    paddingLeft: "2.5rem",
    transition: "all 0.3s",
    border: selected ? "1px solid #4b2e17" : "2px solid #e0d6c4",
    backgroundColor: selected ? "#f3dfc3" : "#f9f5f0",
    boxShadow: selected ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
  });
  const radioOuterCircleStyle = (selected) => ({
    position: "absolute",
    left: "0.75rem",
    top: "50%",
    transform: "translateY(-50%)",
    width: "1.25rem",
    height: "1.25rem",
    borderRadius: "50%",
    border: selected ? "2px solid #4b2e17" : "1px solid gray",
    backgroundColor: selected ? "#4b2e17" : "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const radioInnerCircleStyle = { width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: "white" };
  const labelTextStyle = { fontWeight: "600", color: "#4b2e17", marginLeft: "0.75rem" };
  const labelSubTextStyle = { fontSize: "0.875rem", color: "#6b7280", marginLeft: "0.75rem", marginTop: "0.25rem", display: "block" };
  const dateInputStyle = { width: "22.4rem", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem", outline: "none", textTransform: "uppercase" };
  const buttonStyle = { padding: "0.5rem 1.5rem", borderRadius: "0.375rem", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s" };
  const cancelButtonStyle = { ...buttonStyle, backgroundColor: "white", color: "#374151", border: "1px solid #d1d5db" };
  const generateButtonStyle = reportType
    ? { padding: "0.5rem 1.5rem", borderRadius: "0.5rem", fontWeight: "600", cursor: "pointer", transition: "all 0.3s", backgroundColor: hover ? "#39210f" : "#4b2e17", color: "white", border: "1px solid #4b2e17", boxShadow: hover ? "0 6px 8px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.15)" }
    : { padding: "0.5rem 1.5rem", borderRadius: "0.5rem", fontWeight: "600", cursor: "not-allowed", transition: "all 0.3s", backgroundColor: "#f9f5f0", color: "#9ca3af", border: "1px solid #d1d5db", boxShadow: "none" };

  return (
    <AuthenticatedLayout>
      <div style={containerStyle}>
        <h1 style={headerStyle}>Select Sales Report Date Range</h1>
        <p style={paragraphStyle}>Choose a date range to generate your sales report.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
          {["Daily", "Weekly", "Monthly", "Custom"].map((type) => (
            <label key={type} style={radioContainerStyle(reportType === type)}>
              <input type="radio" name="reportType" value={type} checked={reportType === type} onChange={() => setReportType(type)} style={{ display: "none" }} />
              <span style={radioOuterCircleStyle(reportType === type)}>{reportType === type && <span style={radioInnerCircleStyle} />}</span>
              <span style={labelTextStyle}>{type}</span>
              <span style={labelSubTextStyle}>
                {type === "Daily" && "Pick a single date"}
                {type === "Weekly" && "Select a week (7-day block)"}
                {type === "Monthly" && "Select month and year"}
                {type === "Custom" && "Select start and end dates"}
              </span>
            </label>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: reportType === "Custom" ? "repeat(2, 1fr)" : "1fr", gap: "1rem", marginBottom: "1.5rem" }}>
          {reportType === "Daily" && <input type="date" value={fromDate} onChange={(e) => { setFromDate(e.target.value); setToDate(e.target.value); }} style={dateInputStyle} />}
          {reportType === "Weekly" && <input type="date" value={fromDate} onChange={(e) => handleWeeklyChange(e.target.value)} style={dateInputStyle} />}
          {reportType === "Monthly" && (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <select value={month} onChange={(e) => { setMonth(e.target.value); handleMonthlyChange(e.target.value, year); }} style={dateInputStyle}>
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              <select value={year} onChange={(e) => { setYear(e.target.value); handleMonthlyChange(month, e.target.value); }} style={dateInputStyle}>
                <option value="">Year</option>
                {Array.from({ length: 11 }, (_, i) => 2020 + i).map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          )}
          {reportType === "Custom" && <>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} style={dateInputStyle} />
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} style={dateInputStyle} />
          </>}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <button style={cancelButtonStyle} onClick={() => (window.location.href = "/sales-report")}>Cancel</button>
          <button style={generateButtonStyle} disabled={!reportType} onClick={handleGenerate} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Generate Report</button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
