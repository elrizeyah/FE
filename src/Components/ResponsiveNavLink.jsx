import React from "react";

export default function ResponsiveNavLink({
  active = false,
  children,
  onClick = () => {},
  style = {},
  ...props
}) {
  // Define base styles
  const baseStyle = {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    borderLeftWidth: "4px",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    fontWeight: 500,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.15s ease-in-out",
    outline: "none",
  };

  // Active styles
  const activeStyle = active
    ? {
        borderColor: "#6366f1", // indigo-400
        backgroundColor: "#eef2ff", // indigo-50
        color: "#4338ca", // indigo-700
      }
    : {
        borderColor: "transparent",
        backgroundColor: "transparent",
        color: "#4b5563", // gray-600
      };

  // Hover styles (inline hover with React: handled via onMouseEnter / onMouseLeave)
  const hoverStyle = active
    ? {}
    : {
        borderColor: "#d1d5db", // gray-300
        backgroundColor: "#f9fafb", // gray-50
        color: "#1f2937", // gray-800
      };

  const [currentStyle, setCurrentStyle] = React.useState({ ...baseStyle, ...activeStyle });

  return (
    <div
      {...props}
      style={{ ...currentStyle, ...style }}
      onClick={onClick}
      onMouseEnter={() => !active && setCurrentStyle({ ...baseStyle, ...hoverStyle })}
      onMouseLeave={() => !active && setCurrentStyle({ ...baseStyle, ...activeStyle })}
    >
      {children}
    </div>
  );
}
