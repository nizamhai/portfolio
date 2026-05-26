"use client";

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        background: "#0d0a07",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0) 70%)",
          filter: "blur(80px)",
          top: "10%",
          left: "20%",
          animation: "orbFloat1 12s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,100,20,0.2) 0%, rgba(180,100,20,0) 70%)",
          filter: "blur(80px)",
          top: "50%",
          right: "10%",
          animation: "orbFloat2 15s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,200,80,0.15) 0%, rgba(255,200,80,0) 70%)",
          filter: "blur(60px)",
          bottom: "10%",
          left: "40%",
          animation: "orbFloat3 18s ease-in-out infinite",
        }}
      />
    </div>
  );
}
