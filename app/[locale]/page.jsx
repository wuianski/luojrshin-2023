// fetch data from directus
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";
import Image from "next/image";
import { courier_prime400 } from "@/app/[locale]/fonts";

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

export default async function Home({ params }) {
  console.log(params.locale);
  const news = await getNews();

  return (
    <Box
      p={{ xs: 0, md: 4 }}
      mt={{ xs: 1, md: -1.5 }}
      // className={courier_prime400.className}
    >
      <Box>
        {news.map((news) => (
          <Box key={news.id}>
            <Box
              mb={2}
              ml={{ xs: 3, md: 0 }}
              mr={{ xs: 3, md: 0 }}
              sx={{ fontSize: { xs: "18px", md: "14px" } }}
            >
              {params.locale === "en" ? (
                <Box
                  dangerouslySetInnerHTML={{ __html: news.news_en }}
                  sx={{ lineHeight: "1.1em" }}
                  className={courier_prime400.className}
                />
              ) : (
                <Box
                  dangerouslySetInnerHTML={{ __html: news.news_tw }}
                  sx={{ fontFamily: "Courier Prime", lineHeight: "1.5em" }}
                />
              )}
            </Box>

            {/* if news.link is not empty, then add link to the image, else only show the image */}
            {params.locale === "tw" ? (
              <>
                {news.link ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: "38vw", lg: "33vw" },
                      // height: { xs: "30dvh", md: "90dvh" },
                      // margin: "0 auto",
                    }}
                    pb={6}
                  >
                    <a href={news.link}>
                      <Image
                        priority={true}
                        src={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${news.image.filename_disk}`}
                        quality={100}
                        width={0}
                        height={0}
                        // fill={true}
                        alt="Picture of the news"
                        style={{
                          // objectFit: "contain",
                          // objectPosition: "left top"
                          width: "100%",
                          height: "auto",
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        placeholder={
                          "blurDataURL" in news.image ? "blur" : undefined
                        }
                      />
                    </a>
                  </Box>
                ) : news.image ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: "38vw", lg: "33vw" },
                      // height: { xs: "30dvh", md: "90dvh" },
                      // margin: "0 auto",
                    }}
                    pb={6}
                  >
                    <Image
                      priority={true}
                      src={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${news.image.filename_disk}`}
                      quality={100}
                      width={0}
                      height={0}
                      // fill={true}
                      alt="Picture of the news"
                      style={{
                        // objectFit: "contain",
                        // objectPosition: "left top"
                        width: "100%",
                        height: "auto",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                      placeholder={
                        "blurDataURL" in news.image ? "blur" : undefined
                      }
                    />
                  </Box>
                ) : null}
              </>
            ) : (
              <>
                {news.link_en ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: "38vw", lg: "33vw" },
                      // height: { xs: "30dvh", md: "90dvh" },
                      // margin: "0 auto",
                    }}
                    pb={6}
                  >
                    <a href={news.link_en}>
                      <Image
                        priority={true}
                        src={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${news.image.filename_disk}`}
                        quality={100}
                        width={0}
                        height={0}
                        // fill={true}
                        alt="Picture of the news"
                        style={{
                          // objectFit: "contain",
                          // objectPosition: "left top"
                          width: "100%",
                          height: "auto",
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                        placeholder={
                          "blurDataURL" in news.image ? "blur" : undefined
                        }
                      />
                    </a>
                  </Box>
                ) : news.image ? (
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", md: "38vw", lg: "33vw" },
                      // height: { xs: "30dvh", md: "90dvh" },
                      // margin: "0 auto",
                    }}
                    pb={6}
                  >
                    <Image
                      priority={true}
                      src={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${news.image.filename_disk}`}
                      quality={100}
                      width={0}
                      height={0}
                      // fill={true}
                      alt="Picture of the news"
                      style={{
                        // objectFit: "contain",
                        // objectPosition: "left top"
                        width: "100%",
                        height: "auto",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                      placeholder={
                        "blurDataURL" in news.image ? "blur" : undefined
                      }
                    />
                  </Box>
                ) : null}
              </>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
