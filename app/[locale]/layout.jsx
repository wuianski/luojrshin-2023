/* fetch data from directus */
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
/* import components */
import Nav from "@/components/MyNav";
import Box from "@mui/material/Box";
/* import fonts and styles */
import "../globals.css";
import { courier_prime400 } from "@/app/[locale]/fonts";
import "@/app/[locale]/work.css";
/* locals */
import { locales } from "@/i18nconfig";
import { unstable_setRequestLocale } from "next-intl/server";

async function getMaterailPosts() {
  try {
    const materailPosts = await directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
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
      })
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
      })
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
      })
    );
    return imagePosts;
  } catch (error) {
    notFound();
  }
}

export const metadata = {
  title: "Luo Jr-Shin",
  description: "Luo Jr-Shin Official Website",
  openGraph: {
    title: "Luo Jr-Shin",
    description: "Luo Jr-Shin Official Website",
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
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children, // will be a page or nested layout
  params,
}) {
  const { locale } = await params;
  const spacePosts = await getSpacePosts();
  const materailPosts = await getMaterailPosts();
  const imagePosts = await getImagePosts();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <Box
          sx={{ overflow: "hidden", fontSize: "13px", lineHeight: "1.1em" }}
          className={
            params.locale === "en"
              ? courier_prime400.className
              : courier_prime400.className
          }
          // className={courier_prime400.className}
        >
          <Box
            sx={{
              width: { xs: "calc(100% - 0px)", md: "350px" },
              // height: { xs: "60px", md: "100vh" },
              backgroundColor: "#fff",
              position: "fixed",
              zIndex: "99",
              height: { xs: "unset", md: "calc(100vh - 16px)" },
              overflowY: "scroll",
            }}
            className="myScroll"
          >
            <Nav
              spacePosts={spacePosts}
              materailPosts={materailPosts}
              imagePosts={imagePosts}
              locale={params.locale}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "calc(100vw - 0px)", md: "calc(100vw - 350px)" },
              marginLeft: { xs: "auto", md: "350px" },
              marginRight: { xs: "auto", md: "0" },
              paddingTop: { xs: "60px", md: "0" },
              backgroundColor: "#fff",
              height: "calc(100vh - 16px)",
              overflowY: "scroll",
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
