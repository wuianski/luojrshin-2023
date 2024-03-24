// fetch data from directus
import directus from "@/lib/directus";
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
  return directus.request(
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
}

async function getSpacePosts() {
  return directus.request(
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
}

async function getImagePosts() {
  return directus.request(
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
}

export default async function ArtLayout({
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
          width: { xs: "calc(100% - 16px)", md: "350px" },
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
          width: { xs: "100vw", md: "calc(100vw - 350px)" },
          marginLeft: { xs: "0px", md: "350px" },
          marginTop: { xs: "60px", md: "0" },
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
