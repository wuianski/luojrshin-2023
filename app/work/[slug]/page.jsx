import directus from "lib/directus";
import { notFound } from "next/navigation";
import { readItem } from "@directus/sdk";
import Box from "@mui/material/Box";
import Image from "next/image";
// grid image
import PhotoGallery from "@/components/PhotoGallery";
// one column image
import OneColumn from "@/components/OneColumn";

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

export default async function DynamicPage({ params }) {
  const page = await getPage(params.slug);
  const image_mode = page.mode.mode_name;
  // console.log(image_mode);

  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: 0, md: 0 }}>
      {page.content_en ? (
        <Box>
          <Box
            className="myLink"
            dangerouslySetInnerHTML={{ __html: page.content_en }}
          />
          <Box
            pt={2}
            pb={2}
            className="myLink"
            dangerouslySetInnerHTML={{ __html: page.content_tw }}
          />
        </Box>
      ) : null}

      {image_mode == "column" ? (
        <Box sx={{ width: { xs: "100%", md: "50vw" } }}>
          <OneColumn photos={page.image} />
        </Box>
      ) : (
        <PhotoGallery photos={page.image} />
      )}
    </Box>
  );
}
