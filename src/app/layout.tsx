import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Editorial Eye — Everyday Photography",
  description:
    "A 30-day photography challenge to sharpen your daily photo-taking skills through structured practice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
