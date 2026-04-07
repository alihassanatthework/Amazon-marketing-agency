import ContactClient from "./ContactClient";
export const metadata = {
  title: "Contact",
  description:
    "Contact Sellerova to grow your Amazon brand with expert PPC management, catalog optimization, and performance-focused strategy.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Sellerova",
    description:
      "Contact Sellerova to grow your Amazon brand with expert PPC management, catalog optimization, and performance-focused strategy.",
    url: "https://www.sellerova.com/contact",
    siteName: "Sellerova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Sellerova",
    description:
      "Contact Sellerova to grow your Amazon brand with expert PPC management, catalog optimization, and performance-focused strategy.",
  },
};
export default function ContactPage() {
  return <ContactClient />;
}