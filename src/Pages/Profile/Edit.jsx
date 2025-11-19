import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ mustVerifyEmail, status, user }) {
  const currentUser = user || { name: "John Doe", email: "johndoe@example.com" };

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
              marginTop: "0.25rem",
              fontSize: "0.875rem",
              color: "#4b5563",
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
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "64rem",
            gap: "2rem",
          }}
        >
          {/* PROFILE CARD */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid #e2cdbf",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontWeight: "bold" }}>Profile Information Form</p>
              <label>
                Name:
                <input
                  type="text"
                  defaultValue={currentUser.name}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                  }}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  defaultValue={currentUser.email}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                  }}
                />
              </label>
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#4b2e17",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Save Profile
              </button>
            </div>
          </div>

          {/* PASSWORD CARD */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid #e2cdbf",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontWeight: "bold" }}>Update Password Form</p>
              <label>
                New Password:
                <input
                  type="password"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                  }}
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.25rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                  }}
                />
              </label>
              <button
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#4b2e17",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Update Password
              </button>
            </div>
          </div>

          {/* DELETE CARD */}
<div
  style={{
    backgroundColor: "white",
    borderRadius: "1rem",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
    padding: "2rem",
    border: "1px solid #e2cdbf",
    width: "100%",
  }}
>
  <div style={{ marginBottom: "1rem", }}>
    <p style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
      Delete Account
    </p>
    <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.4 }}>
      This action is permanent and all your data will be permanently erased. 
      You will not be able to recover your account once it is deleted.
    </p>
  </div>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <button
      style={{
        width: "10rem",
        padding: "0.75rem 1rem",
        backgroundColor: "#f87171",
        color: "white",
        fontWeight: "bold",
        borderRadius: "0.5rem",
        cursor: "pointer",
        border: "none",
        transition: "background-color 0.2s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f87171")}
    >
      Delete User
    </button>
  </div>
</div>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}
