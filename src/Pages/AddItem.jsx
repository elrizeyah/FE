import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AddItem({ user }) {
  // Sample products
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 100, stock: 10 },
    { id: 2, name: "Product B", price: 250, stock: 5 },
    { id: 3, name: "Product C", price: 50, stock: 0 },
  ]);

  const [cart, setCart] = useState([]);

  const handleQuantityChange = (index, value) => {
    const newProducts = [...products];
    const quantity = parseInt(value) || 0;
    newProducts[index].stock = quantity;
    setProducts(newProducts);

    // Update cart if item exists
    const cartIndex = cart.findIndex((item) => item.name === newProducts[index].name);
    if (cartIndex !== -1) {
      const newCart = [...cart];
      newCart[cartIndex].quantity = quantity;
      setCart(newCart);
    }
  };

  const handleAddToCart = (product) => {
    if (product.stock === 0) {
      alert(`${product.name} is out of stock!`);
      return;
    }

    const existing = cart.find((item) => item.name === product.name);
    if (existing) {
      existing.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleConfirm = () => {
    if (cart.length === 0) {
      alert("Please add at least one item to proceed.");
      return;
    }
    console.log("Transaction confirmed:", cart);
    alert("Transaction submitted!");
    setCart([]);
  };

  return (
    <AuthenticatedLayout user={user}>
      <div style={{ padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Title */}
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#000", textAlign: "center" }}>
          Record Transaction Form
        </h1>

        <div style={{ display: "flex", gap: "1rem" }}>
          {/* Products List */}
          <div style={{ width: "40rem", backgroundColor: "#f9f9f9", border: "1px solid #000", padding: "1rem", boxShadow: "5px 5px 0 rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <input
                type="text"
                placeholder="Search for Product..."
                style={{ border: "1px solid #ccc", padding: "0.25rem 0.5rem", width: "50%" }}
              />
              <p style={{ fontWeight: "600", fontSize: "0.875rem" }}>Transaction #: 00000000</p>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #ccc", color: "#000" }}>
                  <th style={{ padding: "0.5rem", textAlign: "left" }}>Item</th>
                  <th style={{ padding: "0.5rem", textAlign: "left" }}>Price</th>
                  <th style={{ padding: "0.5rem", textAlign: "center" }}>Stock</th>
                  <th style={{ padding: "0.5rem", textAlign: "center" }}>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #ccc" }}>
                    <td style={{ padding: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock === 0}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          borderRadius: "50%",
                          border: "1px solid #4b2e17",
                          backgroundColor: product.stock === 0 ? "#ccc" : "#e6d6c3",
                          color: product.stock === 0 ? "#888" : "#4b2e17",
                          cursor: product.stock === 0 ? "not-allowed" : "pointer",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        +
                      </button>
                      {product.name}
                    </td>
                    <td style={{ padding: "0.5rem" }}>₱{product.price}</td>
                    <td style={{ padding: "0.5rem", textAlign: "center", color: product.stock > 0 ? "green" : "red" }}>
                      {product.stock > 0 ? product.stock : "Out of Stock"}
                    </td>
                    <td style={{ padding: "0.5rem", textAlign: "center" }}>
                      <input
                        type="number"
                        min="0"
                        style={{ width: "3rem", textAlign: "center", border: "1px solid #ccc" }}
                        onChange={(e) => handleQuantityChange(i, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart */}
          <div style={{ width: "16rem", backgroundColor: "#f4e8da", border: "1px solid #000", padding: "1rem", boxShadow: "5px 5px 0 rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "0.75rem" }}>🛒 Cart</h2>
            {cart.length === 0 ? (
              <p style={{ fontSize: "0.875rem", color: "#666" }}>No items added yet.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {cart.map((item, index) => (
                  <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "0.25rem", backgroundColor: "#fff" }}>
                    <div style={{ fontSize: "0.875rem" }}>
                      <p style={{ fontWeight: "bold", color: "#000" }}>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Total: ₱{item.quantity * item.price}</p>
                    </div>
                    <button onClick={() => setCart(cart.filter((_, i) => i !== index))} style={{ border: "none", background: "none", color: "red", cursor: "pointer", fontWeight: "bold" }}>
                      X
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={handleConfirm}
              disabled={cart.length === 0}
              style={{
                marginTop: "1rem",
                backgroundColor: "#4b2e17",
                color: "#fff",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                cursor: cart.length === 0 ? "not-allowed" : "pointer",
                opacity: cart.length === 0 ? 0.5 : 1,
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
