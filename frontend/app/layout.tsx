import type { Metadata } from "next";
import { Outfit, Anton } from "next/font/google";
import "../styles/globals.scss";
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from '@next/third-parties/google';
import "animate.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TAPPERS Studios | Leading Developers of Telegram Mini Apps & Games",
  description: "TAPPERS specialize in innovative Telegram mini app and game development. " +
    "Partner with us to create engaging, user-focused apps that stand out. " +
    "Discover our unique approach to development!",
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TAPPERS Studios",
  "url": "https://tappers.tech",
  "logo": "https://tappers.tech/img/logo.png",
  "sameAs": [
    "https://t.me/tappers_studios"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "Global",
      "availableLanguage": ["English", "Ukrainian", "Russian"]
    }
  ]
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"bg-background"} style={{ background: "#000" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${anton.variable} font-[family-name:var(--font-outfit)] antialiased`}
      >
        <div className={"min-h-screen"}>
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
        <GoogleAnalytics gaId={"G-62GHVFRTVL"} />
      </body>
    </html>
  );
}
