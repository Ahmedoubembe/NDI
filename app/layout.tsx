import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "NIRD - Numérique Inclusif, Responsable et Durable",
  description: "Le village de la résistance numérique contre la domination Big Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
