import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hero-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "cinemenu",
  description: "Find the perfect meal for your next movie night.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={righteous.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body>
        <div className="app-shell">
          <Header />
          <main className="flex-1 px-5 py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
