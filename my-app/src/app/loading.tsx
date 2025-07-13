import React from "react";

function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          border: "8px solid #fff2",
          borderTop: "8px solid #fff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: 24,
        }}
      />
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Loading...</h1>
      <p style={{ fontSize: "1.1rem", marginTop: 8 }}>
        Please wait while we prepare your content.
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}

export default Loading;