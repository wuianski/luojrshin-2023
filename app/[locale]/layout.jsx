/* fetch data from directus */
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
/* import components */
import Nav from "@/components/MyNav";
import MyLayout from "@/components/MyLayout";
/* import fonts and styles */
import "../globals.css";
import "@/app/[locale]/work.css";
/* next-intl */
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

async function getMaterailPosts() {
  try {
    const materailPosts = await directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
        fields: [
          "*",
          "*.*",
          { image: ["*.*"], content_imgs: ["*.*", "*.*.*"] },
        ],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              category: {
                _eq: "3",
              },
            },
          ],
        },
      }),
    );
    return materailPosts;
  } catch (error) {
    notFound();
  }
}
async function getSpacePosts() {
  try {
    const spacePosts = await directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
        fields: [
          "*",
          "*.*",
          { image: ["*.*"], content_imgs: ["*.*", "*.*.*"] },
        ],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              category: {
                _eq: "2",
              },
            },
          ],
        },
      }),
    );
    return spacePosts;
  } catch (error) {
    notFound();
  }
}
async function getImagePosts() {
  try {
    const imagePosts = await directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
        fields: [
          "*",
          "*.*",
          { image: ["*.*"], content_imgs: ["*.*", "*.*.*"] },
        ],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              category: {
                _eq: "1",
              },
            },
          ],
        },
      }),
    );
    return imagePosts;
  } catch (error) {
    notFound();
  }
}

export const metadata = {
  title: `羅智信 Luo Jr-Shin`,
  description: "羅智信的個人網站 Luo Jr-Shin's personal website",
  openGraph: {
    title: "羅智信 Luo Jr-Shin",
    description: "羅智信的個人網站 Luo Jr-Shin's personal website",
    // images: [
    //   {
    //     url: "https://dev.luojrshin.com/Index_Desktop.jpg",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://dev.tongyangtze.com/contact.png", // Must be an absolute URL
    //     width: 1920,
    //     height: 1280,
    //     alt: "My custom alt",
    //   },
    // ],
  },
  // icons: {
  //   icon: "/icon/icon.png",
  // },
  verification: {
    google: "Am4DRE8IzhcXtExBFV94D4doYkjCEE3e5_Huy0ZifOc",
  },
};

export default async function RootLayout({
  children, // will be a page or nested layout
  params,
}) {
  const spacePosts = await getSpacePosts();
  const materailPosts = await getMaterailPosts();
  const imagePosts = await getImagePosts();
  // unstable_setRequestLocale(locale);]

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={null}>
          <Nav
            spacePosts={spacePosts}
            materailPosts={materailPosts}
            imagePosts={imagePosts}
            locale={locale}
          />
          <MyLayout children={children} locale={locale}></MyLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
