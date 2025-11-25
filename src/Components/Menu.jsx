import React from "react";

export default function Menu({ toggleMenu }) {
  const buttonStyle = {
    cursor: "pointer",
    padding: "8px", // smaller button
    borderRadius: "0.25rem",
    backgroundColor: "transparent", // no hover change
    border: "none",
    position: "relative",
    zIndex: 50,
  };

  const lineStyle = {
    display: "block",
    width: "20px",
    height: "2px",
    backgroundColor: "#374151",
    borderRadius: "1px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
  };

  return (
    <button
      onClick={toggleMenu}
      title="Menu"
      aria-label="Toggle menu"
      style={buttonStyle}
    >
      <div style={containerStyle}>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
        <span style={lineStyle}></span>
      </div>
    </button>
  );
}
