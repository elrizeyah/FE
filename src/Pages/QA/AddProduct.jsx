import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AddProduct() {
  const [productData, setProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    is_archived: false,
    file: null,
  });

  const resetForm = () => {
    setProduct({
      name: "",
      quantity: 0,
      price: 0,
      category: "",
      is_archived: false,
      file: null,
    });
  };

  const submitProducts = (e) => {
    e.preventDefault();
    console.log("Submitting product:", productData);
    alert("Product added successfully!");
    resetForm();
  };

  return (
    <AuthenticatedLayout>
      <div style={{ display: "flex", justifyContent: "center", padding: "3rem 1rem" }}>
        <form
          onSubmit={submitProducts}
          style={{
            backgroundColor: "#fefaf7",
            border: "1px solid #d1d5db",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "40rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#f8ecdf",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid #d1d5db",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#000" }}>
              Add Product
            </h1>
          </div>

          {/* Form Fields */}
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Product Name + Image */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#1f2937" }}>
                Add Product Name
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                <input
                  type="text"
                  value={productData.name}
                  onChange={(e) => setProduct({ ...productData, name: e.target.value })}
                  style={{
                    flex: 1,
                    padding: "0.5rem",
                    border: "1px solid #9ca3af",
                    borderRadius: "0.25rem",
                    fontSize: "0.875rem",
                  }}
                />
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontSize: "0.875rem",
                    backgroundColor: "#e5e7eb",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid #9ca3af",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d1d5db")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e5e7eb")}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProduct({ ...productData, file: e.target.files[0] })}
                    style={{ display: "none" }}
                  />
                  📷 Change Image
                </label>
              </div>
            </div>

            {/* Category */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#1f2937" }}>Add Category</label>
              <select
                value={productData.category}
                onChange={(e) => setProduct({ ...productData, category: e.target.value })}
                style={{
                  marginTop: "0.25rem",
                  padding: "0.5rem",
                  border: "1px solid #9ca3af",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                <option value="">Select category</option>
                <option value="chocolate">Chocolate</option>
                <option value="drinks">Drinks</option>
                <option value="snacks">Snacks</option>
              </select>
            </div>

            {/* Quantity */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#1f2937" }}>Indicate Quantity Available</label>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                <button
                  type="button"
                  onClick={() => setProduct({ ...productData, quantity: Math.max(0, productData.quantity - 1) })}
                  style={{ padding: "0.25rem 0.5rem", border: "1px solid #9ca3af", borderRadius: "0.25rem", cursor: "pointer" }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={productData.quantity}
                  onChange={(e) => setProduct({ ...productData, quantity: Number(e.target.value) })}
                  style={{
                    flex: 1,
                    padding: "0.5rem",
                    border: "1px solid #9ca3af",
                    borderRadius: "0.25rem",
                    fontSize: "0.875rem",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setProduct({ ...productData, quantity: productData.quantity + 1 })}
                  style={{ padding: "0.25rem 0.5rem", border: "1px solid #9ca3af", borderRadius: "0.25rem", cursor: "pointer" }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#1f2937" }}>Indicate Price</label>
              <input
                type="number"
                placeholder="₱ 00.00"
                value={productData.price}
                onChange={(e) => setProduct({ ...productData, price: Number(e.target.value) })}
                style={{
                  marginTop: "0.25rem",
                  padding: "0.5rem",
                  border: "1px solid #9ca3af",
                  borderRadius: "0.25rem",
                  fontSize: "0.875rem",
                }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem 1.5rem",
              borderTop: "1px solid #d1d5db",
            }}
          >
            <button
              type="button"
              onClick={resetForm}
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#000",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#4b2e17",
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                fontWeight: "600",
                cursor: "pointer",
                border: "none",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3a2211")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
