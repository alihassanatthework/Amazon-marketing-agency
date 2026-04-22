import "./globals.css";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.sellerova.com"),
  title: {
    default: "Sellerova | Amazon Growth Agency",
    template: "%s | Sellerova",
  },
  description:
    "Sellerova helps Amazon brands grow through PPC management, catalog optimization, and performance-driven Amazon growth strategies.",

  keywords: [
    "Sellerova",
    "Amazon growth agency",
    "Amazon PPC agency",
    "Amazon PPC management",
    "Amazon advertising management",
    "Amazon catalog optimization",
    "Amazon brand management",
    "Amazon seller services",
    "Amazon listing optimization",
    "Amazon marketing agency",
  ],

  authors: [{ name: "Sellerova" }],
  creator: "Sellerova",
  publisher: "Sellerova",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Sellerova | Amazon Growth Agency",
    description:
      "Scale your Amazon brand with Sellerova through PPC management, catalog optimization, and data-driven growth strategies.",
    url: "https://www.sellerova.com",
    siteName: "Sellerova",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/sellerova-logo.png",
        width: 1200,
        height: 630,
        alt: "Sellerova",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sellerova | Amazon Growth Agency",
    description:
      "Scale your Amazon brand with Sellerova through PPC management, catalog optimization, and data-driven growth strategies.",
    images: ["/images/sellerova-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FZ7ZMZ48JF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FZ7ZMZ48JF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}