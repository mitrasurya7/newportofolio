import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitradev Portfolio",
  description: "The personal portfolio website of Mitra Surya, showcasing projects, experience, and contact information.",
  keywords: ["Mitra Surya", "Portfolio", "Web Developer", "Frontend", "Next.js"],
  authors: [{ name: "Mitra Surya", url: "https://github.com/mitrasurya7" }],
  creator: "Mitra Surya",
  openGraph: {
    title: "Mitradev Portfolio",
    description: "Explore my projects and experience in web development.",
    url: "https://mitradev.my.id",
    siteName: "Mitradev Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mitradev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitradev Portfolio",
    description: "Explore my projects and experience in web development.",
    creator: "@mitrasurya7",
    images: ["/og-image.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior: 'smooth'}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-5 bg-dotted-light dark:bg-dotted-dark md:w-3/5 w-full mx-auto `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
