import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});
    setStatus("");

    setTimeout(() => {
      if (!email) {
        setErrors({ email: "Email is required" });
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setErrors({ email: "Email is invalid" });
      } else {
        setStatus("Password reset link sent successfully!");
        window.location.href = "/resetpassword";
      }
      setProcessing(false);
    }, 1000);
  };

  const inputStyle = {
    width: "22.5rem",
    padding: "0.7rem",
    borderRadius: "0.5rem",
    border: `1px solid ${errors.email ? "red" : "#D1D5DB"}`,
    transition: "all 0.2s",
    color: "#111827",
    backgroundColor: email ? "#fff4e5ff" : "#ffffff",
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(to bottom, #fae7d4ff 65%, #7e6346ff)",
        padding: "2rem",
      }}
    >
      {/* Logo */}
      <div style={{ position: "absolute", top: "1.5rem", left: "2rem" }}>
        <img
          src="/images/2.png"
          alt="888 Chocolates & More Logo"
          style={{ width: "170px", marginTop: "-1rem", marginLeft: "-1rem" }}
        />
      </div>

      {/* Form Card */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "1.5rem",
          boxShadow: "4px 8px 20px rgba(0, 0, 0, 0.4)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#000",
            textShadow: "0 2px 4px rgba(0,0,0,0.25)",
            letterSpacing: "1px",
          }}
        >
          Forgot Password?
        </h2>

        <p
          style={{
            fontSize: "0.875rem",
            color: "#8d98a5",
            marginBottom: "1.5rem",
            letterSpacing: "1px",
          }}
        >
          Please enter your verified email address from
          <br /> your account.
        </p>

        {status && (
          <div style={{ marginBottom: "1rem", color: "green", fontWeight: "500" }}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label htmlFor="email" style={{ fontWeight: "550", textAlign: "left", color: "#3b3b3b" }}>
            Your Email Address
          </label>

          <input
  id="email"
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={inputStyle}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#fff4e5"; // lighter highlight on hover
    e.currentTarget.style.borderColor = "#4a2f26"; // darken border
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = email ? "#fff4e5ff" : "#ffffff"; // revert original
    e.currentTarget.style.borderColor = errors.email ? "red" : "#D1D5DB"; // revert border
  }}
/>


          {errors.email && (
            <div style={{ color: "red", fontSize: "0.75rem", textAlign: "left", marginTop: "-0.5rem", marginLeft: '.7rem' }}>
              {errors.email}
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
            <button
              type="submit"
              disabled={processing}
              style={{
                width: "150px",
                padding: "0.6rem",
                fontSize: "1rem",
                color: "#fff",
                background: "linear-gradient(to bottom, #4a2f26, #2f1c14)",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to bottom, #3e2b1c, #2e1c0f)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to bottom, #4a2f26, #2f1c14)";
              }}
            >
              Reset Password
            </button>
          </div>
        </form>

        <a
          href="/login"
          style={{
            display: "block",
            marginTop: "1rem",
            fontSize: "0.7rem",
            color: "#1d4ed8",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: 550,
          }}
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
