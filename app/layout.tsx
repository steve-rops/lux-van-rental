import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "VANRA",
  description: "Find a luxury Van",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={`max-w-[1440px] mx-auto antialiased ${inter.className}`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
