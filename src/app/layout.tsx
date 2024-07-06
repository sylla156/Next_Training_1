import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Landing page",
  description: "My first Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[80%] mx-auto" >{children}</body>
    </html>
  );
}
