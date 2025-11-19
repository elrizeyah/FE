import React from "react";

export default function PrimaryButton({ disabled, style = {}, children, ...props }) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem", // rounded-md
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    backgroundColor: "#1f2937", // bg-gray-800
    padding: "0.5rem 1rem", // px-4 py-2
    fontSize: "0.75rem", // text-xs
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em", // tracking-widest
    color: "#ffffff",
    transition: "all 0.15s ease-in-out",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.25 : 1,
    outline: "none",
  };

  const hoverStyle = !disabled
    ? { backgroundColor: "#374151" } // hover:bg-gray-700
    : {};

  const activeStyle = !disabled
    ? { backgroundColor: "#111827" } // active:bg-gray-900
    : {};

  return (
    <button
      {...props}
      disabled={disabled}
      style={{ ...baseStyle, ...style }}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, { backgroundColor: baseStyle.backgroundColor })}
      onMouseDown={(e) => Object.assign(e.currentTarget.style, activeStyle)}
      onMouseUp={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
    >
      {children}
    </button>
  );
}
