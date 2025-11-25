import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ProfileSecurityCheck() {
  return (
    <AuthenticatedLayout
      header={
        <div>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              lineHeight: 1.3,
              marginLeft: "5rem",
              WebkitTextStroke: ".8px #000000",
              backgroundImage: "linear-gradient(to bottom, #ec8845ff, #3b1f0d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Profile Settings
          </h1>

          <p
            style={{
              marginLeft: "5rem",
              marginTop: "-2rem",
              fontSize: "0.875rem",
              color: "#4b5563",
              letterSpacing: "2px",
            }}
          >
            Manage your account information and security settings
          </p>
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#fdf6ee",
            width: "90%",
            maxWidth: "69rem",
            borderRadius: "1rem",
            border: "1px solid #e2cdbf",
            padding: "2.5rem",
            marginTop:"-2rem"
          }}
        >
          <p style={{ fontWeight: "semi-bold", fontSize:"2rem", marginTop:"-.5rem", color:"#444444ff" }}>Security Settings</p>
              <p
            style={{
              marginTop: "-1.5rem",
              fontSize: "0.875rem",
              color: "#4b5563",
              letterSpacing:"2px",
              marginBottom:"2rem"
            }}
          >
            Enter the account password before accessing and editing profile
            information.
          </p>

          <label
            style={{
              fontWeight: "bold",
              color: "#4b4b4bff",
              fontSize: ".9rem",

            }}
          >
            Password
          </label>

          <input
  type="password"
  placeholder="*********************"
  style={{
    width: "68rem",            // corrected duplicate width
    padding: "0.5rem 0.5rem 0.5rem 1.5rem", // top right bottom left
    marginTop: "0.25rem",
    borderRadius: "0.375rem",
    border: "1px solid #d1d5db",
  }}
/>


          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              style={{
                padding: "0.6rem 1.5rem",
                backgroundColor: "#553522ff",
                color: "#ffffff",
                fontWeight: "bold",
                borderRadius: "0.2rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color .3s",
                lineHeight:".6rem",
                width:"7.2rem"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#261107")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#553522ff")
              }
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
