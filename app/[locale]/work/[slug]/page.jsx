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
  // const image_mode = page.mode.mode_name;
  // console.log(image_mode);

  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: 0, md: 0 }}>
      <Box mb={2}>
        {params.locale === "en" ? (
          <Box
            className="myLink"
            dangerouslySetInnerHTML={{ __html: page.content_en }}
          />
        ) : (
          <Box
            className="myLink"
            dangerouslySetInnerHTML={{ __html: page.content_tw }}
          />
        )}
      </Box>

      <Box>
        <Box>
          {page.mode.mode_name === "grid" ? (
            <>
              <div>grid</div>
              <PhotoGallery photos={page.image} />
            </>
          ) : (
            <>
              <div>column</div>
              <OneColumn photos={page.image} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

//
