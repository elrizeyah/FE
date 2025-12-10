import React, { useState } from "react";
import { IconEye, IconEyeOff, IconMail, IconUser, IconLock } from "@tabler/icons-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleCheckbox = (e) => {
    setData({ ...data, remember: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const newErrors = {};
    if (!data.name) newErrors.name = "Username is required";
    if (!data.email) newErrors.email = "Incorrect or Invalid Format!";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Incorrect or Invalid Format!";
    if (!data.password) newErrors.password = "Incorrect or Invalid Credentials!";
    if (data.password !== data.password_confirmation)
      newErrors.password_confirmation = "Passwords does not match!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setProcessing(false);
      return;
    }

    alert(
      `Registered successfully!\nUsername: ${data.name}\nEmail: ${data.email}\nRemember Me: ${
        data.remember ? "Yes" : "No"
      }`
    );

    setData({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      remember: false,
    });

    setProcessing(false);
  };

  const inputStyle = (field) => ({
    width: "90%",
    padding: "0.5rem 2.5rem 0.5rem 2.5rem",
    borderRadius: "4px", // updated border radius
    border: `1px solid ${errors[field] ? "red" : "#D1D5DB"}`,
    backgroundColor: errors[field] ? "#ffe5e5" : data[field] ? "#fff4e5ff" : "#ffffff",
    color: errors[field] ? "red" : "#111827",
    transition: "all 0.2s",
    position: "relative",
    fontSize: "0.9rem",
  });

  const handleFocus = (e) => {
    e.target.style.borderColor = "#563d28";
    e.target.style.backgroundColor = "#fff4e5ff";
  };

  const handleBlur = (e, field) => {
    e.target.style.borderColor = errors[field] ? "red" : "#D1D5DB";
    e.target.style.backgroundColor = errors[field]
      ? "#ffe5e5"
      : data[field]
      ? "#fff4e5ff"
      : "#ffffff";
  };

  const handleHover = (e) => {
    e.target.style.borderColor = "#563d28";
    e.target.style.backgroundColor = "#fff4e5ff";
  };

  const handleHoverLeave = (e, field) => {
    e.target.style.borderColor = errors[field] ? "red" : "#D1D5DB";
    e.target.style.backgroundColor = errors[field]
      ? "#ffe5e5"
      : data[field]
      ? "#fff4e5ff"
      : "#ffffff";
  };

  const iconForField = (field) => {
    switch (field) {
      case "name":
        return <IconUser size={18} />;
      case "email":
        return <IconMail size={18} />;
      case "password":
      case "password_confirmation":
        return <IconLock size={18} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/images/1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "2rem",
        position: "relative",
      }}
    >
      <img
        src="/images/2.png"
        alt="Logo"
        style={{
          width: "12rem",
          height: "auto",
          position: "absolute",
          top: "1rem",
          left: "1rem",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(255,255,255,0.98)",
          borderRadius: "12px",
          boxShadow: "4px 8px 10px rgba(34, 34, 34, 0.6)",
          padding: "3rem 2rem 2rem 2rem",
          textAlign: "left",
          marginTop:"3rem"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginTop: "-.5rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            textShadow: "0 2px 4px rgba(0,0,0,0.25)",
          }}
        >
          SIGN UP
        </h2>

        <form onSubmit={handleSubmit}>
          {["name", "email", "password", "password_confirmation"].map((field) => {
            const isPassword = field === "password";
            const isConfirm = field === "password_confirmation";
            const labelText =
              field === "name"
                ? "Username"
                : field === "password_confirmation"
                ? "Confirm Password"
                : field.charAt(0).toUpperCase() + field.slice(1);

            return (
              <div key={field} style={{ marginBottom: "1rem", position: "relative" }}>
                <label htmlFor={field} style={{ fontWeight: 550, color: "#3b3b3bff" }}>
                  {labelText}
                </label>

                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      left: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: errors[field] ? "red" : "#555",
                    }}
                  >
                    {iconForField(field)}
                  </div>

                  <input
                    id={field}
                    type={
                      isPassword
                        ? showPassword
                          ? "text"
                          : "password"
                        : isConfirm
                        ? showConfirmPassword
                          ? "text"
                          : "password"
                        : "text"
                    }
                    value={data[field]}
                    onChange={handleChange(field)}
                    placeholder={labelText}
                    style={{
                      ...inputStyle(field),
                      paddingLeft: "2rem",
                      paddingRight: isPassword || isConfirm ? ".6rem" : "0.5rem",
                    }}
                    onFocus={handleFocus}
                    onBlur={(e) => handleBlur(e, field)}
                    onMouseEnter={handleHover}
                    onMouseLeave={(e) => handleHoverLeave(e, field)}
                  />

                  {(isPassword || isConfirm) && (
                    <div
                      onClick={() =>
                        isPassword
                          ? setShowPassword((prev) => !prev)
                          : setShowConfirmPassword((prev) => !prev)
                      }
                      style={{
                        position: "absolute",
                        right: "8px",
                        top: "55%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        color: errors[field] ? "red" : "#555",
                        opacity: 0.7,
                      }}
                    >
                      {isPassword
                        ? showPassword
                          ? <IconEye size={18} />
                          : <IconEyeOff size={18} />
                        : showConfirmPassword
                        ? <IconEye size={18} />
                        : <IconEyeOff size={18} />}
                    </div>
                  )}
                </div>

                {errors[field] && (
                  <span style={{ color: "red", fontSize: "0.75rem", marginLeft: ".6rem" }}>
                    {errors[field]}
                  </span>
                )}
              </div>
            );
          })}

          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", color: "gray" }}>
            <input
              id="remember"
              type="checkbox"
              checked={data.remember}
              onChange={handleCheckbox}
              style={{ accentColor: "#ffffffff", cursor: "pointer" }}
            />
            <label
              htmlFor="remember"
              style={{ marginLeft: "0.25rem", fontSize: "0.6rem", fontWeight: 700, color: "#8d8d8dff" }}
            >
              Remember Me
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                maxWidth: "150px",
                padding: "0.6rem",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(to bottom, #4a2f26, #2f1c14)",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
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
              SIGN UP
            </button>
          </div>

          <div style={{ marginBottom: "-1rem" }}>
            <p style={{ marginTop: "1rem", fontSize: "0.7rem", color: "#919cafff", textAlign: "center" }}>
              Already have an account?{" "}
              <a href="/login" style={{ color: "#2563EB", fontWeight: "500", textDecoration: "underline" }}>
                Log In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
