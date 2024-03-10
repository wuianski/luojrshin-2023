import "./globals.css";
import { Metadata } from "next";

// const merriweather  = Merriweather({ subsets: ['latin'], display: 'swap', weight: ['300', '700'], });

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
