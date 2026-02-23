"use client";

import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "390px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        backgroundImage: "url('/Gallery/Gallery7.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        
      }}
    >
      {/* Hero Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(166, 34, 60, 0.57) 0%, rgba(166, 34, 60, 0.54) 50%, rgba(166, 34, 60, 0.47) 100%)",
          zIndex: 1,
        }}
      ></div>

      {/* Second overlay layer */}
      <div
        style={{
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(166, 34, 60, 0.72) 0%, rgba(166, 34, 60, 0.62) 100%)",
          zIndex: 2,
        }}
      ></div>

      {/* CTA Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          color: "#ffffff",
          maxWidth: "700px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            lineHeight: "1.3",
            marginBottom: "1.2rem",
          }}
        >
         Be in the room where HSE decisions are shaped
        </h2>

        <Link
          to="/registration"
          style={{
            display: "inline-block",
            padding: "0.9rem 2.2rem",
            backgroundColor: "#ffffff",
            color: "#A6223C",
            borderRadius: "6px",
            fontSize: "1.05rem",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            transition: "0.3s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#A6223C";
            e.target.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.color = "#A6223C";
          }}
        >
          Join the Leaders
        </Link>

      </div>
    </section>
  );
};

export default Cta;