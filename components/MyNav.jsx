"use client";

import React, { useState } from "react";
// import Link from "next/link";
import { Link, usePathname } from "../navigation";
// import NavigationLink from "@/NavigationLink";
// import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import components, fonts and styles
import Lang from "@/components/LangSwitcher";
import { courier_prime400 } from "../app/[locale]/fonts";
import "../app/[locale]/work.css";
import { noto_serif_tc400 } from "../app/[locale]/fonts";
import { noto_sans_tc400 } from "../app/[locale]/fonts";

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
    maxWidth: "calc(100% - 16px)",
    maxHeight: "calc(100dvh - 60px)",
    width: "100%",
    height: "100dvh",
    overflowY: "scroll",
    marginTop: 20,
    marginLeft: "8px",
    "& .MuiMenu-list": {},
    "& .MuiMenuItem-root": {
      paddingLeft: 24,
      minHeight: "unset",
      fontFamily: "inherit",
      fontSize: "13px",
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

  return (
    <Box>
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
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <StyledMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  fontSize: "13px",
                }}
                className={courier_prime400.className}
              >
                <Box>
                  <MenuItem>
                    <Box>
                      <Lang locale={locale} />
                    </Box>
                  </MenuItem>
                </Box>
                <Box sx={{ textTransform: "uppercase" }}>
                  <MenuItem>
                    <Link href={`/work/about`} onClick={handleCloseNavMenu}>
                      <Box className={courier_prime400.className}>about</Box>
                    </Link>
                  </MenuItem>
                </Box>
                <Box sx={{ textTransform: "uppercase" }} pb={4}>
                  <MenuItem>
                    <Link href={`/work/review`} onClick={handleCloseNavMenu}>
                      <Box className={courier_prime400.className}>review</Box>
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
                            href={`/work/${item.slug}`}
                            onClick={handleCloseNavMenu}
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
                            href={`/work/${item.slug}`}
                            onClick={handleCloseNavMenu}
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
                            href={`/work/${item.slug}`}
                            onClick={handleCloseNavMenu}
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
              pt={{ xs: 0.5, md: 4 }}
            >
              <Stack
                direction={{ xs: "row", md: "column" }}
                spacing={{ xs: 0, md: 1 }}
              >
                <Item>
                  <Link href={`/work`}>
                    <Box
                      component="span"
                      // sx={{ color: "#000" }}
                      className={courier_prime400.className}
                    >
                      羅智信
                    </Box>
                    <Box
                      component="span"
                      className={courier_prime400.className}
                    >
                      |LUO, JR-SHIN
                    </Box>
                  </Link>
                </Item>
                <Item sx={{ display: { xs: "none", md: "block" } }}>
                  <Box>
                    <Lang locale={locale} />
                  </Box>
                </Item>
                <Item sx={{ display: { xs: "none", md: "block" } }}>
                  <Box
                    sx={{ textTransform: "uppercase" }}
                    className={courier_prime400.className}
                  >
                    <Link
                      className={` ${
                        pathname === "/work/about" ? "active" : "notActive"
                      }`}
                      href={`/work/about`}
                    >
                      about
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
                        pathname === "/work/review" ? "active" : "notActive"
                      }`}
                      href={`/work/review`}
                    >
                      review
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
                        pathname === `/work/${item.slug}`
                          ? "active"
                          : "notActive"
                      }`}
                      href={`/work/${item.slug}`}
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
                        pathname === `/work/${item.slug}`
                          ? "active"
                          : "notActive"
                      }`}
                      href={`/work/${item.slug}`}
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
                        pathname === `/work/${item.slug}`
                          ? "active"
                          : "notActive"
                      }`}
                      href={`/work/${item.slug}`}
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
  );
}
