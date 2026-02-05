import React from "react";

const UpdateSoon = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
        color: "#A6223C",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "6.5rem",
          fontWeight: "800",
          marginBottom: "15px",
          letterSpacing: "1px",
        }}
      >
      Agenda will be
      </h1>

      <p
        style={{
          fontSize: "2.8rem",
          fontWeight: "500",
          color: "#A6223C",
          opacity: 0.9,
        }}
      >
    updated soon!
      </p>
    </div>
  );
};

export default UpdateSoon;
