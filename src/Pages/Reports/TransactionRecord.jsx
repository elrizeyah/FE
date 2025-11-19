import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TransactionRecord({ auth }) {
  const [search, setSearch] = useState("");

  // Mock transactions for frontend demonstration
  const transactions = [
    { id: 1, created_at: "2025-11-19T08:30:00", total_amount: 1500 },
    { id: 2, created_at: "2025-11-18T14:45:00", total_amount: 2500 },
    { id: 3, created_at: "2025-11-17T10:15:00", total_amount: 3200 },
  ];

  const goTo = (url) => {
    window.location.href = url;
  };

  // Filter transactions based on search input
  const filteredTransactions = transactions.filter((t) =>
    t.id.toString().includes(search)
  );

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div style={{ padding: "1.5rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            paddingLeft: "8rem",
            paddingRight: "8rem",
            marginTop: "-2rem",
          }}
        >
          <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "black" }}>
            Transaction Records List
          </h1>
          <button
            onClick={() => goTo("/dashboard")}
            style={{
              backgroundColor: "#4b2e17",
              color: "white",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6b3e1f")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
          >
            ← Back
          </button>
        </div>

        {/* Search Section */}
        <div
          style={{
            border: "1px solid black",
            boxShadow: "5px 5px 0 gray",
            backgroundColor: "white",
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#4b2e17",
                  marginBottom: "0.25rem",
                }}
              >
                Search for Transaction:
              </label>
              <input
                type="text"
                placeholder="Input Transaction Number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.875rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#4b2e17",
                  marginBottom: "0.25rem",
                }}
              >
                Date:
              </label>
              <input
                type="date"
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.875rem",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Transaction Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#f3f3f3" }}>
                  <th style={{ border: "1px solid #4b4b4b", padding: "0.5rem" }}>
                    Transaction Number
                  </th>
                  <th style={{ border: "1px solid #4b4b4b", padding: "0.5rem" }}>Date and Time</th>
                  <th style={{ border: "1px solid #4b4b4b", padding: "0.5rem" }}>Total Amount</th>
                  <th style={{ border: "1px solid #4b4b4b", padding: "0.5rem" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((t, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#fffaf6" : "#f6ebdf",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#fffaf6" : "#f6ebdf")
                      }
                    >
                      <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                        #{t.id.toString().padStart(10, "0")}
                      </td>
                      <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                        {new Date(t.created_at).toLocaleString()}
                      </td>
                      <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                        ₱ {t.total_amount.toLocaleString()}
                      </td>
                      <td style={{ border: "1px solid #999", padding: "0.5rem", textAlign: "center" }}>
                        <button
                          onClick={() => goTo(`/transactions/${t.id}`)}
                          style={{
                            backgroundColor: "#4b2e17",
                            color: "white",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "0.375rem",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "background-color 0.2s",
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6b3e1f")}
                          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
                        >
                          Show More
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", padding: "1rem", color: "#4b2e17", fontWeight: 500 }}>
                      No transaction records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
