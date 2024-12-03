import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";



export const metadata: Metadata = {
  title: "Novasce",
  description: "Website Novasce v2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
