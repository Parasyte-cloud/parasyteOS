import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ParasyteOS",
    template: "%s | ParasyteOS",
  },
  description: "The adaptive operating system for organizations.",
  icons: {
    icon: [
      {
        url: "/brand/parasyteos-icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/brand/parasyteos-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/brand/parasyteos-apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
