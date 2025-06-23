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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
