import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travenor",
  description: "Explore the Beautiful World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <header className="fixed top-0 w-full z-10">
          <Navbar />
        </header>
        <main className="flex-grow pt-24" style={{backgroundColor:"#FFFFFF"}}> 
          {children}
        </main>
        <footer className="w-full mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}