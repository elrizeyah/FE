import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const MOCK_PRODUCTS = [
  { id: 1, image: "/images/Buldak C..jpg", productNo: "#000001", category: "Instant N.", name: "Buldak C.", price: 250, quantity: 4 },
  { id: 2, image: "/images/Binggrae B. Milk.jpg", productNo: "#000002", category: "Drinks", name: "Binggrae B. Milk", price: 70, quantity: 6 },
  { id: 3, image: "/images/Peppero M. Choco.jpg", productNo: "#000003", category: "Chocolates", name: "Peppero M. Choco", price: 100, quantity: 50 },
  { id: 4, image: "/images/KitKat Large.jpg", productNo: "#000004", category: "Chocolates", name: "KitKat Large", price: 300, quantity: 20 },
  { id: 5, image: "/images/Shin Ramyun.jpg", productNo: "#000005", category: "Instant N.", name: "Shin Ramyun", price: 120, quantity: 3 },
];

export default function Inventory1({ auth }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const navigate = useNavigate();

  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !categoryFilter || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const lowStockProducts = filteredProducts.filter((p) => p.quantity <= 5);
  const categories = [...new Set(MOCK_PRODUCTS.map((p) => p.category))];

  const tableStyle = { width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" };

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div style={{ padding: "2rem", maxWidth: "90rem", margin: "0 auto", marginTop:"-5rem" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "24px", marginBottom: "16px" }}>
          <h1 style={{
            fontSize: "3rem", fontWeight: "800", lineHeight: 1.3, margin: 0,
            WebkitTextStroke: ".8px #000", backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0 1px 2px rgba(0,0,0,0.1)"
          }}>
            Inventory Management
          </h1>

          <button
            onClick={() => navigate("/dashboard")}
            style={buttonStyle("#4b2e17", "#6b3e1f")}
          >
            ← Back
          </button>
        </div>

        {/* Add Product Button */}
        <div style={{ marginBottom: "48px" }}>
          <Link
            to="/add-product"
            style={{
              display: "block",
              textAlign: "left",
              border: "1px solid #5c5c5c",
              color: "#000",
              fontWeight: "bold",
              padding: "12px 32px",
              backgroundColor: "#f9f5f0",
              width: "73rem", // full width like table
              maxWidth: "100%",
              fontSize: "24px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
          >
            Add Product
          </Link>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div style={{ flex: 1, marginRight: "1rem" }}>
            <label htmlFor="search" style={{ fontWeight: "700", fontSize: "0.9rem" }}>Search for Product:</label>
            <input
              id="search"
              type="text"
              placeholder="Enter Product Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", padding: "0.4rem", fontSize: "1rem", borderRadius: "3px", border: "1px solid #ccc" }}
            />
          </div>
          <div style={{ width: "15rem" }}>
            <label htmlFor="category" style={{ fontWeight: "700", fontSize: "0.9rem" }}>Category:</label>
            <select
              id="category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{ width: "100%", padding: "0.4rem", fontSize: "1rem", borderRadius: "3px", border: "1px solid #ccc", color: "gray" }}
            >
              <option value="">Category</option>
              {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
            </select>
          </div>
        </div>

        {/* Inventory Table */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem" }}>Inventory</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ backgroundColor: "#d6b385" }}>
                  <th style={th}>Product Image</th>
                  <th style={th}>Product #</th>
                  <th style={th}>Category</th>
                  <th style={th}>Product Name</th>
                  <th style={th}>Price</th>
                  <th style={th}>Quantity Available</th>
                  <th style={th}></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length === 0 ? (
                  <tr><td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>No products found.</td></tr>
                ) : filteredProducts.map((p) => <ProductRow key={p.id} product={p} />)}
              </tbody>
            </table>
          </div>
        </section>

        {/* Low Stock Table */}
        <section>
          <h2 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem" }}>Products Low in Stock!</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ backgroundColor: "#d6b385" }}>
                  <th style={th}>Product Image</th>
                  <th style={th}>Product #</th>
                  <th style={th}>Category</th>
                  <th style={th}>Product Name</th>
                  <th style={th}>Price</th>
                  <th style={th}>Quantity Available</th>
                  <th style={th}></th>
                </tr>
              </thead>
              <tbody>
                {lowStockProducts.length === 0 ? (
                  <tr><td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>No low stock products.</td></tr>
                ) : lowStockProducts.map((p) => <ProductRow key={p.id} product={p} lowStock />)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </AuthenticatedLayout>
  );
}

// Row Component
const ProductRow = ({ product, lowStock }) => (
  <tr style={{ backgroundColor: lowStock ? "#fff4e1" : "#f9f5f0" }}>
    <td style={td}><img src={product.image} alt={product.name} style={{ width: "50px", height: "50px", objectFit: "cover" }} /></td>
    <td style={td}>{product.productNo}</td>
    <td style={td}>{product.category}</td>
    <td style={td}>{product.name}</td>
    <td style={td}>₱ {product.price.toLocaleString()}</td>
    <td style={td}>{product.quantity}</td>
    <td style={td}>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
        {/* Edit */}
        <button onClick={() => window.location.href = `/edit-product/${product.id}`} style={actionButtonStyle("#44b954", "#297233")} title="Edit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
          </svg>
        </button>
        {/* Delete */}
        <button onClick={() => alert(`Delete product ${product.name}`)} style={actionButtonStyle("#f12323", "#9e1818")} title="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"/>
          </svg>
        </button>
        {/* View */}
        <button onClick={() => alert(`View product ${product.name}`)} style={actionButtonStyle("#753500", "#532600")} title="View">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/>
            <circle cx="12" cy="12" r="2.5"/>
          </svg>
        </button>
      </div>
    </td>
  </tr>
);

const th = { border: "1px solid #6b3e1f", padding: "0.75rem", textAlign: "center", backgroundColor: "#d6b385", color: "#3b1f0d", fontWeight: "700" };
const td = { border: "1px solid #6b3e1f", padding: "0.5rem", textAlign: "center" };

const buttonStyle = (bg, hoverBg) => ({
  backgroundColor: bg, color: bg === "#f9f5f0" ? "#000" : "#fff", border: "none", borderRadius: "6px",
  cursor: "pointer", padding: "8px 20px", fontSize: "16px", fontWeight: 600, transition: "background-color 0.2s",
  textAlign: "center"
});

const actionButtonStyle = (bg, hoverBg) => ({
  backgroundColor: bg, border: "none", borderRadius: "6px", cursor: "pointer",
  padding: "0.4rem 0.6rem", display: "flex", alignItems: "center", justifyContent: "center",
  transition: "background-color 0.2s", color: "#fff"
});
