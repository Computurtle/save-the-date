import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Save the Date",
    default: "Save the Date",
  },
  description: "Save the date for our wedding on October 15th, 2026!",

  openGraph: {
    title: "A Special Occasion",
    description: "Open me on your phone! - Josh & Lina",
    url: "https://amccrystal.jmccrystal.dev",
    siteName: "Save the Date",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A beautiful landscape for Josh and Lina's wedding",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  // Icons for the browser tab (favicon) and mobile devices
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
