import React from "react"; // ← AGREGAR ESTA LÍNEA

export const metadata = {
  title: "GAPID Chatbot",
  description: "Sistema conversacional para GAPID",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
