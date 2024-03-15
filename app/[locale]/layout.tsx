import "../globals.css";
import { Metadata } from "next";
import { locales } from "@/i18nconfig";
// next-intl static rendering at build time
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = {
  metadataBase: new URL("https://luojrshin.com"),
  title: "Luo Jr-Shin",
  description: "Sorry, there is some construction going on here...",
  // openGraph: {
  //   title: "Luo Jr-Shin",
  //   description: "Sorry, there is some construction going on here...",
  //   url: "https://luojrshin.com",
  //   siteName: "Luo Jr-Shin",
  // images: [
  //   {
  //     url: 'https://nextjs.org/og.png',
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     url: 'https://nextjs.org/og-alt.png',
  //     width: 1800,
  //     height: 1600,
  //     alt: 'My custom alt',
  //   },
  // ],
  // locale: 'en_US',
  // type: "website",
  // },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
