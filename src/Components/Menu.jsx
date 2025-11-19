import React from "react";

export default function Menu({ toggleMenu }) {
  const buttonStyle = {
    cursor: "pointer",
    padding: "12px",
    borderRadius: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    position: "relative",
    zIndex: 50,
    transition: "background-color 0.2s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e5e7eb", // light gray on hover
  };

  const lineStyle = {
    display: "block",
    width: "24px",
    height: "2px",
    backgroundColor: "#374151", // gray-700
    borderRadius: "1px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      onClick={toggleMenu}
      title="Menu"
      aria-label="Toggle menu"
      style={{ ...buttonStyle, ...(hover ? buttonHoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={containerStyle}>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
      </div>
    </button>
  );
}
