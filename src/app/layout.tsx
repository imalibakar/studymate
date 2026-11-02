import type { Metadata, Viewport } from "next";
import {
  Inter,
  Playfair_Display,
  Noto_Serif,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StudyMate | Online Islamic Learning Initiative",
  description:
    "A contemplative initiative dedicated to making meaningful, authentic Islamic education accessible to learners and families worldwide.",
  icons: {
    icon: "https://lh3.googleusercontent.com/aida/AEtjO1UGnplaHNFaBuykf99JNccqrlzsEb-yCENf3G_pKh6QxL7Z5i5L2EiE0z7kD5prZSOjS5rwazJ_ZWG09zx3SOf6rL1M1tD47liM8FjLFr_wpPvJ1FfVye2LeDL1G8npyq_qfHCq6A7ihcDNwynVCHiY_cFLdrxXABKy91pYBx3sC9Nx9_Zdolg98NMeACrjrwWpqJkEXMqWIFSLmL3bPA6duyB_dF5yrrYYq7gav6GZqGhR_KrCWJ4x4I8",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${playfair.variable} ${notoSerif.variable} ${notoArabic.variable}`}
    >
      <body className="bg-background text-text-primary antialiased selection:bg-secondary-container selection:text-forest-dark min-h-screen flex flex-col font-body-md">
        {children}
      </body>
    </html>
  );
}
