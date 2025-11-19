import React, { useState } from "react";

export default function Transaction({ products = [] }) {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addToCart = (product) => {
    if (!product || !product.id) {
      alert("Invalid product!");
      return;
    }

    const quantity = quantities[product.id] || 1;
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const submitProducts = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Checkout successful!");
    clearCart();
  };

  const handleQuantityChange = (productId, value) => {
    const qty = Math.max(1, Number(value));
    setQuantities({ ...quantities, [productId]: qty });
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <strong>Name: </strong> {product.name}
          <br />
          <strong>Price: </strong> ₱{product.price}
          <br />
          <strong>Picture:</strong>{" "}
          <img
            src={`/${product.file_path}`}
            alt={product.name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              display: "block",
              marginBottom: "0.5rem",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
          <strong>Quantity: </strong>
          <input
            type="number"
            min="1"
            value={quantities[product.id] || 1}
            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            style={{ width: "60px", marginLeft: "0.5rem", marginBottom: "0.5rem" }}
          />
          <br />
          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: "#4b2e17",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Cart</h1>
      {cart.length === 0 && <p>No items in cart.</p>}
      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <strong>Name: </strong> {item.name}
          <br />
          <strong>Price: </strong> ₱{item.price}
          <br />
          <strong>Picture:</strong>{" "}
          <img
            src={`/${item.file_path}`}
            alt={item.name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              display: "block",
              marginBottom: "0.5rem",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
          <strong>Quantity: </strong>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            style={{ width: "60px", marginLeft: "0.5rem", marginBottom: "0.5rem" }}
          />
          <br />
          <button
            onClick={() => removeFromCart(index)}
            style={{
              backgroundColor: "#dc2626",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Remove from Cart
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button
          onClick={submitProducts}
          style={{
            backgroundColor: "#4b2e17",
            color: "#fff",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
