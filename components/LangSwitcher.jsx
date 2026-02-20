"use client";

/* next-intl */
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale } from "next-intl";
/* import conponent and styles */
import Box from "@mui/material/Box";
import "../app/[locale]/work.css";
import { courier_prime400 } from "../lib/fonts";

export default function LangSwitcher({}) {
  const locale = useLocale();
  // console.log("locale", localeNames.en);

  const pathname = usePathname();
  const router = useRouter();

  const en2tw = () => {
    router.replace(pathname, { locale: "tw" });
  };
  const tw2en = () => {
    router.replace(pathname, { locale: "en" });
  };

  return (
    <div>
      <Box className={courier_prime400.className}>
        <Box
          component="span"
          onClick={en2tw}
          sx={{ color: "#666", cursor: "pointer" }}
          style={locale === "tw" ? { color: "#0000ff" } : { color: "#666" }}
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
          style={locale === "en" ? { color: "#0000ff" } : { color: "#666" }}
          className={`${locale === `en` ? "active" : "notActive"}`}
        >
          EN
        </Box>
      </Box>
    </div>
  );
}
