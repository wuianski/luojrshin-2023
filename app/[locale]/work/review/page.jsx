// fetch data from directus
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";
import Link from "next/link";
import { noto_serif_tc400 } from "../../fonts";

async function getEnReviews() {
  return directus.request(
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
}

async function getTwReviews() {
  return directus.request(
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
}

export default async function Page({ params }) {
  const enReviews = await getEnReviews();
  const twReviews = await getTwReviews();
  //   console.log(params.locale);
  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: -2, md: -1 }}>
      {params.locale === "en" ? (
        <Box>
          {enReviews.map((item) => (
            <Box key={item.sort}>
              <a
                href={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${item.file.filename_disk}`}
                target="_blank"
              >
                <Box pb={1} pt={1}>
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
                <Box pb={1} pt={1} className={`${noto_serif_tc400.className}`}>
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
