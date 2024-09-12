import { Header } from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import AppContext from "@/context";
import './globals.css'
import '../assets/css/embla.css'


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
