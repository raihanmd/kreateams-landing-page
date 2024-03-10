import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_libs/components/Navbar";

export const metadata: Metadata = {
  title: "Kreateams | We create, We Unite",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
