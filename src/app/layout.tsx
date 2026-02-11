import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CryptoInsight - Análise de Mercado Cripto",
  description: "Dashboard de criptomoedas com alertas e monitoramento em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Sidebar />
        <Navbar />
        <main className="ml-56 min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
