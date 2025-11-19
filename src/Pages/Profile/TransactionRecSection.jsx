import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TransactionRecSection({ auth, onNavigate }) {
  return (
    <AuthenticatedLayout user={auth?.user}>
      {/* Header with Back button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          paddingLeft: "7rem",
          paddingRight: "7rem",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "800",
            lineHeight: "1.2",
            margin: 0,
            WebkitTextStroke: ".8px #000000",
            backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Transaction Record
        </h1>

        <button
          onClick={() => onNavigate("/dashboard")}
          style={{
            backgroundColor: "#4b2e17",
            color: "#ffffff",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6b3e1f")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4b2e17")}
        >
          ← Back
        </button>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "3rem",
          maxWidth: "68rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <button
          onClick={() => onNavigate("/make-transaction")}
          style={{
            width: "100%",
            padding: ".5rem 1rem",
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "left",
            border: "2px solid #4b2e17",
            borderRadius: "0.5rem",
            backgroundColor: "#f9f5f0",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
        >
          Make a Transaction Record Form
        </button>

        <button
          onClick={() => onNavigate("/transaction-record")}
          style={{
            width: "100%",
            padding: ".5rem 1rem",
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "left",
            border: "2px solid #4b2e17",
            borderRadius: "0.5rem",
            backgroundColor: "#f9f5f0",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8d4b8")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9f5f0")}
        >
          Transaction Records List
        </button>
      </div>
    </AuthenticatedLayout>
  );
}
