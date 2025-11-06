"use client";

export default function Chatbot() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          padding: "10px",
          backgroundColor: "#007acc",
          color: "white",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      >
        <h3>Asistente GAPID</h3>
      </div>
      <div style={{ padding: "10px", height: "300px" }}>
        <p>¡Hola! Soy el asistente de GAPID. ¿En qué puedo ayudarte?</p>
      </div>
      <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          style={{ width: "100%", padding: "5px" }}
        />
      </div>
    </div>
  );
}
