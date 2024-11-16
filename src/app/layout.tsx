import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Bakery_shop",
  description: "Bakery_shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
