import type { Metadata } from "next";
import { Outfit, Anton } from "next/font/google";
import "../styles/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
  title: "TAPPERS studio",
  description: "TAPPERS - leading agency in the field of Telegram mini apps development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${anton.variable} font-[family-name:var(--font-outfit)] antialiased`}
      >
        <div className={"min-h-screen bg-background overflow-x-hidden"}>
          {children}
        </div>
      </body>
    </html>
  );
}
