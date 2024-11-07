// fetch data from directus
import directus from "lib/directus";
import { notFound } from "next/navigation";
import { readItem } from "@directus/sdk";
// import components
import Box from "@mui/material/Box";
import Image from "next/image";
// grid image
import PhotoGallery from "@/components/PhotoGallery";
// one column image
import OneColumn from "@/components/OneColumn";
import { noto_serif_tc400 } from "../../fonts";
import { courier_prime400 } from "../../fonts";

async function getPage(slug) {
  try {
    const page = await directus.request(
      readItem("posts", slug, {
        fields: ["*", "*.*", { image: ["*.*"] }],
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
    return page;
  } catch (error) {
    notFound();
  }
}
// export const revalidate = 10;

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);
  // const image_mode = page.mode.mode_name;
  // console.log(image_mode);

  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: 0, md: 0 }}>
      <Box mb={2}>
        {params.locale === "en" ? (
          <Box
            className="myLink"
            dangerouslySetInnerHTML={{ __html: page.content_en }}
            sx={{ fontSize: { xs: "18px", md: "14px" }, lineHeight: "1.1em" }}
          />
        ) : (
          <Box
            className={`${courier_prime400.className} myLink`}
            // className={`${courier_prime400.className} myLink`}
            // className="myLink"
            dangerouslySetInnerHTML={{ __html: page.content_tw }}
            sx={{
              fontFamily: "Courier Prime",
              fontSize: { xs: "18px", md: "14px" },
              lineHeight: "1.5em",
            }}
          />
        )}
      </Box>

      <Box>
        <Box>
          {page.mode.mode_name === "grid" ? (
            <>
              <PhotoGallery photos={page.image} />
            </>
          ) : (
            <>
              <Box sx={{ width: { xs: "100%", md: "30vw" } }}>
                <OneColumn photos={page.image} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
