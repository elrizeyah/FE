import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function VerifyEmail({ status, onResend, onLogout }) {
  const [processing, setProcessing] = useState(false);
  const [linkSent, setLinkSent] = useState(status === 'verification-link-sent');

  const submit = (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate sending verification email
    setTimeout(() => {
      console.log('Verification email sent');
      setProcessing(false);
      setLinkSent(true);
      if (onResend) onResend();
    }, 1000);
  };

  return (
    <GuestLayout>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          background: "linear-gradient(to bottom, #f5e7d9, #cfa981)",
          fontFamily: "Poppins, sans-serif",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div style={{ position: "absolute", top: "1.5rem", left: "2rem" }}>
          <img
            src="/images/2.png"
            alt="888 Chocolates & More Logo"
            style={{ width: "150px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          />
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem", color: "#422912" }}>
            Verify Your Email
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#4b5563", marginBottom: "1rem" }}>
            Thanks for signing up! Before getting started, please verify your email address by clicking the link we just emailed to you. If you didn't receive it, we can send another.
          </p>

          {linkSent && (
            <div style={{ marginBottom: "1rem", fontSize: "0.875rem", fontWeight: "500", color: "green" }}>
              A new verification link has been sent to your email address.
            </div>
          )}

          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <PrimaryButton
              disabled={processing}
              style={{
                width: "100%",
                padding: "0.5rem 0",
                fontSize: "14px",
                backgroundColor: "#422912ff",
                cursor: processing ? "not-allowed" : "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!processing) e.currentTarget.style.backgroundColor = "#2e1e0fff";
              }}
              onMouseLeave={(e) => {
                if (!processing) e.currentTarget.style.backgroundColor = "#422912ff";
              }}
            >
              {processing ? "Sending..." : "Resend Verification Email"}
            </PrimaryButton>

            <button
              type="button"
              onClick={onLogout}
              style={{
                fontSize: "0.875rem",
                color: "#1d4ed8",
                textDecoration: "underline",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                alignSelf: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0c3a8c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1d4ed8")}
            >
              Log Out
            </button>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
