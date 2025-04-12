import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kendall Fallas - Portafolio IA",
  description: "Portafolio del curso de IA de la Universidad Nacional de Costa Rica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
