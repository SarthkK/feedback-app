import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Feedback App",
  description: "React project with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return React.createElement(
    "html",
    { lang: "en" },
    React.createElement("body", null, children)
  );
}
