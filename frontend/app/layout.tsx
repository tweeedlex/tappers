import type { Metadata } from "next";
import { Outfit, Anton } from "next/font/google";
import "../styles/globals.css";
import {ToastContainer} from "react-toastify";

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
  description: "TAPPERS - leading studio in the field of Telegram mini apps development. " +
    "We create unique and innovative games and apps with a focus on user experience.",
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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="dark"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
