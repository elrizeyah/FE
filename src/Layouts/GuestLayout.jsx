export default function GuestLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6", // gray-100
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px", // similar to sm:max-w-md
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "12px", // rounded-lg
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
