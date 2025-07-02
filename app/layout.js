import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import WhatsAppChat from "@/component/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://shantibaribd.org"),
  title: {
    default: "Shantibari - Empowering Women in Bangladesh",
    template: `%s | Shantibari`,
  },
  description: "Shantibari is a women's organization, based in Dhaka, Bangladesh, empowering women through mental health support, legal aid, and entrepreneurial programs.",
  keywords: "women empowerment Bangladesh, mental health support, legal aid Dhaka, entrepreneurial programs, women's organization, Shantibari",
  authors: [{ name: "Shantibari" }],
  creator: "Shantibari",
  publisher: "Shantibari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://shantibaribd.org",
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://shantibaribd.org",
    siteName: "Shantibari",
    title: "Shantibari - Empowering Women in Bangladesh",
    description: "Shantibari is a women's organization, based in Dhaka, Bangladesh, empowering women through mental health support, legal aid, and entrepreneurial programs.",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png",
        width: 1200,
        height: 630,
        alt: "Shantibari - Women's Empowerment Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shantibari_bd",
    creator: "@shantibari_bd",
    title: "Shantibari - Empowering Women in Bangladesh",
    description: "Shantibari is a women's organization, based in Dhaka, Bangladesh, empowering women through mental health support, legal aid, and entrepreneurial programs.",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png"],
  },
  other: {
    "theme-color": "#3B82F6",
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppChat />
        <Footer />
      </body>
    </html>
  );
}
