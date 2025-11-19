import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IconPencil, IconTrash, IconEye } from "@tabler/icons-react";

export default function Inventory1({ products = [] }) {
  const [search, setSearch] = useState("");

  const edit = (id) => {
    window.location.href = `/edit-product/${id}`;
  };

  const del = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Deleted product with id:", id);
      alert("Product deleted successfully.");
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const lowStockProducts = filteredProducts.filter((p) => p.quantity <= 20);

  const styles = {
    header: {
      WebkitTextStroke: ".8px #000000",
      backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      lineHeight: "1.3",
      fontSize: "3rem",
      fontWeight: "800",
      marginLeft: "5rem",
      marginTop: "-2rem",
      marginBottom: "-1rem",
    },
    button: {
      width: "100%",
      maxWidth: "68rem",
      backgroundColor: "#fff2e0",
      border: "1px solid black",
      fontWeight: "600",
      color: "black",
      fontSize: "2rem",
      padding: "0.75rem 0",
      textAlign: "left",
      paddingLeft: "1.5rem",
      cursor: "pointer",
      marginTop: "-10px",
      marginLeft: "7rem",
    },
    section: {
      marginLeft: "7rem",
    },
    tableContainer: {
      border: "1px solid #4b2e17",
      backgroundColor: "white",
      boxShadow: "5px 5px 0 gray",
      padding: "1rem",
      overflowX: "auto",
      width: "68rem",
    },
    searchInput: {
      width: "50rem",
      padding: "0.25rem 0.75rem",
      border: "1px solid gray",
      outline: "none",
    },
    select: {
      width: "12rem",
      padding: "0.25rem 0.75rem",
      border: "1px solid gray",
      outline: "none",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    thead: {
      backgroundColor: "#d6d6d6",
      color: "black",
      borderBottom: "1px solid #4b2e17",
    },
    th: {
      padding: "0.5rem 0.75rem",
      textAlign: "left",
      fontSize: "0.875rem",
      fontWeight: "600",
    },
    td: {
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
      color: "#374151",
    },
    actions: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
    },
    noData: {
      textAlign: "center",
      padding: "1rem",
      color: "#6b7280",
      fontStyle: "italic",
    },
    sectionTitle: {
      fontSize: "1.875rem",
      fontWeight: "700",
      marginBottom: "0.75rem",
      marginTop: "2rem",
      color: "black",
    },
    rowOdd: { backgroundColor: "white" },
    rowEven: { backgroundColor: "#f3f4f6" },
    img: { width: "3rem", height: "3rem", borderRadius: "0.25rem" },
  };

  return (
    <AuthenticatedLayout
      header={<h1 style={styles.header}>Inventory Management</h1>}
    >
      <button
        style={styles.button}
        onClick={() => (window.location.href = "/add-product")}
      >
        Add Product
      </button>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Inventory</h2>

        <div style={styles.tableContainer}>
          {/* Search and Category */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "600", color: "black" }}>
                Search for Product:
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "600", color: "black" }}>
                Category:
              </label>
              <select style={styles.select}>
                <option>Category</option>
              </select>
            </div>
          </div>

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>Product Image</th>
                <th style={styles.th}>Product #</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Product Name</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Quantity Available</th>
                <th style={{ ...styles.th, textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, idx) => (
                  <tr key={item.id} style={idx % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                    <td style={styles.td}>
                      <img
                        src={`/${item.file_path}`}
                        alt={item.name}
                        style={styles.img}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </td>
                    <td style={styles.td}>{item.id}</td>
                    <td style={styles.td}>{item.category}</td>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>₱ {item.price}</td>
                    <td style={styles.td}>{item.quantity}</td>
                    <td style={{ ...styles.td, ...styles.actions }}>
                      <IconPencil style={{ cursor: "pointer", color: "green" }} onClick={() => edit(item.id)} />
                      <IconTrash style={{ cursor: "pointer", color: "red" }} onClick={() => del(item.id)} />
                      <IconEye style={{ cursor: "pointer", color: "gray" }} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={styles.noData}>No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Low Stock */}
        <h2 style={styles.sectionTitle}>Products Low In Stock!</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>Product Image</th>
                <th style={styles.th}>Product #</th>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Product Name</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Quantity Available</th>
                <th style={{ ...styles.th, textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lowStockProducts.length > 0 ? (
                lowStockProducts.map((item, idx) => (
                  <tr key={item.id} style={idx % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                    <td style={styles.td}>
                      <img
                        src={`/${item.file_path}`}
                        alt={item.name}
                        style={styles.img}
                        onError={(e) => (e.target.style.display = "none")}
                      />
                    </td>
                    <td style={styles.td}>{item.id}</td>
                    <td style={styles.td}>{item.category}</td>
                    <td style={styles.td}>{item.name}</td>
                    <td style={styles.td}>₱ {item.price}</td>
                    <td style={styles.td}>{item.quantity}</td>
                    <td style={{ ...styles.td, ...styles.actions }}>
                      <IconPencil style={{ cursor: "pointer", color: "green" }} onClick={() => edit(item.id)} />
                      <IconTrash style={{ cursor: "pointer", color: "red" }} onClick={() => del(item.id)} />
                      <IconEye style={{ cursor: "pointer", color: "gray" }} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={styles.noData}>No low stock products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
