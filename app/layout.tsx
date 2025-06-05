import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroTailor - AI-Powered MVP Development",
  description: "Build your startup MVP in 24 hours with AI agents. No coding required. From idea to investor-ready product in days, not months.",
  keywords: "MVP development, AI development, startup tools, no-code, AI agents, rapid prototyping",
  openGraph: {
    title: "NeuroTailor - AI-Powered MVP Development",
    description: "Build your startup MVP in 24 hours with AI agents",
    type: "website",
    url: "https://neurotailor.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroTailor - AI MVP Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroTailor - AI-Powered MVP Development",
    description: "Build your startup MVP in 24 hours with AI agents",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}