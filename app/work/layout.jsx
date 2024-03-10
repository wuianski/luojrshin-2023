import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Nav from "@/components/nav";
import Box from "@mui/material/Box";
import { courier_prime400 } from "../fonts";
import { courier_prime700 } from "../fonts";
import "../work.css";

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
}) {
  const spacePosts = await getSpacePosts();
  const materailPosts = await getMaterailPosts();
  const imagePosts = await getImagePosts();

  return (
    <Box
      sx={{ overflow: "hidden", fontSize: "13px", lineHeight: "1.4em" }}
      className={courier_prime400.className}
    >
      <Box
        sx={{
          width: { xs: "calc(100% - 16px)", md: "275px" },
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
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", md: "calc(100vw - 275px)" },
          marginLeft: { xs: "0px", md: "275px" },
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
