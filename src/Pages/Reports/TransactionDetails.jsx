import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TransactionDetails() {
  // Mock transaction data for frontend demonstration
  const transaction = {
    id: 1,
    date: "2025-11-19 - 9:30 AM",
    method: "Cash",
    amount: 2050,
    items: [
      { category: "Stationery", name: "Notebook", price: 50, quantity: 5 },
      { category: "Gadgets", name: "USB Drive", price: 300, quantity: 3 },
      { category: "Health & Safety", name: "Face Mask", price: 20, quantity: 10 },
    ],
  };

  return (
    <AuthenticatedLayout>
      <div style={{ padding: "1.5rem" }}>
        {/* Title and Back Button on One Line */}
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
            Full Transaction Information
          </h1>
          <button
            onClick={() => window.history.back()}
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

        {/* Transaction Details */}
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "white",
            boxShadow: "5px 5px 0 gray",
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <p>Transaction Number: {transaction.id.toString().padStart(3, "0")}</p>
              <p>Date and Time: {transaction.date}</p>
            </div>

            <p>Payment Method: {transaction.method}</p>
            <p>Total Amount: ₱ {transaction.amount.toLocaleString()}</p>
          </div>

          {/* Items Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
              <thead>
                <tr style={{ backgroundColor: "#f3f3f3" }}>
                  {["Category", "Item Name", "Price", "Quantity", "Total Amount"].map((th, idx) => (
                    <th
                      key={idx}
                      style={{ border: "1px solid #4b4b4b", padding: "0.5rem", textAlign: "left" }}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transaction.items.map((item, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#fffaf6" : "#f6ebdf",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#fffaf6" : "#f6ebdf")
                    }
                  >
                    <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                      {item.category}
                    </td>
                    <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                      {item.name}
                    </td>
                    <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                      ₱ {item.price}
                    </td>
                    <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                      {item.quantity}
                    </td>
                    <td style={{ border: "1px solid #999", padding: "0.5rem", color: "#2e1a0e" }}>
                      ₱ {(item.price * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Amount */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
            <p style={{ fontWeight: 600, textAlign: "right" }}>
              Total Amount of Transaction: ₱ {transaction.amount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
