import React, { useState } from "react";

export default function MakeCapital() {
  const [visible, setVisible] = useState(false);
  const [capitalData, setCapital] = useState({
    amount: "",
    type: "",
  });

  const submitCapital = (e) => {
    e.preventDefault();
    alert(`Submitted: Amount = ${capitalData.amount}, Type = ${capitalData.type}`);
    setCapital({ amount: "", type: "" });
    setVisible(false);
  };

  const brownButton = {
    backgroundColor: "#4b2e17",
    color: "#fff",
    fontWeight: 600,
    padding: "8px 16px",
    borderRadius: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
  };

  const secondaryButton = {
    backgroundColor: "#e5e7eb",
    color: "#1f2937",
    fontWeight: 600,
    padding: "8px 16px",
    borderRadius: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    borderRadius: "0.5rem",
    border: "1px solid #d1d5db",
    marginTop: "4px",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontWeight: 500,
    marginBottom: "4px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Add Capital Button */}
      <div>
        <button
          style={brownButton}
          onClick={() => setVisible(true)}
        >
          Add Capital
        </button>
      </div>

      {visible && (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            border: "1px solid #e2cdbf",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Close button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              style={secondaryButton}
              onClick={() => setVisible(false)}
            >
              Close
            </button>
          </div>

          {/* Form */}
          <form onSubmit={submitCapital} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Amount:</label>
              <input
                type="number"
                value={capitalData.amount}
                onChange={(e) =>
                  setCapital({ ...capitalData, amount: e.target.value })
                }
                style={inputStyle}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Type:</label>
              <select
                value={capitalData.type}
                onChange={(e) =>
                  setCapital({ ...capitalData, type: e.target.value })
                }
                style={inputStyle}
                required
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="withdraw">Withdraw</option>
                <option value="add">Add</option>
                <option value="initial">Initial</option>
              </select>
            </div>

            {/* Submit and Clear */}
            <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
              <button type="submit" style={brownButton}>
                Submit
              </button>
              <button
                type="button"
                style={secondaryButton}
                onClick={() => setCapital({ amount: "", type: "" })}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
