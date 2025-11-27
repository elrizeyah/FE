import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";

export default function GenerateSalesReportCustom({ user }) {
  const [transactions, setTransactions] = useState([
    { id: 1, start_date: "2025-01-01", end_date: "2025-01-07", user: "Admin", action: "Sale", amount: 1500 },
    { id: 2, start_date: "2025-01-08", end_date: "2025-01-14", user: "Admin", action: "Sale", amount: 2800 },
    { id: 3, start_date: "2025-01-15", end_date: "2025-01-21", user: "Admin", action: "Sale", amount: 3200 },
  ]);

  const [addingNew, setAddingNew] = useState(false);
  const [newEntry, setNewEntry] = useState({
    start_date: "",
    end_date: "",
    user: user?.name || "Admin",
    action: "",
    amount: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [editEntry, setEditEntry] = useState({});

  const saveNewTransaction = () => {
    if (!newEntry.start_date || !newEntry.end_date || !newEntry.action || !newEntry.amount) {
      alert("Please fill out all fields.");
      return;
    }

    const newItem = {
      id: transactions.length + 1,
      ...newEntry,
      amount: Number(newEntry.amount),
    };

    setTransactions([...transactions, newItem]);
    setNewEntry({ start_date: "", end_date: "", user: user?.name || "Admin", action: "", amount: "" });
    setAddingNew(false);
  };

  const saveEditTransaction = (id) => {
    if (!editEntry.start_date || !editEntry.end_date || !editEntry.action || !editEntry.amount) {
      alert("Please fill out all fields.");
      return;
    }

    setTransactions(
      transactions.map((tx) => (tx.id === id ? { ...tx, ...editEntry, amount: Number(editEntry.amount) } : tx))
    );
    setEditingId(null);
    setEditEntry({});
  };

  const deleteTransaction = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      setTransactions(transactions.filter((tx) => tx.id !== id));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <AuthenticatedLayout user={user}>
      {/* PAGE HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "7rem", paddingRight: "7rem", marginTop: "-1.5rem", marginBottom: "1rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1.3, WebkitTextStroke: ".8px #000000", backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Capital Report
        </h1>
        <Link to="/generate-sales-report" style={{ backgroundColor: "#4b2e17", color: "white", padding: "0.5rem 1.5em", borderRadius: "0.375rem", fontSize: "1rem", fontWeight: "bold", cursor: "pointer", textDecoration: "none", marginTop: "1rem", transition: "all 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2c1b0e"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4b2e17"}>
          ← Back
        </Link>
      </div>

      <div style={{ maxWidth: "68rem", margin: "2.5rem auto", fontFamily: "sans-serif" }}>
        {/* CUSTOM CAPITAL TABLE */}
        <div style={{ marginTop:"-3rem", backgroundColor: "#fff", border: "1px solid #d7bfa0", borderRadius: "0.75rem", padding: "1rem", overflowX: "auto", marginBottom: "2rem" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem", color: "#4b2e17", display: "flex", justifyContent: "space-between" }}>
            <span>Capital Summary</span>
            <span>Custom</span>
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
            <thead style={{ backgroundColor: "#f3e6d9", color: "#4b2e17" }}>
              <tr>
                <th style={{ width: "25%" }}>Start Date & End Date</th>
                <th style={{ width: "15%" }}>User</th>
                <th style={{ width: "25%" }}>Action</th>
                <th style={{ width: "15%" }}>Amount</th>
                <th style={{ width: "20%" }}>Options</th>
              </tr>
            </thead>
            <tbody>
              {/* NEW INPUT ROW */}
              {addingNew && (
                <tr style={{ backgroundColor: "#fff7ec" }}>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="date" value={newEntry.start_date} onChange={(e) => setNewEntry({ ...newEntry, start_date: e.target.value })} style={{ padding: "0.3rem", width: "48%", boxSizing: "border-box", marginRight: "4%" }} />
                    <input type="date" value={newEntry.end_date} onChange={(e) => setNewEntry({ ...newEntry, end_date: e.target.value })} style={{ padding: "0.3rem", width: "48%", boxSizing: "border-box" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="text" value={newEntry.user} onChange={(e) => setNewEntry({ ...newEntry, user: e.target.value })} style={{ padding: "0.3rem", width: "100%", boxSizing: "border-box" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="text" placeholder="Enter action" value={newEntry.action} onChange={(e) => setNewEntry({ ...newEntry, action: e.target.value })} style={{ padding: "0.3rem", width: "100%", boxSizing: "border-box" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="number" placeholder="₱" value={newEntry.amount} onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })} style={{ padding: "0.3rem", width: "100%", boxSizing: "border-box" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <button onClick={saveNewTransaction} style={{ backgroundColor: "green", color: "#fff", padding: "0.4rem 0.8rem", borderRadius: "0.375rem", border: "none", cursor: "pointer" }}>Save</button>
                  </td>
                </tr>
              )}

              {/* EXISTING TRANSACTIONS */}
              {transactions.length ? transactions.map(t => (
                <tr key={t.id}>
                  {editingId === t.id ? (
                    <>
                      <td style={{ padding: "0.5rem" }}>
                        <input type="date" value={editEntry.start_date} onChange={(e) => setEditEntry({ ...editEntry, start_date: e.target.value })} style={{ padding: "0.3rem", width: "48%", marginRight: "4%" }} />
                        <input type="date" value={editEntry.end_date} onChange={(e) => setEditEntry({ ...editEntry, end_date: e.target.value })} style={{ padding: "0.3rem", width: "48%" }} />
                      </td>
                      <td style={{ padding: "0.5rem" }}>
                        <input type="text" value={editEntry.user} onChange={(e) => setEditEntry({ ...editEntry, user: e.target.value })} style={{ padding: "0.3rem", width: "100%" }} />
                      </td>
                      <td style={{ padding: "0.5rem" }}>
                        <input type="text" value={editEntry.action} onChange={(e) => setEditEntry({ ...editEntry, action: e.target.value })} style={{ padding: "0.3rem", width: "100%" }} />
                      </td>
                      <td style={{ padding: "0.5rem" }}>
                        <input type="number" value={editEntry.amount} onChange={(e) => setEditEntry({ ...editEntry, amount: e.target.value })} style={{ padding: "0.3rem", width: "100%" }} />
                      </td>
                      <td style={{ padding: "0.5rem" }}>
                        <button onClick={() => saveEditTransaction(t.id)} style={{ marginRight: "0.5rem", backgroundColor: "green", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>Save</button>
                        <button onClick={() => { setEditingId(null); setEditEntry({}); }} style={{ backgroundColor: "#f3e6d9", color: "#4b2e17", border: "none", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{formatDate(t.start_date)} - {formatDate(t.end_date)}</td>
                      <td>{t.user}</td>
                      <td>{t.action}</td>
                      <td>₱ {t.amount}</td>
                      <td>
                    
                        <button onClick={() => { setEditingId(t.id); setEditEntry({ ...t }); }} style={{ border: "1px solid #5e5e5eea", marginRight: "0.5rem", backgroundColor: "#ffffffff", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>🖉</button>
                        <button onClick={() => deleteTransaction(t.id)} style={{ backgroundColor: "#d32515ff", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>🗑</button>
                      
                      </td>
                    </>
                  )}
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "1rem" }}>No capital records found.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* ADD BUTTON */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
            <button onClick={() => setAddingNew(true)} style={{ width: "3rem", height: "3rem", backgroundColor: "#f3dfc3", color: "#c59650ff", border: "1px solid #61533fff", borderRadius: "50%", fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#5c2e0f"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#f3dfc3"}>+</button>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {["Initial Capital", "Total Sales", "Total Capital Used", "Net Profit"].map((label, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #d7bfa0",
                borderRadius: "0.75rem",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f3e6d9",
                  padding: "0.7rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#4b2e17",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                N/A
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
