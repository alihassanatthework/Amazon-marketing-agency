import "./globals.css";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google"; 

export const metadata = {
  title: {
    default: "YourBrand",
    template: "%s | YourBrand",
  },
  description: "Premium minimal agency website built for clarity and growth.",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}