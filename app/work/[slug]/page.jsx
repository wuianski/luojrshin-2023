import directus from "lib/directus";
import { notFound } from "next/navigation";
import { readItem } from "@directus/sdk";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "./../styles.module.css";

async function getPage(slug) {
  try {
    const page = await directus.request(
      readItem("posts", slug, {
        fields: ["*", { image: ["*.*"] }],
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
  return (
    <Box p={{ xs: 3, md: 4 }} mt={{ xs: 0, md: 0 }}>
      {page.content_en ? (
        <Box>
          <Box
            className={styles.myLink}
            dangerouslySetInnerHTML={{ __html: page.content_en }}
          />
          <Box
            pt={2}
            pb={2}
            className={styles.myLink}
            dangerouslySetInnerHTML={{ __html: page.content_tw }}
          />
        </Box>
      ) : null}

      {/* <Box>{page.image}</Box> */}
      <div>
        {page.image.map((img) => (
          <div key={img.id}>
            <Box
              sx={{
                position: "relative",
                // width: { xs: "100%", md: "100%" },
                height: { xs: "100vw", md: "60dvh" },
              }}
              mb={1}
              mt={1}
            >
              <Image
                src={`${process.env.DIRECTUS_IMAGE_DOMAIN_DO}${img.directus_files_id.filename_disk}`}
                alt="Picture of the author"
                fill
                priority
                style={{
                  objectFit: "contain", // cover, contain, none
                  objectPosition: "left",
                }}
              />
            </Box>
            <Box>{img.directus_files_id.description}</Box>
          </div>
        ))}
      </div>
    </Box>
  );
}
