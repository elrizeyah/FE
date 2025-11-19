import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AddProduct({ auth }) {
  const [visible, setVisible] = useState(false);
  const [productData, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    is_archived: false,
    file: null,
  });

  const [productsList, setProductsList] = useState([]);

  const handleInputChange = (field, value) => {
    setProduct(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setProduct({
      name: "",
      quantity: "",
      price: "",
      category: "",
      is_archived: false,
      file: null,
    });
  };

  const submitProducts = (e) => {
    e.preventDefault();

    // Save product locally
    setProductsList([...productsList, productData]);
    resetForm();
    setVisible(false);
    alert("Product added successfully!");
  };

  return (
    <AuthenticatedLayout user={auth?.user}>
      <div style={{ padding: "2rem" }}>
        <button
          onClick={() => setVisible(true)}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4b2e17",
            color: "#fff",
            borderRadius: "0.375rem",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Add Product
        </button>

        {visible && (
          <div
            style={{
              padding: "1.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.75rem",
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <button
              onClick={() => setVisible(false)}
              style={{
                marginBottom: "1rem",
                padding: "0.25rem 0.5rem",
                backgroundColor: "#ccc",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>

            <form onSubmit={submitProducts} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <label>Product Name:</label>
                <input
                  type="text"
                  value={productData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #ccc" }}
                  required
                />
              </div>

              <div>
                <label>Quantity:</label>
                <input
                  type="number"
                  value={productData.quantity}
                  onChange={(e) => handleInputChange("quantity", Number(e.target.value))}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #ccc" }}
                  required
                />
              </div>

              <div>
                <label>Price:</label>
                <input
                  type="number"
                  value={productData.price}
                  onChange={(e) => handleInputChange("price", Number(e.target.value))}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #ccc" }}
                  required
                />
              </div>

              <div>
                <label>Category:</label>
                <input
                  type="text"
                  value={productData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #ccc" }}
                  required
                />
              </div>

              <div>
                <label>Is Archived?</label>
                <select
                  value={productData.is_archived}
                  onChange={(e) => handleInputChange("is_archived", e.target.value === "true")}
                  style={{ width: "100%", padding: "0.5rem", borderRadius: "0.375rem", border: "1px solid #ccc" }}
                >
                  <option value={false}>Not Archived</option>
                  <option value={true}>Archived</option>
                </select>
              </div>

              <div>
                <label>Upload Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange("file", e.target.files[0])}
                  style={{ width: "100%", padding: "0.25rem" }}
                />
              </div>

              <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    backgroundColor: "#4b2e17",
                    color: "#fff",
                    padding: "0.5rem",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                  }}
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    flex: 1,
                    backgroundColor: "#ccc",
                    padding: "0.5rem",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                  }}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Display added products */}
        {productsList.length > 0 && (
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Added Products:</h2>
            <ul>
              {productsList.map((p, index) => (
                <li key={index} style={{ marginBottom: "0.25rem" }}>
                  {p.name} - Qty: {p.quantity} - ₱{p.price} - {p.category} - Archived: {p.is_archived ? "Yes" : "No"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
