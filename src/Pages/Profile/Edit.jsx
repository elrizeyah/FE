// Edit.jsx
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ mustVerifyEmail, status, user }) {
  const currentUser = user || { name: "John Doe", email: "johndoe@example.com" };

  // States for inputs
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Editing states
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingCurrentPassword, setIsEditingCurrentPassword] = useState(false);
  const [isEditingNewPassword, setIsEditingNewPassword] = useState(false);
  const [isEditingConfirmPassword, setIsEditingConfirmPassword] = useState(false);

  const isAnyEditing =
    isEditingName ||
    isEditingEmail ||
    isEditingCurrentPassword ||
    isEditingNewPassword ||
    isEditingConfirmPassword;

  // Editable Input component
  const EditableInput = ({ label, value, setValue, isEditing, setIsEditing, type = "text" }) => (
    <label style={{ fontWeight: "bold", color: "#4b4b4bff", fontSize: ".9rem", display: "block", marginTop: "1rem" }}>
      {label}
      <div style={{ position: "relative", width: "68rem", marginTop: "0.25rem" }}>
        <input
          type={type}
          value={value}
          disabled={!isEditing}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem 2.5rem 0.5rem 0.5rem",
            borderRadius: "0.375rem",
            border: "1px solid #d1d5db",
          }}
        />
        <FiEdit
          onClick={() => setIsEditing(!isEditing)}
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: isEditing ? "#158a15ff" : "#9ca3af",
          }}
        />
      </div>
    </label>
  );

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
              backgroundColor: "#fdf6ee",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid #e2cdbf",
              width: "70rem",
              marginLeft: "-5rem",
              marginTop: "-2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontWeight: "semi-bold", fontSize: "2rem", marginTop: "-.5rem", color: "#444444ff" }}>
                Profile Information
              </p>
              <p
                style={{
                  marginTop: "-3rem",
                  fontSize: "0.875rem",
                  color: "#4b5563",
                  letterSpacing: "2px",
                }}
              >
                Update your name and email.
              </p>

              <EditableInput label="Name" value={name} setValue={setName} isEditing={isEditingName} setIsEditing={setIsEditingName} />
              <EditableInput label="Email" value={email} setValue={setEmail} isEditing={isEditingEmail} setIsEditing={setIsEditingEmail} type="email" />

              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3dc53dff",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    width: "8rem",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#158a15ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3dc53dff")}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* PASSWORD CARD */}
          <div
            style={{
              backgroundColor: "#fdf6ee",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid #e2cdbf",
              width: "70rem",
              marginLeft: "-5rem",
              marginTop: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontWeight: "semi-bold", fontSize: "2rem", marginTop: "-0.5rem", color: "#444444ff" }}>
                Update Password
              </p>
              <p
                style={{
                  marginTop: "-3rem",
                  fontSize: "0.875rem",
                  color: "#4b5563",
                  letterSpacing: "2px",
                }}
              >
                Update your password
              </p>

              <EditableInput
                label="Current Password"
                value={currentPassword}
                setValue={setCurrentPassword}
                isEditing={isEditingCurrentPassword}
                setIsEditing={setIsEditingCurrentPassword}
                type="password"
              />
              <EditableInput
                label="New Password"
                value={newPassword}
                setValue={setNewPassword}
                isEditing={isEditingNewPassword}
                setIsEditing={setIsEditingNewPassword}
                type="password"
              />
              <EditableInput
                label="Confirm New Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                isEditing={isEditingConfirmPassword}
                setIsEditing={setIsEditingConfirmPassword}
                type="password"
              />

              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#3dc53dff",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderRadius: "0.5rem",
                    border: "none",
                    cursor: "pointer",
                    width: "8rem",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#158a15ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3dc53dff")}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* DELETE CARD */}
          <div
            style={{
              backgroundColor: "#fdf6ee",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid #e2cdbf",
              width: "70rem",
              marginLeft: "-5rem",
              marginTop: "1rem",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "semi-bold", fontSize: "2rem", marginTop: "-0.5rem", color: "#444444ff" }}>
                Delete Account
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  lineHeight: 1.4,
                  letterSpacing: "2px",
                  marginTop: "-2rem",
                }}
              >
                This action is permanent and all your data will be permanently erased.
                You will not be able to recover your account once it is deleted.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#eb1a1aff",
                  color: "#ffffff",
                  fontWeight: "bold",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                  width: "8rem",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ad1010ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#eb1a1aff")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
