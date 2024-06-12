// fetch data from directus
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";
import { noto_serif_tc400 } from "../../fonts";
import { courier_prime400 } from "../../fonts";

async function getAbout() {
  try {
    return await directus.request(readItems("about"));
  } catch (error) {
    notFound();
  }
}

export default async function About({ params }) {
  // console.log(params.locale);
  const about = await getAbout();
  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: -2, md: -1.5 }}>
      <Box
        dangerouslySetInnerHTML={{
          __html: params.locale === "en" ? about.bio_en : about.bio_tw,
        }}
        className={`${
          params.locale === `en`
            ? `${courier_prime400.className} `
            : `${courier_prime400.className} `
        }`}
        sx={{ fontFamily: "Courier Prime", fontSize: "14px" }}
      ></Box>
      <Box>{about.email}</Box>
      <Box>
        <a target="_blank" href={about.instagram}>
          {about.instagram}
        </a>
      </Box>
      {params.locale === "en" ? (
        <Box>
          <a
            target="_blank"
            href={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}/${about.cv_en}`}
          >
            CV
          </a>
        </Box>
      ) : (
        <Box>
          <a
            target="_blank"
            href={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}/${about.cv_tw}`}
          >
            簡歷
          </a>
        </Box>
      )}
    </Box>
  );
}
