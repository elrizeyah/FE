import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";

export default function Import() {
  const [data, setData] = useState({ excel_file: null });
  const [excelData, setExcelData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [localError, setLocalError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({ excel_file: file });
    setLocalError("");

    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
        setExcelData(jsonData);
        setShowData(false);
      };
      reader.readAsBinaryString(file);
    } else {
      setExcelData([]);
    }
  };

  const saveFile = (e) => {
    e.preventDefault();

    if (!data.excel_file) {
      setLocalError("Please select an Excel file before saving.");
      return;
    }

    setLocalError("");
    alert("File is ready for upload (frontend only, no API).");
  };

  const removeFile = () => {
    setData({ excel_file: null });
    setExcelData([]);
    setShowData(false);
    setLocalError("");

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const brownButton =
    "bg-[#4b2e17] text-white font-semibold px-6 py-2 rounded-xl hover:bg-[#3a2312] transition-colors";

  return (
    <div style={{ width: "100%" }} className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            <input
              ref={fileInputRef}
              type="file"
              name="excel_file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              style={{}}
            />

            {data.excel_file && (
              <button
                type="button"
                onClick={removeFile}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-800 font-bold text-lg"
                style={{}}
                title="Remove file"
              >
                X
              </button>
            )}
          </div>

          <button type="button" className={brownButton} style={{}} onClick={saveFile}>
            Save
          </button>

          {excelData.length > 0 && (
            <button
              type="button"
              className={`${brownButton} bg-gray-700 hover:bg-gray-800`}
              style={{}}
              onClick={() => setShowData((prev) => !prev)}
            >
              {showData ? "Hide Preview" : "Preview"}
            </button>
          )}
        </div>

        {localError && (
          <div className="text-red-500 text-sm mt-1" style={{}}>
            {localError}
          </div>
        )}
      </div>

      {showData && excelData.length > 0 && (
        <div
          className="mt-4 overflow-auto border p-4 rounded-lg shadow-sm max-h-96"
          style={{}}
        >
          <table className="table-auto border-collapse border border-gray-300 w-full" style={{}}>
            <tbody>
              {excelData.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border px-3 py-1 text-sm text-gray-700"
                      style={{}}
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