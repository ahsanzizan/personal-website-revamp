import CustomCursor from "@/components/providers/CustomCursorProvider";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const robots =
  process.env.APP_ENV != "production" ? "noindex, nofollow" : "index, follow";

// TOOD: Change this metadata
export const metadata: Metadata = {
  title: { default: "ahsanzizan", template: "%s | ahsanzizan" },
  description: "The personal website and portfolio courtesy of Ahsan Azizan.",
  authors: [{ name: "Ahsan Azizan", url: "https://ahsanzizan.xyz/" }],
  creator: "ahsanzizan",
  openGraph: {
    images: `${process.env.URL}/logo-horizontal.png`,
  },
  keywords: ["my", "app"],
  robots,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        {process.env.APP_ENV === "production" && process.env.GA_ID && (
          <GoogleAnalytics gaId={process.env.GA_ID} />
        )}
        <body
          className={`${poppins.className} antialiased overflow-x-hidden bg-background`}
        >
          {children}
          <CustomCursor />
          <Toaster />
        </body>
      </html>
    </NextAuthProvider>
  );
}
