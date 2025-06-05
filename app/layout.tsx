import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "NeuroTailor - AI-разработка MVP за 24 часа",
  description: "Создайте MVP вашего стартапа за 24 часа с помощью AI-агентов. Без программирования. От идеи до готового продукта для инвесторов за дни, а не месяцы.",
  keywords: "MVP разработка, AI разработка, стартап инструменты, no-code, AI агенты, быстрое прототипирование, создание MVP, искусственный интеллект",
  openGraph: {
    title: "NeuroTailor - AI-разработка MVP за 24 часа",
    description: "Создайте MVP вашего стартапа за 24 часа с помощью AI-агентов",
    type: "website",
    url: "https://neurotailor.ru",
    locale: "ru_RU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroTailor - Платформа AI разработки MVP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroTailor - AI-разработка MVP за 24 часа",
    description: "Создайте MVP вашего стартапа за 24 часа с помощью AI-агентов",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}