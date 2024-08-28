// fetch data from directus
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";
import { noto_serif_tc400 } from "../fonts";
import { courier_prime400 } from "../fonts";
import NextJsImage from "@/components/NextJsImage";
import Image from "next/image";
import OneColumn from "@/components/OneColumn";

async function getNews() {
  try {
    return await directus.request(
      readItems("news", {
        fields: ["*", "*.*", { image: ["*.*"] }],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
            },
          ],
        },
      })
    );
  } catch (error) {
    notFound();
  }
}

export default async function Page({ params }) {
  // console.log(params.locale);
  const news = await getNews();

  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: -2, md: -1.5 }}>
      <Box>
        {news.map((news) => (
          <Box key={news.id}>
            <Box mb={2}>
              {params.locale === "en" ? (
                <Box dangerouslySetInnerHTML={{ __html: news.news_en }} />
              ) : (
                <Box
                  dangerouslySetInnerHTML={{ __html: news.news_tw }}
                  sx={{ fontFamily: "Courier Prime", fontSize: "14px" }}
                />
              )}
            </Box>
            {news.image ? (
              // <Box sx={{ width: { xs: "100%", md: "50vw" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "80dvw", md: "50dvw" },
                  height: { xs: "20dvh", md: "30dvh" },
                }}
                mb={6}
              >
                <Image
                  priority={true}
                  src={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${news.image.filename_disk}`}
                  quality={100}
                  // width={500}
                  // height={500}
                  fill="true"
                  alt="Picture of the news"
                  style={{ objectFit: "contain", objectPosition: "left top" }}
                  sizes="50vw"
                  placeholder={"blurDataURL" in news.image ? "blur" : undefined}
                />
              </Box>
            ) : null}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
