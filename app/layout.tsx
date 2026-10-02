// Import type definitions for metadata and ReactNode.
// Metadata is used to define page information (title, description, etc.)
// ReactNode represents the children elements passed into the layout.

import type { Metadata } from "next";
import type { ReactNode } from "react";

// Import global CSS styles applied across the entire application.
import "./globals.css";

// Define metadata for the application.
// This information is used by Next.js to set page title and description.
export const metadata: Metadata = {
  title: "Cooperative Database Management System",
  description: "Web-based Cooperative Database Management System",
};


// RootLayout component wraps all pages in the application.
// It ensures consistent HTML structure and applies global styles.
// The 'children' prop represents the content of each page.
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}