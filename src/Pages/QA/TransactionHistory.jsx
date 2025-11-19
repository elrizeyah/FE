import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TransactionHistory({ transactions = [], user }) {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Filter transactions based on search and date
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = !search || t.id.toString().includes(search);
    const matchesDate = !dateFilter || t.date?.startsWith(dateFilter);
    return matchesSearch && matchesDate;
  });

  // Mock data if no transactions provided
  const displayTransactions =
    filteredTransactions.length > 0
      ? filteredTransactions
      : [
          { id: 1, date: "2025-11-18 - 3:45 PM", amount: 5000, method: "Cash" },
          { id: 2, date: "2025-11-19 - 4:30 PM", amount: 7500, method: "Card" },
        ];

  return (
    <AuthenticatedLayout user={user}>
      <div style={{ padding: "1.5rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
            marginBottom: "1.5rem",
          }}
        >
          Transaction Records List
        </h1>

        {/* Search Section */}
        <div
          style={{
            border: "1px solid black",
            boxShadow: "5px 5px 0 gray",
            backgroundColor: "#fff",
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
                  fontWeight: "600",
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
                  padding: "0.5rem",
                  fontSize: "0.875rem",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#4b2e17",
                  marginBottom: "0.25rem",
                }}
              >
                Date:
              </label>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  fontSize: "0.875rem",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Transaction Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#f0f0f0" }}>
                  <th style={{ border: "1px solid #444", padding: "0.5rem" }}>
                    Transaction Number
                  </th>
                  <th style={{ border: "1px solid #444", padding: "0.5rem" }}>
                    Date and Time
                  </th>
                  <th style={{ border: "1px solid #444", padding: "0.5rem" }}>Total Amount</th>
                  <th style={{ border: "1px solid #444", padding: "0.5rem" }}>Payment Method</th>
                  <th style={{ border: "1px solid #444", padding: "0.5rem" }}></th>
                </tr>
              </thead>
              <tbody>
                {displayTransactions.length ? (
                  displayTransactions.map((t, i) => (
                    <tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#fffaf6" : "#f6ebdf",
                        transition: "background-color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = i % 2 === 0 ? "#fffaf6" : "#f6ebdf")
                      }
                    >
                      <td style={{ border: "1px solid #ccc", padding: "0.5rem", color: "#2e1a0e" }}>
                        #{t.id.toString().padStart(10, "0")}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "0.5rem", color: "#2e1a0e" }}>
                        {t.date}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "0.5rem", color: "#2e1a0e" }}>
                        ₱ {t.amount.toLocaleString()}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "0.5rem", color: "#2e1a0e" }}>
                        {t.method}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "0.5rem", textAlign: "center" }}>
                        <button
                          onClick={() => alert(`Show more for transaction #${t.id}`)}
                          style={{
                            backgroundColor: "#4b2e17",
                            color: "#fff",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "0.375rem",
                            fontSize: "0.75rem",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6b3e1f")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
                        >
                          Show More
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      style={{
                        textAlign: "center",
                        padding: "1rem",
                        color: "#4b2e17",
                        fontWeight: "500",
                      }}
                    >
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
