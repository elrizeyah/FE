import React from "react";

export default function Modal({
  children,
  show = false,
  maxWidth = "2xl",
  closeable = true,
  onClose = () => {},
}) {
  if (!show) return null;

  const close = () => {
    if (closeable) onClose();
  };

  // Map maxWidth to pixels
  const maxWidthMap = {
    sm: 320,
    md: 384,
    lg: 448,
    xl: 512,
    "2xl": 672,
  };
  const modalWidth = maxWidthMap[maxWidth] || maxWidthMap["2xl"];

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(107, 114, 128, 0.75)", // gray-500/75
    zIndex: 50,
  };

  const containerStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowY: "auto",
    padding: "1.5rem",
    zIndex: 50,
  };

  const panelStyle = {
    width: "100%",
    maxWidth: `${modalWidth}px`,
    marginBottom: "1.5rem",
    backgroundColor: "#ffffff",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle} onClick={close}></div>
      <div style={panelStyle}>{children}</div>
    </div>
  );
}
