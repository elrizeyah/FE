import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MakeTransaction({ auth, initialItems = [] }) {
  const [items, setItems] = useState(initialItems);

  const handleAddClick = () => {
    // For demo, just add a mock item
    const newItem = {
      name: "Sample Item",
      price: 100,
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleMakeTransaction = () => {
    alert("Transaction submitted successfully!\n" + 
      items.map(i => `${i.name} x${i.quantity} = ₱${i.price * i.quantity}`).join("\n") +
      `\nTotal: ₱${totalAmount}`
    );
    // Clear items
    setItems([]);
  };

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div style={{ padding: "3rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Header with Back Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "65rem", marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}>Record Transaction Form</h1>

          <button
            onClick={() => window.location.href = "/transaction-record"}
            style={{
              backgroundColor: "#4b2e17",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.375rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6b3e1f")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
          >
            ← Back
          </button>
        </div>

        {/* Outer Box */}
        <div style={{
          width: "65rem",
          backgroundColor: "#f9f9f9",
          border: "1px solid black",
          boxShadow: "5px 5px 0 rgba(0,0,0,0.3)"
        }}>
          {/* Header Info */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
            <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#000" }}>Date/Time: 00/00/000 - 00:00 PM</p>
            <p style={{ fontWeight: "600", fontSize: "0.875rem", color: "#000" }}>Transaction #: 000000000</p>
          </div>

          {/* Table */}
          <div style={{ padding: "0 1.5rem 1.5rem 1.5rem", position: "relative" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid #ccc", color: "#000" }}>
                  <th style={{ padding: "0.5rem", width: "25%" }}>Item</th>
                  <th style={{ padding: "0.5rem", width: "25%" }}>Price</th>
                  <th style={{ padding: "0.5rem", width: "25%" }}>Quantity</th>
                  <th style={{ padding: "0.5rem", width: "25%" }}>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan="4" style={{ textAlign: "center", padding: "0.75rem", backgroundColor: "#d9d9d9", color: "#555" }}>
                      Please add an item.
                    </td>
                  </tr>
                ) : (
                  items.map((item, index) => (
                    <tr key={index}>
                      <td style={{ padding: "0.5rem", borderBottom: "1px solid #ccc" }}>{item.name}</td>
                      <td style={{ padding: "0.5rem", borderBottom: "1px solid #ccc" }}>₱ {item.price}</td>
                      <td style={{ padding: "0.5rem", borderBottom: "1px solid #ccc" }}>{item.quantity}</td>
                      <td style={{ padding: "0.5rem", borderBottom: "1px solid #ccc" }}>₱ {item.price * item.quantity}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Add Item Button */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem", paddingRight: "1rem" }}>
              <button
                onClick={handleAddClick}
                style={{
                  backgroundColor: "#e6d6c3",
                  color: "#4b2e17",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  borderRadius: "9999px",
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #4b2e17",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d4c0aa")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e6d6c3")}
              >
                +
              </button>
            </div>

            {/* Make Transaction Button */}
            {items.length > 0 && (
              <button
                onClick={handleMakeTransaction}
                style={{
                  backgroundColor: "#4b2e17",
                  color: "#fff",
                  padding: "0.5rem",
                  borderRadius: "0.375rem",
                  marginTop: "1rem",
                  width: "100%",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3b2412")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
              >
                Make Transaction
              </button>
            )}

            {/* Total Amount */}
            {items.length > 0 && (
              <div style={{
                backgroundColor: "#d1fae5",
                padding: "0.5rem",
                marginTop: "0.5rem",
                fontWeight: "bold",
                color: "#000"
              }}>
                Total Amount: ₱{totalAmount}
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
