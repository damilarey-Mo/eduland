import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SessionProvider } from "@/lib/session-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"], 
  variable: "--font-display" 
});

export const metadata: Metadata = {
  title: "ShortLet - Premium Short-Term Apartment Rentals",
  description: "Find fully-furnished apartments with flexible lease terms for business travelers, relocations, and extended stays. Professionally managed apartments with instant booking.",
  keywords: "apartment rental, short-term rental, corporate housing, furnished apartment, flexible lease, monthly rental, business travel, relocation",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-black text-white`}>
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
