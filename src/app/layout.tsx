import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axon Lab",
  description: "Generated by Axon Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  // if (error) return <div>Failed to load</div>;
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed w-full">
          <Navbar />
        </div>
        {children}
        <Footer />
        </body>
    </html>
  );
}
