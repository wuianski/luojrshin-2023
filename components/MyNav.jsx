"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
/* import components, fonts and styles */
import Lang from "@/components/LangSwitcher";
import { courier_prime400 } from "@/lib/fonts";
import "@/app/[locale]/work.css";

import { usePathname, useRouter, Link } from "@/i18n/navigation";

// stack Item setting
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "unset",
  background: "none",
  boxShadow: "none",
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    maxWidth: "calc(100% - 0px)",
    maxHeight: "calc(100dvh - 60px)",
    width: "100%",
    height: "100dvh",
    overflowY: "scroll",
    // marginTop: 20,
    marginLeft: "8px",
    left: "0 !important",
    top: "60px !important",
    "& .MuiMenu-list": {},
    "& .MuiMenuItem-root": {
      // paddingLeft: 24,
      minHeight: "unset",
      fontFamily: "inherit",
      fontSize: { xs: "17px", md: "13px" },
      lineHeight: "1.1em",
      whiteSpace: "normal",
      paddingTop: 3,
      paddingBottom: 3,
    },
  },
}));

export default function MyNav({
  spacePosts,
  materailPosts,
  imagePosts,
  locale,
}) {
  // console.log(nav)
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pathname = usePathname();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Box
          sx={{
            width: { xs: "calc(100% - 0px)", md: "350px" },
            backgroundColor: "#fff",
            position: "fixed",
            zIndex: "99",
            height: { xs: "unset", md: "calc(100dvh - 16px)" },
            overflowY: "scroll",
          }}
          className="myScroll"
        >
          <Box
            sx={{ overflow: "hidden", fontSize: "13px", lineHeight: "1.1em" }}
            className={
              locale === "en"
                ? courier_prime400.className
                : courier_prime400.className
            }
          >
            <nav>
              <Stack
                direction={{ xs: "row", md: "column" }}
                spacing={{ xs: 0, md: 0 }}
                pt={{ xs: 4, md: 0 }}
                pl={4}
                pr={4}
                pb={"4px"}
                mt={{ xs: -3, md: 0 }}
                ml={{ xs: -3, md: 0 }}
              >
                {/* mobile nav content */}
                <Item>
                  <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="menu-appbar"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      // color="inherit"
                      sx={{ color: "#00ff00", marginTop: "-4px" }}
                    >
                      <MenuIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                    <StyledMenu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      keepMounted
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                        fontSize: "17px",
                      }}
                      className={courier_prime400.className}
                    >
                      <Box>
                        <MenuItem>
                          <Box>
                            <Lang
                              locale={locale}
                              pathname={pathname}
                              router={router}
                            />
                          </Box>
                        </MenuItem>
                      </Box>
                      <Box sx={{ textTransform: "uppercase" }}>
                        <MenuItem>
                          <Link href={`/about`} onClick={handleCloseNavMenu}>
                            <Box className={courier_prime400.className}>
                              {locale === "en" ? "about" : "關於"}
                            </Box>
                          </Link>
                        </MenuItem>
                      </Box>
                      <Box sx={{ textTransform: "uppercase" }} pb={4}>
                        <MenuItem>
                          <Link href={`/review`} onClick={handleCloseNavMenu}>
                            <Box className={courier_prime400.className}>
                              {locale === "en" ? "review" : "報導與評論"}
                            </Box>
                          </Link>
                        </MenuItem>
                      </Box>

                      <Box pb={2}>
                        <Box sx={{ textTransform: "uppercase" }} pb={1} pl={3}>
                          material-based
                        </Box>

                        <Box pl={1}>
                          {materailPosts.map((item) => (
                            <Box key={item.slug}>
                              <MenuItem>
                                <Link
                                  href={`/${item.slug}`}
                                  onClick={handleCloseNavMenu}
                                >
                                  {locale === "en" ? (
                                    item.title
                                  ) : (
                                    <>
                                      {item.title_tw ? (
                                        <Box
                                          className={courier_prime400.className}
                                        >
                                          {item.title_tw}
                                        </Box>
                                      ) : (
                                        <Box
                                          className={courier_prime400.className}
                                        >
                                          {item.title}
                                        </Box>
                                      )}
                                    </>
                                  )}
                                </Link>
                              </MenuItem>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      <Box pb={2}>
                        <Box sx={{ textTransform: "uppercase" }} pb={1} pl={3}>
                          space-based
                        </Box>
                        <Box pl={1}>
                          {spacePosts.map((item) => (
                            <Box key={item.slug}>
                              <MenuItem>
                                <Link
                                  href={`/${item.slug}`}
                                  onClick={handleCloseNavMenu}
                                >
                                  {locale === "en" ? (
                                    item.title
                                  ) : (
                                    <>
                                      {item.title_tw ? (
                                        <Box
                                          className={courier_prime400.className}
                                        >
                                          {item.title_tw}
                                        </Box>
                                      ) : (
                                        <Box
                                          className={courier_prime400.className}
                                        >
                                          {item.title}
                                        </Box>
                                      )}
                                    </>
                                  )}
                                </Link>
                              </MenuItem>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Box pb={2}>
                        <Box sx={{ textTransform: "uppercase" }} pb={1} pl={3}>
                          image-based
                        </Box>
                        <Box pl={1}>
                          {imagePosts.map((item) => (
                            <Box key={item.slug}>
                              <MenuItem>
                                <Link
                                  href={`/${item.slug}`}
                                  onClick={handleCloseNavMenu}
                                >
                                  {locale === "en" ? (
                                    item.title
                                  ) : (
                                    <>
                                      {item.title_tw ? (
                                        <Box
                                          className={courier_prime400.className}
                                        >
                                          {item.title_tw}
                                        </Box>
                                      ) : (
                                        <Box
                                          className={courier_prime400.className}
                                        >
                                          {item.title}
                                        </Box>
                                      )}
                                    </>
                                  )}
                                </Link>
                              </MenuItem>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </StyledMenu>
                  </Box>
                </Item>
                {/* mobile + desktop site name */}
                <Item>
                  <Box
                    sx={{
                      textTransform: "uppercase",
                      backgroundColor: "#fff",
                      position: "fixed",
                      width: { xs: "calc(100% - 72px)", md: "286px" },
                    }}
                    mt={{ xs: 1.5, md: 0 }}
                    pb={1}
                    pt={{ xs: 0.8, md: 4 }}
                  >
                    <Stack
                      direction={{ xs: "row", md: "column" }}
                      spacing={{ xs: 0, md: 1 }}
                    >
                      <Item>
                        <Link href={`/`}>
                          <Box
                            component="span"
                            className={courier_prime400.className}
                            sx={{ fontSize: { xs: "19px", md: "13px" } }}
                          >
                            羅智信
                          </Box>
                          <Box
                            component="span"
                            className={courier_prime400.className}
                            sx={{ fontSize: { xs: "19px", md: "13px" } }}
                          >
                            |LUO, JR-SHIN
                          </Box>
                        </Link>
                      </Item>
                      <Item sx={{ display: { xs: "none", md: "block" } }}>
                        <Box>
                          <Lang
                            locale={locale}
                            pathname={pathname}
                            router={router}
                          />
                        </Box>
                      </Item>
                      <Item sx={{ display: { xs: "none", md: "block" } }}>
                        <Box
                          sx={{ textTransform: "uppercase" }}
                          className={courier_prime400.className}
                        >
                          <Link
                            className={` ${
                              pathname === "/about" ? "active" : "notActive"
                            }`}
                            href={`/about`}
                          >
                            {locale === "en" ? "about" : "關於"}
                          </Link>
                        </Box>
                      </Item>
                      <Item sx={{ display: { xs: "none", md: "block" } }}>
                        <Box
                          sx={{ textTransform: "uppercase" }}
                          className={courier_prime400.className}
                        >
                          <Link
                            className={` ${
                              pathname === "/review" ? "active" : "notActive"
                            }`}
                            href={`/review`}
                          >
                            {locale === "en" ? "review" : "報導與評論"}
                          </Link>
                        </Box>
                      </Item>
                    </Stack>
                  </Box>
                </Item>
                {/* desktop nav content */}
                <Item sx={{ display: { xs: "none", md: "block" } }}>
                  <Box pb={2} mt={21}>
                    <Box
                      sx={{ textTransform: "uppercase" }}
                      pb={1}
                      className={courier_prime400.className}
                    >
                      material-based
                    </Box>
                    <Box pl={1}>
                      {materailPosts.map((item) => (
                        <Box key={item.slug} mb={0.8} mt={0.8}>
                          <Link
                            className={`${
                              pathname === `/${item.slug}`
                                ? "active"
                                : "notActive"
                            }`}
                            href={`/${item.slug}`}
                          >
                            {locale === "en" ? (
                              item.title
                            ) : (
                              <>
                                {item.title_tw ? (
                                  <Box className={courier_prime400.className}>
                                    {item.title_tw}
                                  </Box>
                                ) : (
                                  <Box className={courier_prime400.className}>
                                    {item.title}
                                  </Box>
                                )}
                              </>
                            )}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box pb={2}>
                    <Box
                      sx={{ textTransform: "uppercase" }}
                      pb={1}
                      className={courier_prime400.className}
                    >
                      space-based
                    </Box>
                    <Box pl={1}>
                      {spacePosts.map((item) => (
                        <Box key={item.slug} mb={0.8} mt={0.8}>
                          <Link
                            className={` ${
                              pathname === `/${item.slug}`
                                ? "active"
                                : "notActive"
                            }`}
                            href={`/${item.slug}`}
                          >
                            {locale === "en" ? (
                              item.title
                            ) : (
                              <>
                                {item.title_tw ? (
                                  <Box className={courier_prime400.className}>
                                    {item.title_tw}
                                  </Box>
                                ) : (
                                  <Box className={courier_prime400.className}>
                                    {item.title}
                                  </Box>
                                )}
                              </>
                            )}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box pb={2}>
                    <Box
                      sx={{ textTransform: "uppercase" }}
                      pb={1}
                      className={courier_prime400.className}
                    >
                      image-based
                    </Box>
                    <Box pl={1}>
                      {imagePosts.map((item) => (
                        <Box key={item.slug} mb={0.8} mt={0.8}>
                          <Link
                            className={` ${
                              pathname === `/${item.slug}`
                                ? "active"
                                : "notActive"
                            }`}
                            href={`/${item.slug}`}
                          >
                            {locale === "en" ? (
                              item.title
                            ) : (
                              <>
                                {item.title_tw ? (
                                  <Box className={courier_prime400.className}>
                                    {item.title_tw}
                                  </Box>
                                ) : (
                                  <Box className={courier_prime400.className}>
                                    {item.title}
                                  </Box>
                                )}
                              </>
                            )}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Item>
              </Stack>
            </nav>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
