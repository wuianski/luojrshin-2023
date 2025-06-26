// fetch data from directus
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";
import { courier_prime400 } from "@/app/[locale]/fonts";

async function getEnReviews() {
  try {
    return await directus.request(
      readItems("reviews", {
        sort: ["-sort"],
        fields: ["*", "*.*", { file: ["*", "*.*"] }],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              lang: {
                _eq: "1",
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
async function getTwReviews() {
  try {
    return await directus.request(
      readItems("reviews", {
        sort: ["-sort"],
        fields: ["*", "*.*", { file: ["*", "*.*"] }],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              lang: {
                _eq: "2",
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
// export const revalidate = 10;

export const metadata = {
  title: `報導與評論 Reivew | 羅智信 Luo Jr-Shin`,
  description: "羅智信作品的報導與評論。 Luo Jr-Shin's works reviews.",
};

export default async function Reivew({ params }) {
  const enReviews = await getEnReviews();
  const twReviews = await getTwReviews();
  //   console.log(params.locale);
  return (
    <Box
      p={{ xs: 3, md: 4 }}
      mt={{ xs: -2, md: -1 }}
      sx={{ fontFamily: "Courier Prime", fontSize: { xs: "18px", md: "14px" } }}
    >
      {params.locale === "en" ? (
        <Box>
          {enReviews.map((item) => (
            <Box key={item.sort}>
              <a
                href={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${item.file.filename_disk}`}
                target="_blank"
              >
                <Box
                  pb={1}
                  pt={1}
                  sx={{
                    lineHeight: "1.1em",
                    // fontFamily: "Courier Prime !important",
                  }}
                  className={`${courier_prime400.className}`}
                >
                  ◗ {item.title}
                </Box>
              </a>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          {twReviews.map((item) => (
            <Box key={item.sort}>
              <a
                href={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${item.file.filename_disk}`}
                target="_blank"
              >
                <Box
                  pb={1}
                  pt={1}
                  className={`${courier_prime400.className}`}
                  sx={{ lineHeight: "1.5em" }}
                >
                  ◗ {item.title}
                </Box>
              </a>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
