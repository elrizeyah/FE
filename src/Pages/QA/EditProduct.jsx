import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample products (mock data)
  const sampleProducts = [
    { id: "1", name: "Chocolate Bar", quantity: 10, price: 50, category: "chocolate", is_archived: false },
    { id: "2", name: "Orange Juice", quantity: 20, price: 80, category: "drinks", is_archived: false },
    { id: "3", name: "Chips", quantity: 15, price: 30, category: "snacks", is_archived: false },
  ];

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    is_archived: false,
    file: null,
  });

  // Fetch product on mount (mock)
  useEffect(() => {
    const found = sampleProducts.find((p) => String(p.id) === String(id));
    if (found) {
      setProduct(found);
      setFormData({
        name: found.name,
        quantity: found.quantity,
        price: found.price,
        category: found.category,
        is_archived: found.is_archived,
        file: null,
      });
    }
    setLoading(false);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Show success modal instead of alert
    setShowSuccessModal(true);
  };

  if (loading)
    return (
      <AuthenticatedLayout>
        <div>Loading...</div>
      </AuthenticatedLayout>
    );

  return (
    <AuthenticatedLayout>
      <div style={{ display: "flex", justifyContent: "center", padding: "3rem 1rem" }}>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{
            backgroundColor: "#fefaf7",
            border: "1px solid gray",
            borderRadius: "1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#f8ecdf",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid gray",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          >
            <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#000" }}>Edit Product</h1>
          </div>

          {/* Form Fields */}
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Name + Image */}
            <div>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#333" }}>Edit Product Name</label>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    flex: 1,
                    border: "1px solid gray",
                    borderRadius: "0.25rem",
                    padding: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                />
                <label
                  style={{
                    fontSize: "0.875rem",
                    backgroundColor: "#e2e2e2",
                    padding: "0.5rem 0.75rem",
                    border: "1px solid gray",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                    style={{ display: "none" }}
                  />
                  📷 Change Image
                </label>
              </div>
            </div>

            {/* Category */}
            <div>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#333" }}>Add Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{
                  marginTop: "0.25rem",
                  width: "100%",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  padding: "0.5rem",
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
            <div>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#333" }}>Indicate Quantity Available</label>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, quantity: Math.max(0, formData.quantity - 1) })}
                  style={{ border: "1px solid gray", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", cursor: "pointer" }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                  style={{
                    flex: 1,
                    border: "1px solid gray",
                    borderRadius: "0.25rem",
                    padding: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                  style={{ border: "1px solid gray", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", cursor: "pointer" }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div>
              <label style={{ fontWeight: "600", fontSize: "0.875rem", color: "#333" }}>
                Indicate Price
              </label>
              <input
                type="number"
                value={formData.price === 0 ? "" : formData.price}
                placeholder="0"
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
                style={{
                  marginTop: "0.25rem",
                  width: "33.3rem",
                  border: "1px solid gray",
                  borderRadius: "0.25rem",
                  padding: "0.5rem",
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
              borderTop: "1px solid gray",
            }}
          >
            <button
              type="button"
              onClick={() => navigate("/inventory1")}
              style={{ fontSize: "0.875rem", fontWeight: "600", color: "#000", cursor: "pointer", background: "none", border: "none", textDecoration: "underline" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#4b2e17",
                color: "#fff",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.25rem",
                fontWeight: "600",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
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
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginTop: "-1rem" }}>
              Notice
            </h1>

            <p style={{ marginTop: "2rem", color: "#555", fontSize: "15px" }}>
              Your product has been successfully updated.
            </p>

            <button
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/inventory1");
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
              Confirm
            </button>
          </div>
        </div>
      )}
    </AuthenticatedLayout>
  );
}
