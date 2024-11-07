"use client";

// import next-intl
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../navigation";
// import conponent and styles
import Box from "@mui/material/Box";
import "../app/[locale]/work.css";
import { courier_prime400 } from "../app/[locale]/fonts";

export default function LangSwitcher({}) {
  const locale = useLocale();
  // console.log("locale", localeNames.en);
  const router = useRouter();
  const pathName = usePathname();

  const en2tw = () => {
    router.replace(pathName, { locale: "tw" });
  };

  const tw2en = () => {
    router.replace(pathName, { locale: "en" });
  };

  return (
    <div>
      <Box className={courier_prime400.className}>
        <Box
          component="span"
          onClick={en2tw}
          sx={{ color: "#666", cursor: "pointer" }}
          // style={locale === "tw" ? { color: "#0000ff" } : { color: "#666" }}
          className={`${locale === `tw` ? "active" : "notActive"}`}
        >
          中文
        </Box>
        <Box component="span" sx={{ color: "#666" }}>
          /
        </Box>
        <Box
          component="span"
          onClick={tw2en}
          sx={{ color: "#666", cursor: "pointer" }}
          // style={locale === "en" ? { color: "#0000ff" } : { color: "#666" }}
          className={`${locale === `en` ? "active" : "notActive"}`}
        >
          EN
        </Box>
      </Box>
    </div>
  );
}
