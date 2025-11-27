import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function MakeTransaction({ auth, initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddClick = () => {
    const newItem = {
      name: "Sample Item",
      price: 100,
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleMakeTransaction = () => {
    setShowSuccessModal(true); // show modal
    setItems([]); // clear items
  };

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div
        style={{
          padding: "3rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "65rem",
            marginBottom: "1.5rem",
          }}
        >
          <h1
            style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}
          >
            Record Transaction Form
          </h1>

          <button
            onClick={() => (window.location.href = "/transaction-rec-section")}
            style={{
              backgroundColor: "#4b2e17",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.375rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        </div>

        {/* Outer Box */}
        <div
          style={{
            width: "65rem",
            marginTop: "-2rem",
            backgroundColor: "#f9f9f9",
            border: "1px solid black",
            boxShadow: "5px 5px 0 rgba(0,0,0,0.3)",
          }}
        >
          {/* Header Info */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 1.5rem",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "0.875rem",
                color: "#000",
              }}
            >
              Date/Time: 00/00/000 - 00:00 PM
            </p>
            <p
              style={{
                fontWeight: "600",
                fontSize: "0.875rem",
                color: "#000",
              }}
            >
              Transaction #: 000000000
            </p>
          </div>

          {/* Table */}
          <div style={{ padding: "0 1.5rem 1.5rem 1.5rem", position: "relative" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{
                    textAlign: "left",
                    borderBottom: "1px solid #ccc",
                    color: "#000",
                  }}
                >
                  <th style={{ padding: "0.5rem", width: "22%" }}>Item</th>
                  <th style={{ padding: "0.5rem", width: "22%" }}>Price</th>
                  <th style={{ padding: "0.5rem", width: "22%" }}>Quantity</th>
                  <th style={{ padding: "0.5rem", width: "22%" }}>
                    Total Amount
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      style={{
                        textAlign: "center",
                        padding: "0.75rem",
                        backgroundColor: "#d9d9d9",
                        color: "#555",
                      }}
                    >
                      Please add an item.
                    </td>
                  </tr>
                ) : (
                  items.map((item, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        {item.name}
                      </td>
                      <td
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        ₱ {item.price}
                      </td>
                      <td
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        {item.quantity}
                      </td>
                      <td
                        style={{
                          padding: "0.5rem",
                          borderBottom: "1px solid #ccc",
                        }}
                      >
                        ₱ {item.price * item.quantity}
                      </td>
                      <td
  style={{
    padding: "0.5rem",
    borderBottom: "1px solid #ccc",
    textAlign: "center",
  }}
>
  <button
    onClick={() => handleDeleteItem(index)}
    style={{
      backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "10px",
                    padding: "0.3rem 0.4rem",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#720101ff")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "red")}
  >
    🗑️
  </button>
</td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Add Item Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem",
                paddingRight: "1rem",
              }}
            >
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
                  border: "1px solid #4b2e17",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>

            {/* Total Amount */}
            {items.length > 0 && (
              <div
                style={{
                  backgroundColor: "#d1fae5",
                  padding: "0.5rem",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                  color: "#1d680e",
                }}
              >
                Total Amount: ₱{totalAmount}
              </div>
            )}

            {/* Make Transaction Button */}
            {items.length > 0 && (
              <button
                onClick={handleMakeTransaction}
                style={{
                  backgroundColor: "#4b2e17",
                  color: "#fff",
                  padding: "0.5rem",
                  borderRadius: "0.2rem",
                  margin: "1rem auto 0",
                  width: "10rem",
                  cursor: "pointer",
                  fontWeight: "600",
                  display: "block",
                }}
              >
                Make Transaction
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "18rem",
              backgroundColor: "#fff",
              padding: "2rem",
              textAlign: "center",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            
            }}
          >
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop:"-1rem",}}>
              Transaction Successful!
            </h1>

            <p style={{ marginTop: "2rem", color: "#555",fontSize:"15px" }}>
              Your transaction is successful.
            </p>

            <button
              onClick={() => {
                setShowSuccessModal(false);
                window.location.href = "/make-transaction";
              }}
              style={{
                marginTop: "1.5rem",
                width: "8rem",
                padding: "0.5rem",
                backgroundColor: "#ccc",
                borderRadius: "0.3rem",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </AuthenticatedLayout>
  );
}
