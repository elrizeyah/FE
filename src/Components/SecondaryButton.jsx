import React from "react";

export default function SecondaryButton({
  type = "button",
  disabled = false,
  children,
  onClick = () => {},
  style = {},
  ...props
}) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "0.375rem", // rounded-md
    borderWidth: "1px",
    borderColor: "#d1d5db", // gray-300
    backgroundColor: "#ffffff",
    padding: "0.5rem 1rem", // px-4 py-2
    fontSize: "0.75rem", // text-xs
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#374151", // gray-700
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)", // shadow-sm
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.25 : 1,
    transition: "all 0.15s ease-in-out",
    outline: "none",
  };

  const hoverStyle = disabled
    ? {}
    : {
        backgroundColor: "#f9fafb", // hover:bg-gray-50
      };

  const focusStyle = {
    boxShadow: "0 0 0 2px #6366f1, 0 0 0 4px #eef2ff", // focus:ring-indigo-500 + ring-offset-2
  };

  const [currentStyle, setCurrentStyle] = React.useState(baseStyle);

  return (
    <button
      {...props}
      type={type}
      onClick={disabled ? undefined : onClick}
      style={{ ...currentStyle, ...style }}
      onMouseEnter={() =>
        !disabled &&
        setCurrentStyle({
          ...baseStyle,
          ...hoverStyle,
        })
      }
      onMouseLeave={() => setCurrentStyle(baseStyle)}
      onFocus={() =>
        setCurrentStyle({
          ...baseStyle,
          ...focusStyle,
        })
      }
      onBlur={() => setCurrentStyle(baseStyle)}
    >
      {children}
    </button>
  );
}
