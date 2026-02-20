"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { courier_prime400 } from "@/lib/fonts";

export default function MyLayout({ children, locale }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Box
          sx={{ overflow: "hidden", fontSize: "13px", lineHeight: "1.1em" }}
          className={
            locale === "en"
              ? courier_prime400.className
              : courier_prime400.className
          }
        >
          <Box
            sx={{
              width: { xs: "calc(100vw - 0px)", md: "calc(100vw - 350px)" },
              marginLeft: { xs: "auto", md: "350px" },
              marginRight: { xs: "auto", md: "0" },
              paddingTop: { xs: "60px", md: "0" },
              backgroundColor: "#fff",
              height: "calc(100dvh - 60px)",
              overflowY: "scroll",
            }}
          >
            {children}
          </Box>
        </Box>
      ) : null}
    </>
  );
}
