// fetch data from directus
import directus from "@/lib/directus";
import { notFound } from "next/navigation";
import { readItems } from "@directus/sdk";
// import components
import Nav from "@/components/MyNav";
import Box from "@mui/material/Box";
// import fonts and styles
import { courier_prime400 } from "../fonts";
import "../work.css";
import { noto_sans_tc400 } from "../fonts";
import { noto_serif_tc400 } from "../fonts";

async function getMaterailPosts() {
  try {
    const materailPosts = await directus.request(
      // return directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              category: {
                _eq: "3",
              },
            },
          ],
        },
      })
    );
    return materailPosts;
  } catch (error) {
    notFound();
  }
}
async function getSpacePosts() {
  try {
    const spacePosts = await directus.request(
      // return directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              category: {
                _eq: "2",
              },
            },
          ],
        },
      })
    );
    return spacePosts;
  } catch (error) {
    notFound();
  }
}
async function getImagePosts() {
  try {
    const imagePosts = await directus.request(
      // return directus.request(
      readItems("posts", {
        // fields: ["slug", "title"],
        sort: ["-sort"],
        filter: {
          _and: [
            {
              status: {
                _eq: "published",
              },
              category: {
                _eq: "1",
              },
            },
          ],
        },
      })
    );
    return imagePosts;
  } catch (error) {
    notFound();
  }
}
// export const revalidate = 10;

export default async function WorkLayout({
  children, // will be a page or nested layout
  params,
}) {
  const spacePosts = await getSpacePosts();
  const materailPosts = await getMaterailPosts();
  const imagePosts = await getImagePosts();

  return (
    <Box
      sx={{ overflow: "hidden", fontSize: "13px", lineHeight: "1.1em" }}
      className={
        params.locale === "en"
          ? courier_prime400.className
          : courier_prime400.className
      }
    >
      {/* <Lang locale={params.locale} /> */}
      <Box
        sx={{
          width: { xs: "calc(100% - 0px)", md: "350px" },
          // height: { xs: "60px", md: "100vh" },
          backgroundColor: "#fff",
          position: "fixed",
          zIndex: "99",
          height: { xs: "unset", md: "calc(100vh - 16px)" },
          overflowY: "scroll",
        }}
        className="myScroll"
      >
        <Nav
          spacePosts={spacePosts}
          materailPosts={materailPosts}
          imagePosts={imagePosts}
          locale={params.locale}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "calc(100vw - 0px)", md: "calc(100vw - 350px)" },
          marginLeft: { xs: "auto", md: "350px" },
          marginRight: { xs: "auto", md: "0" },
          paddingTop: { xs: "60px", md: "0" },
          backgroundColor: "#fff",
          height: "calc(100vh - 16px)",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
