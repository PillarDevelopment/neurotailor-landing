import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    url: "https://8sh.ru",
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

// Yandex Metrika ID - можно изменить через переменную окружения
const YM_ID = process.env.NEXT_PUBLIC_YM_ID || "102447006";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${YM_ID}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        
        {/* Noscript fallback for Yandex.Metrika */}
        <noscript>
          <div>
            <img 
              src={`https://mc.yandex.ru/watch/${YM_ID}`}
              style={{ position: "absolute", left: "-9999px" }} 
              alt="" 
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}