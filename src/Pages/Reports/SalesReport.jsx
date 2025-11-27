import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "react-router-dom";


export default function CreateReport() {
  const [auth] = useState({ user: { name: "John Doe" } });

  const [sales] = useState([
    { id: 1, date: "January 2025", amount: 250 },
    { id: 2, date: "January 15, 2025", amount: 500 },
    { id: 3, date: "January Week 3", amount: 200 },
    { id: 4, date: "Jan. 25 - Jan. 27, 2025", amount: 70 },
    { id: 5, date: "January 30, 2025", amount: 30 },
  ]);

  const [capital] = useState([
    { id: 1, date: "January 2025", amount: 250 },
    { id: 2, date: "January 15, 2025", amount: 500 },
    { id: 3, date: "January Week 3", amount: 200 },
    { id: 4, date: "Jan. 25 - Jan. 27, 2025", amount: 70 },
    { id: 5, date: "January 30, 2025", amount: 30 },
  ]);

  const currentUser = auth.user;

  const goTo = (url) => {
    alert(`Navigate to: ${url}`);
  };

  return (
    <AuthenticatedLayout user={currentUser}>
      <div>
        {/* PAGE HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "7rem",
            paddingRight: "7rem",
            marginTop: "-1.5rem",
            marginBottom: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              lineHeight: 1.3,
              WebkitTextStroke: ".8px #000000",
              backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Create Report
          </h1>

          <Link
                    to="/generate-sales-report"
                    style={{
                      backgroundColor: "#6b3e1f",
                      color: "white",
                      padding: "0.5rem 1.5em",
                      backgroundColor: "#4b2e17",
                      borderRadius: "0.375rem",
                      fontSize: "1rem",
                      cursor: "pointer",
                      border: "none",
                      marginTop: "1rem",
                      display: "inline-block",
                      textDecoration: "none",
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: "bold",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2c1b0eff")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
                  >
                    ← Back
                  </Link>

        </div>

        {/* BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link to="/generate-sales-report" style={{ textDecoration: "none", width: "100%" }}>
        <button
          style={{
            textAlign: "left",
            border: "2px solid #4b2e17",
            backgroundColor: "#f9f5f0",
            color: "#000",
            fontWeight: 700,
            fontSize: "1.5rem",
            padding: "0.75rem 2rem",
            cursor: "pointer",
            width: "67rem",
            margin: "0 auto",
            transition: "0.3s",
            marginLeft:"7rem"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
        >
          Generate Sales Report
        </button>
      </Link>

          <Link to="/generate-capital-report" style={{ textDecoration: "none", width: "100%" }}>
        <button
          style={{
            textAlign: "left",
            border: "2px solid #4b2e17",
            backgroundColor: "#f9f5f0",
            color: "#000",
            fontWeight: 700,
            fontSize: "1.5rem",
            padding: "0.75rem 2rem",
            cursor: "pointer",
            width: "67rem",
            margin: "0 auto",
            transition: "0.3s",
            marginLeft:"7rem"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
        >
          Generate Capital Report
        </button>
      </Link>
        </div>

        {/* TABLES CONTAINER */}
        <div style={{ maxWidth: "68rem", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* SALES HISTORY */}
          <section>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#000",
                marginLeft: ".3rem",
                marginBottom: ".5rem",
                marginTop: "-.5rem"

              }}
            >
              Sales History
            </h2>

            {/* SALES TABLE */}
            <div
              style={{
                border: "1.5px solid #000",
                backgroundColor: "white",
                padding: "0",
                boxShadow: "5px 5px 0px rgba(0,0,0,0.25)",
                overflowY: "auto",
                maxHeight: "220px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.95rem",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#e5e5e5" }}>
                    <th style={{ padding: "0.7rem", borderRight: "1px solid #bdbdbd" }}>Sales Transaction #</th>
                    <th style={{ padding: "0.7rem", borderRight: "1px solid #bdbdbd" }}>Date</th>
                    <th style={{ padding: "0.7rem", borderRight: "1px solid #bdbdbd" }}>Total Sales</th>
                    <th style={{ padding: "0.7rem" }}></th>
                  </tr>
                </thead>

                <tbody>
                  {sales.map((item) => (
                    <tr
                      key={item.id}
                      style={{ backgroundColor: "white", transition: "0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f3f3")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                    >
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", borderRight: "1px solid #ddd" }}>#{item.id}</td>
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", borderRight: "1px solid #ddd" }}>{item.date}</td>
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", borderRight: "1px solid #ddd" }}>₱ {item.amount}</td>
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", textAlign: "center", fontSize: "1.1rem" }}>
                        →
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CAPITAL HISTORY */}
          <section>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#000",
                marginLeft: ".3rem",
                marginBottom: ".5rem",
                marginTop: "-.5rem"

              }}
            >
              Capital History
            </h2>

            {/* Capital TABLE */}
            <div
              style={{
                border: "1.5px solid #000",
                backgroundColor: "white",
                padding: "0",
                boxShadow: "5px 5px 0px rgba(0,0,0,0.25)",
                overflowY: "auto",
                maxHeight: "220px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.95rem",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#e5e5e5" }}>
                    <th style={{ padding: "0.7rem", borderRight: "1px solid #bdbdbd" }}>Capital Transaction #</th>
                    <th style={{ padding: "0.7rem", borderRight: "1px solid #bdbdbd" }}>Date</th>
                    <th style={{ padding: "0.7rem", borderRight: "1px solid #bdbdbd" }}>Total Capital</th>
                    <th style={{ padding: "0.7rem" }}></th>
                  </tr>
                </thead>

                <tbody>
                  {sales.map((item) => (
                    <tr
                      key={item.id}
                      style={{ backgroundColor: "white", transition: "0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f3f3")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                    >
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", borderRight: "1px solid #ddd" }}>#{item.id}</td>
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", borderRight: "1px solid #ddd" }}>{item.date}</td>
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", borderRight: "1px solid #ddd" }}>₱ {item.amount}</td>
                      <td style={{ padding: "0.7rem", borderTop: "1px solid #ddd", textAlign: "center", fontSize: "1.1rem" }}>
                        →
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>


        </div>
      </div>
    </AuthenticatedLayout>
  );
}
