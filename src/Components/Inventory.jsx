import React, { useState } from "react";
import EditProduct from "./EditProduct";
import DeleteButton from "./DeleteButton";

export default function Inventory({ initialProducts = [] }) {
  const [products, setProducts] = useState(initialProducts);

  // Increment quantity
  const inc = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const dec = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const brownButton = {
    backgroundColor: "#4b2e17",
    color: "#fff",
    fontWeight: "600",
    padding: "8px 16px",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
    width: "100%",
  };

  const redButton = {
    backgroundColor: "#dc2626",
    color: "#fff",
    fontWeight: "600",
    padding: "8px 16px",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
    width: "100%",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "16px",
    borderRadius: "1rem",
    border: "1px solid #e2cdbf",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
  };

  const cardHover = {
    transform: "scale(1.05)",
    borderColor: "#4b2e17",
    boxShadow: "0 10px 15px rgba(75, 46, 23, 0.3)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {products.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              style={cardStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, cardHover)
              }
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
            >
              {item.file_path && (
                <img
                  src={item.file_path}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "0.5rem",
                    marginBottom: "8px",
                  }}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}

              <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#111" }}>
                {item.name}
              </h3>
              <p style={{ color: "#374151" }}>Category: {item.category}</p>
              <p style={{ color: "#374151" }}>Quantity: {item.quantity}</p>
              <p style={{ color: "#374151" }}>Price: ₱{item.price}</p>

              {/* + / - buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  marginTop: "8px",
                }}
              >
                <button
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid #4b2e17",
                    fontWeight: "bold",
                    color: "#4b2e17",
                    cursor: "pointer",
                    fontSize: "1.25rem",
                    transition: "0.2s",
                  }}
                  onClick={() => dec(item.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4b2e17";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#4b2e17";
                  }}
                >
                  -
                </button>
                <button
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid #4b2e17",
                    fontWeight: "bold",
                    color: "#4b2e17",
                    cursor: "pointer",
                    fontSize: "1.25rem",
                    transition: "0.2s",
                  }}
                  onClick={() => inc(item.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4b2e17";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#4b2e17";
                  }}
                >
                  +
                </button>
              </div>

              {/* Edit/Delete buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px", width: "100%" }}>
                <EditProduct product={item} style={brownButton} />
                <DeleteButton style={redButton} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: "#6b7280" }}>No products found in inventory.</p>
      )}
    </div>
  );
}
