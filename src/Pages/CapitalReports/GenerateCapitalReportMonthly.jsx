import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";

export default function GenerateCapitalReportMonthly({ user }) {
  const [transactions, setTransactions] = useState([
    { id: 1, year: 2025, month: 1, user: "Admin", action: "Initial Capital", amount: 1500 },
    { id: 2, year: 2025, month: 2, user: "Admin", action: "Initial Capital", amount: 2800 },
    { id: 3, year: 2025, month: 3, user: "Admin", action: "Initial Capital", amount: 3200 },
  ]);

  const [addingNew, setAddingNew] = useState(false);
  const [newEntry, setNewEntry] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    user: user?.name || "Admin",
    action: "",
    amount: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [editEntry, setEditEntry] = useState({});

  const saveNewTransaction = () => {
    if (!newEntry.year || !newEntry.month || !newEntry.action || !newEntry.amount) {
      alert("Please fill out all fields.");
      return;
    }

    const newItem = {
      id: transactions.length + 1,
      ...newEntry,
      amount: Number(newEntry.amount),
    };

    setTransactions([...transactions, newItem]);
    setNewEntry({ year: new Date().getFullYear(), month: new Date().getMonth() + 1, user: user?.name || "Admin", action: "", amount: "" });
    setAddingNew(false);
  };

  const saveEditTransaction = (id) => {
    if (!editEntry.year || !editEntry.month || !editEntry.action || !editEntry.amount) {
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

  const monthName = (month) => {
    return new Date(2020, month - 1).toLocaleString("default", { month: "long" });
  };

  // Report header: latest transaction
  const latestTransaction = transactions[transactions.length - 1];

  return (
    <AuthenticatedLayout user={user}>
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
        <div style={{ marginTop:"-3rem", backgroundColor: "#fff", border: "1px solid #d7bfa0", borderRadius: "0.75rem", padding: "1rem", overflowX: "auto", marginBottom: "2rem" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem", color: "#4b2e17", display: "flex", justifyContent: "space-between" }}>
            <span>Capital Summary</span>
            <span>Monthly</span>
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
            <thead style={{ backgroundColor: "#f3e6d9", color: "#4b2e17" }}>
              <tr>
                <th style={{ width: "25%" }}>Year | Month</th>
                <th style={{ width: "20%" }}>User</th>
                <th style={{ width: "25%" }}>Action</th>
                <th style={{ width: "15%" }}>Amount</th>
                <th style={{ width: "15%" }}>Options</th>
              </tr>
            </thead>

            <tbody>
              {/* NEW ENTRY ROW */}
              {addingNew && (
                <tr style={{ backgroundColor: "#fff7ec" }}>
                  <td style={{ padding: "0.5rem", display: "flex", justifyContent: "space-between" }}>
                    <input type="number" min="2000" max="2100" value={newEntry.year} onChange={(e) => setNewEntry({ ...newEntry, year: Number(e.target.value) })} style={{ width: "45%", padding: "0.2rem" }} />
                    <select value={newEntry.month} onChange={(e) => setNewEntry({ ...newEntry, month: Number(e.target.value) })} style={{ width: "50%", padding: "0.2rem" }}>
                      {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{monthName(i+1)}</option>)}
                    </select>
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="text" value={newEntry.user} onChange={(e) => setNewEntry({ ...newEntry, user: e.target.value })} style={{ width: "100%", padding: "0.2rem" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="text" placeholder="Enter action" value={newEntry.action} onChange={(e) => setNewEntry({ ...newEntry, action: e.target.value })} style={{ width: "100%", padding: "0.2rem" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <input type="number" placeholder="₱" value={newEntry.amount} onChange={(e) => setNewEntry({ ...newEntry, amount: e.target.value })} style={{ width: "100%", padding: "0.2rem" }} />
                  </td>
                  <td style={{ padding: "0.5rem" }}>
                    <button onClick={saveNewTransaction} style={{ backgroundColor: "green", color: "#fff", padding: "0.4rem 0.8rem", borderRadius: "0.375rem", border: "none", cursor: "pointer" }}>Save</button>
                  </td>
                </tr>
              )}

              {/* EXISTING TRANSACTIONS */}
              {transactions.length ? transactions.map(t => (
                <tr key={t.id}>
                  <td style={{ display: "flex", justifyContent: "space-between" }}>
                    {editingId === t.id ? (
                      <>
                        <input type="number" min="2000" max="2100" value={editEntry.year} onChange={(e) => setEditEntry({ ...editEntry, year: Number(e.target.value) })} style={{ width: "45%", padding: "0.2rem" }} />
                        <select value={editEntry.month} onChange={(e) => setEditEntry({ ...editEntry, month: Number(e.target.value) })} style={{ width: "50%", padding: "0.2rem" }}>
                          {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{monthName(i+1)}</option>)}
                        </select>
                      </>
                    ) : (
                      `${t.year} | ${monthName(t.month)}`
                    )}
                  </td>
                  <td>
                    {editingId === t.id ? (
                      <input type="text" value={editEntry.user} onChange={(e) => setEditEntry({ ...editEntry, user: e.target.value })} style={{ width: "100%", padding: "0.2rem" }} />
                    ) : t.user}
                  </td>
                  <td>
                    {editingId === t.id ? (
                      <input type="text" value={editEntry.action} onChange={(e) => setEditEntry({ ...editEntry, action: e.target.value })} style={{ width: "100%", padding: "0.2rem" }} />
                    ) : t.action}
                  </td>
                  <td>
                    {editingId === t.id ? (
                      <input type="number" value={editEntry.amount} onChange={(e) => setEditEntry({ ...editEntry, amount: e.target.value })} style={{ width: "100%", padding: "0.2rem" }} />
                    ) : `₱ ${t.amount}`}
                  </td>
                  <td>
                    {editingId === t.id ? (
                      <>
                        <button onClick={() => saveEditTransaction(t.id)} style={{ marginRight: "0.5rem", backgroundColor: "green", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>Save</button>
                        <button onClick={() => setEditingId(null)} style={{ backgroundColor: "#f3e6d9", color: "#4b2e17", border: "none", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => { setEditingId(t.id); setEditEntry({ ...t }); }} style={{ border: "1px solid #5e5e5eea", marginRight: "0.5rem", backgroundColor: "#ffffffff", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>🖉</button>
                        <button onClick={() => deleteTransaction(t.id)} style={{ backgroundColor: "#d32515ff", color: "#fff", border: "none", padding: "0.3rem 0.6rem", borderRadius: "0.3rem", cursor: "pointer" }}>🗑</button>
                      </>
                    )}
                  </td>
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
            <button onClick={() => setAddingNew(true)} style={{ width: "3rem", height: "3rem", backgroundColor: "#f3dfc3", color: "#c59650ff", border: "1px solid #61533fff", borderRadius: "50%", fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", transition: "all 0.2s" }}
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
