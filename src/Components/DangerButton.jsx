import React from "react";

export default function DangerButton({ disabled = false, children, style = {}, ...props }) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem",
    border: "1px solid transparent",
    backgroundColor: disabled ? "#f87171a0" : "#dc2626",
    padding: "0.5rem 1rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#ffffff",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.15s ease-in-out",
    ...style,
  };

  const handleMouseEvents = (e, color) => {
    if (!disabled) e.currentTarget.style.backgroundColor = color;
  };

  return (
    <button
      {...props}
      disabled={disabled}
      style={baseStyle}
      onMouseOver={(e) => handleMouseEvents(e, "#ef4444")}
      onMouseOut={(e) => handleMouseEvents(e, "#dc2626")}
      onMouseDown={(e) => handleMouseEvents(e, "#b91c1c")}
      onMouseUp={(e) => handleMouseEvents(e, "#ef4444")}
    >
      {children}
    </button>
  );
}
