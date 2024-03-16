// fetch data from directus
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";

async function getAbout() {
  return directus.request(readItems("about"));
}

export default async function Page({ params }) {
  console.log(params.locale);
  const about = await getAbout();
  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: -2, md: -1.5 }}>
      <Box
        dangerouslySetInnerHTML={{
          __html: params.locale === "en" ? about.bio_en : about.bio_tw,
        }}
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
