import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Menu from "@/Components/Menu";

export default function TransactionDetails({ transaction, auth }) {
  // Provide default transaction values if none passed
  const data = transaction || {
    user_name: "John Doe",
    quantity: 2,
    price: 500,
    total_amount: 1000,
  };

  return (
    <AuthenticatedLayout
    >
      <div
        style={{
          padding: "24px",
          maxWidth: "768px",
          margin: "24px auto",
          backgroundColor: "#ffffff",
          border: "1px solid #d1d5db",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Transaction Details
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "150px auto",
            rowGap: "12px",
            columnGap: "16px",
            color: "#374151",
          }}
        >
          <div style={{ fontWeight: "bold" }}>User:</div>
          <div>{data.user_name}</div>

          <div style={{ fontWeight: "bold" }}>Quantity:</div>
          <div>{data.quantity}</div>

          <div style={{ fontWeight: "bold" }}>Price:</div>
          <div>₱ {data.price}</div>

          <div style={{ fontWeight: "bold" }}>Total Amount:</div>
          <div>₱ {data.total_amount}</div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
