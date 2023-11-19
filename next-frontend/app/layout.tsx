import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Song Search",
  description: "Search through our database of songs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-hidden">
      <body>{children}</body>
    </html>
  );
}
