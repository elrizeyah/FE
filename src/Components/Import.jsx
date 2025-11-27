import React, { useState, useRef } from "react";
import ExcelJS from "exceljs";

export default function Import() {
  const [data, setData] = useState({ excel_file: null });
  const [excelData, setExcelData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [localError, setLocalError] = useState("");
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setData({ excel_file: file });
    setLocalError("");

    if (file) {
      const reader = new FileReader();
      reader.onload = async (evt) => {
        const arrayBuffer = evt.target.result;
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(arrayBuffer);

        const worksheet = workbook.worksheets[0];
        const jsonData = [];

        worksheet.eachRow((row) => {
          // row.values[0] is empty, so we slice from index 1
          jsonData.push(row.values.slice(1));
        });

        setExcelData(jsonData);
        setShowData(false);
      };
      reader.readAsArrayBuffer(file); // ExcelJS requires ArrayBuffer
    } else {
      setExcelData([]);
    }
  };

  // Handle save action (frontend only)
  const saveFile = (e) => {
    e.preventDefault();

    if (!data.excel_file) {
      setLocalError("Please select an Excel file before saving.");
      return;
    }

    setLocalError("");
    alert("File is ready for upload (frontend only, no API).");
  };

  // Remove selected file
  const removeFile = () => {
    setData({ excel_file: null });
    setExcelData([]);
    setShowData(false);
    setLocalError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Custom button style
  const customButtonStyle = {
    padding: "0.45rem 1.2rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#fff",
    background: "linear-gradient(to bottom, #4a2f26, #2f1c14)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s",
    boxShadow: "0 3px 5px rgba(0,0,0,0.25)",
  };

  // Hover effects
  const handleHover = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(to bottom, #3e2b1c, #2e1c0f)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(to bottom, #4a2f26, #2f1c14)";
  };

  return (
    <div className="space-y-4 w-full">
      {/* Centered Row: File input (with X), Save, Preview */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* File Input with Remove Button */}
        <div className="relative" style={{ minWidth: "200px" }}>
          <input
            ref={fileInputRef}
            type="file"
            name="excel_file"
            accept=".xlsx, .xls, .csv"
            onChange={handleFileChange}
            style={{ width: "100%", color: "#424242ff" }}
          />
          {data.excel_file && (
            <button
              type="button"
              onClick={removeFile}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-red-600 hover:text-red-800 font-bold"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "red",
                cursor: "pointer",
              }}
              title="Remove file"
            >
              X
            </button>
          )}
        </div>

        {/* Save Button */}
        <button
          type="button"
          style={customButtonStyle}
          onClick={saveFile}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Save
        </button>

        {/* Preview Button */}
        {excelData.length > 0 && (
          <button
            type="button"
            style={customButtonStyle}
            onClick={() => setShowData((prev) => !prev)}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            {showData ? "Hide Preview" : "Preview"}
          </button>
        )}
      </div>

      {/* Error Message */}
      {localError && (
        <div
          style={{
            color: "red",
            fontSize: "0.75rem",
            marginTop: "0.25rem",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {localError}
        </div>
      )}

      {showData && excelData.length > 0 && (
        <div
          style={{
            marginTop: "2rem",
            overflow: "auto",
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "0.5rem",
            maxHeight: "400px",
          }}
        >
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <tbody>
              {excelData.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border px-3 py-1 text-sm text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
