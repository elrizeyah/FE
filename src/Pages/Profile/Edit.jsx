// Edit.jsx
import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ mustVerifyEmail, status, user }) {
  const currentUser = user || { name: "John Doe", email: "johndoe@example.com" };

  // Parent states
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Editing flags
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingCurrentPassword, setIsEditingCurrentPassword] = useState(false);
  const [isEditingNewPassword, setIsEditingNewPassword] = useState(false);
  const [isEditingConfirmPassword, setIsEditingConfirmPassword] = useState(false);

  const isEditingProfile = isEditingName || isEditingEmail;
  const isEditingPassword = isEditingCurrentPassword || isEditingNewPassword || isEditingConfirmPassword;

  // DELETE CONFIRM MODAL
  const [showDeleteCard, setShowDeleteCard] = useState(false);

  // EditableInput component
  const EditableInput = ({ label, value, setValue, isEditing, setIsEditing, type = "text" }) => {
    const [localValue, setLocalValue] = useState(value);

    // Sync localValue when parent value changes (after save)
    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    return (
      <label style={{ fontWeight: "bold", color: "#4b4b4bff", fontSize: ".9rem", display: "block", marginTop: "1rem" }}>
        {label}
        <div style={{ position: "relative", width: "68rem", marginTop: "0.25rem" }}>
          <input
            type={type}
            value={localValue}
            disabled={!isEditing}
            onChange={(e) => setLocalValue(e.target.value)}
            style={{
              width: "65rem",
              padding: "0.5rem 2.5rem 0.5rem 0.5rem",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
            }}
          />
          <FiEdit
            onClick={() => setIsEditing(true)}
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
        {/* Note: Changes are committed when "Save Changes" button is clicked */}
      </label>
    );
  };

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
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "64rem", gap: "2rem" }}>
          {/* PROFILE CARD */}
          <div
            style={{
              backgroundColor: "#fdf6ee",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid rgba(54, 54, 54, 1)",
              width: "70rem",
              marginLeft: "-5rem",
              marginTop: "-2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontWeight: "semi-bold", fontSize: "2rem", marginTop: "-.5rem", color: "#444444ff" }}>
                Profile Information
              </p>
              <p style={{ marginTop: "-3rem", fontSize: "0.875rem", color: "#4b5563", letterSpacing: "2px" }}>
                Update your name and email.
              </p>

              <EditableInput label="Name" value={name} setValue={setName} isEditing={isEditingName} setIsEditing={setIsEditingName} />
              <EditableInput label="Email" value={email} setValue={setEmail} isEditing={isEditingEmail} setIsEditing={setIsEditingEmail} type="email" />

              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button
                  disabled={!isEditingProfile}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: isEditingProfile ? "#3dc53dff" : "#9ca3af",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    border: "none",
                    cursor: isEditingProfile ? "pointer" : "not-allowed",
                    width: "8rem",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() => {
                    // Commit changes from local input
                    setIsEditingName(false);
                    setIsEditingEmail(false);
                  }}
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
              border: "1px solid rgba(54, 54, 54, 1)",
              width: "70rem",
              marginLeft: "-5rem",
              marginTop: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontWeight: "semi-bold", fontSize: "2rem", marginTop: "-0.5rem", color: "#444444ff" }}>
                Update Password
              </p>
              <p style={{ marginTop: "-3rem", fontSize: "0.875rem", color: "#4b5563", letterSpacing: "2px" }}>
                Update your password
              </p>

              <EditableInput label="Current Password" value={currentPassword} setValue={setCurrentPassword} isEditing={isEditingCurrentPassword} setIsEditing={setIsEditingCurrentPassword} type="password" />
              <EditableInput label="New Password" value={newPassword} setValue={setNewPassword} isEditing={isEditingNewPassword} setIsEditing={setIsEditingNewPassword} type="password" />
              <EditableInput label="Confirm New Password" value={confirmPassword} setValue={setConfirmPassword} isEditing={isEditingConfirmPassword} setIsEditing={setIsEditingConfirmPassword} type="password" />

              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button
                  disabled={!isEditingPassword}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: isEditingPassword ? "#3dc53dff" : "#9ca3af",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    border: "none",
                    cursor: isEditingPassword ? "pointer" : "not-allowed",
                    width: "8rem",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() => {
                    // Commit changes from local input
                    setIsEditingCurrentPassword(false);
                    setIsEditingNewPassword(false);
                    setIsEditingConfirmPassword(false);
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* DELETE CARD (unchanged) */}
          <div
            style={{
              backgroundColor: "#fdf6ee",
              borderRadius: "1rem",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "2rem",
              border: "1px solid rgba(54, 54, 54, 1)",
              width: "70rem",
              marginLeft: "-5rem",
              marginTop: "1rem",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontWeight: "semi-bold", fontSize: "2rem", marginTop: "-0.5rem", color: "#444444ff" }}>
                Delete Account
              </p>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.4, letterSpacing: "2px", marginTop: "-2rem" }}>
                This action is permanent and all your data will be permanently erased. You will not be able to recover your account once it is deleted.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#eb1a1aff",
                  color: "#ffffff",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  width: "8rem",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ad1010ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#eb1a1aff")}
                onClick={() => setShowDeleteCard(true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE CONFIRM MODAL (unchanged) */}
      {showDeleteCard && (
        <>
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(2px)",
              zIndex: 40,
            }}
          />
          <div
            style={{
              position: "fixed",
              left: "50%",
              transform: "translateX(-50%)",
              top: "30%",
              width: "30rem",
              height: "15rem",
              backgroundColor: "#ffffff",
              borderRadius: "1rem",
              boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
              padding: "1.5rem",
              zIndex: 50,
            }}
          >
            <h3 style={{ fontWeight: 500, fontSize: "1.3rem", marginBottom: ".5rem", color: "#3a3a3aff" }}>
              Are you sure you want to delete your account?
            </h3>
            <p style={{ fontSize: ".9rem", marginBottom: "1rem", color: "#4b5563" }}>
              Once your account is deleted, all of its data will be permanently removed. Please enter your password to confirm.
            </p>
            <label style={{ fontWeight: "bold", color: "#4b4b4bff", fontSize: ".9rem" }}>Password</label>
            <input
              type="password"
              placeholder="*********************"
              style={{
                width: "28rem",
                padding: "0.5rem 0.5rem 0.5rem 1.5rem",
                marginTop: "0.25rem",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
              }}
            />
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "flex-end" }}>
              <button
                style={{
                  padding: ".45rem 1.2rem",
                  minWidth: "120px",
                  borderRadius: ".3rem",
                  backgroundColor: "#e9e9e9ff",
                  fontWeight: "bold",
                  border: ".5px solid #9a9da0ff",
                  cursor: "pointer",
                  color: "#3a3a3aff",
                }}
                onClick={() => setShowDeleteCard(false)}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: ".45rem 1.2rem",
                  minWidth: "120px",
                  borderRadius: ".3rem",
                  backgroundColor: "#eb1a1aff",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </>
      )}
    </AuthenticatedLayout>
  );
}
