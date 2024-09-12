import { Header } from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import AppContext from "@/context";
import './globals.css'
import '../assets/css/embla.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "GrowTavern | %s",
    default: "GrowTavern - Private Server for Growtopia",
  },
  description: "GrowTavern is a vibrant private server for Growtopia, offering custom items and a well-balanced economy for a unique gaming experience. Explore exclusive items and enjoy an easy-to-earn currency system.",
  keywords: "GrowTavern, Growtopia private server, custom items, gaming economy, private server",
  openGraph: {
    title: "GrowTavern - Growtopia Private Server",
    description: "Join GrowTavern, the best Growtopia private server with exclusive items and a well-balanced economy. Perfect for new and veteran players alike.",
    url: "https://growtavern.com",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppContext>
          <Header />
          <div className="md:px-20 px-5">
            {children}
          </div>
        </AppContext>
        <Footer />
      </body>
    </html>
  );
}
