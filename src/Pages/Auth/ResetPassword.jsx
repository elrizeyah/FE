import React, { useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});
    setStatus("");

    // Simulate password reset
    setTimeout(() => {
      if (!email) setErrors({ email: "Email is required" });
      else if (!password) setErrors({ password: "Password is required" });
      else if (password !== passwordConfirmation)
        setErrors({ password_confirmation: "Passwords do not match" });
      else setStatus("Password successfully reset!");

      setProcessing(false);
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(to bottom, #f6ebda, #8a583a)",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* LOGO TOP LEFT */}
      <div style={{ position: "absolute", top: "1.5rem", left: "2rem" }}>
        <img
          src="/images/2.png"
          alt="Logo"
          style={{ width: "150px", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
        />
      </div>

      {/* FORM CARD */}
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "24px",
          padding: "2.5rem",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "700",
            marginBottom: "0.25rem",
          }}
        >
          Create New Password
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#6b7280",
            marginBottom: "2rem",
          }}
        >
          Please enter your new password.
        </p>

        {status && (
          <div
            style={{
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "green",
            }}
          >
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div style={{ textAlign: "left", marginBottom: "1.25rem" }}>
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              value={email}
              style={{ marginTop: "0.25rem", width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputError message={errors.email} />
          </div>

          {/* PASSWORD */}
          <div style={{ textAlign: "left", marginBottom: "1.25rem" }}>
            <InputLabel htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              value={password}
              style={{ marginTop: "0.25rem", width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputError message={errors.password} />
          </div>

          {/* CONFIRM PASSWORD */}
          <div style={{ textAlign: "left", marginBottom: "1.25rem" }}>
            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
            <TextInput
              id="password_confirmation"
              type="password"
              value={passwordConfirmation}
              style={{ marginTop: "0.25rem", width: "100%" }}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <InputError message={errors.password_confirmation} />
          </div>

          {/* BUTTON */}
          <PrimaryButton
            disabled={processing}
            style={{
              width: "100%",
              padding: "0.5rem 0",
              backgroundColor: "#422912ff",
              fontSize: "15px",
              transition: "0.3s",
              cursor: processing ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (!processing) e.currentTarget.style.backgroundColor = "#2e1e0fff";
            }}
            onMouseLeave={(e) => {
              if (!processing) e.currentTarget.style.backgroundColor = "#422912ff";
            }}
          >
            Change Password
          </PrimaryButton>

          <a
            href="/login"
            style={{
              display: "block",
              marginTop: "1rem",
              fontSize: "0.75rem",
              color: "#1d4ed8",
              fontWeight: "500",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            Back to Login
          </a>
        </form>
      </div>
    </div>
  );
}
