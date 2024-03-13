"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "../app/work.css";

// stack Item setting
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  color: "#000",
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
    maxHeight: "calc(100% - 76px)",
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    marginTop: 0,
    marginLeft: "8px",
    "& .MuiMenu-list": {
      //   padding: "0 0",
    },
    "& .MuiMenuItem-root": {
      paddingLeft: 24,
      minHeight: "unset",
    },
  },
}));

export default function Nav({ spacePosts, materailPosts, imagePosts }) {
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
                }}
              >
                <Box sx={{ textTransform: "uppercase" }} pb={4}>
                  <MenuItem>
                    <Link href={`/work/about`} onClick={handleCloseNavMenu}>
                      about
                    </Link>
                  </MenuItem>
                </Box>

                <Box pb={4}>
                  <Box sx={{ textTransform: "uppercase" }} pb={2} pl={3}>
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
                            {item.title}
                          </Link>
                        </MenuItem>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box pb={4}>
                  <Box sx={{ textTransform: "uppercase" }} pb={2} pl={3}>
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
                            {item.title}
                          </Link>
                        </MenuItem>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box pb={4}>
                  <Box sx={{ textTransform: "uppercase" }} pb={2} pl={3}>
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
                            {item.title}
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
            <Link href={`/work`}>
              <Box
                sx={{
                  textTransform: "uppercase",
                  backgroundColor: "#fff",
                  position: "fixed",
                  width: { xs: "calc(100% - 72px)", md: "243px" },
                }}
                mt={{ xs: 1.5, md: 0 }}
                pb={1}
                pt={{ xs: 0.5, md: 4 }}
              >
                羅智信|LUO, JR-SHIN
              </Box>
            </Link>
          </Item>
          {/* desktop nav content */}
          <Item sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                textTransform: "uppercase",
              }}
              pb={4}
              mt={8}
            >
              <Link
                className={` ${pathname === "/work/about" ? "active" : ""}`}
                href={`/work/about`}
              >
                about
              </Link>
            </Box>
            <Box pb={4}>
              <Box sx={{ textTransform: "uppercase" }} pb={2}>
                material-based
              </Box>
              <Box pl={1}>
                {materailPosts.map((item) => (
                  <Box key={item.slug}>
                    <Link
                      className={` ${
                        pathname === `/work/${item.slug}` ? "active" : ""
                      }`}
                      href={`/work/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box pb={4}>
              <Box sx={{ textTransform: "uppercase" }} pb={2}>
                space-based
              </Box>
              <Box pl={1}>
                {spacePosts.map((item) => (
                  <Box key={item.slug}>
                    <Link
                      className={` ${
                        pathname === `/work/${item.slug}` ? "active" : ""
                      }`}
                      href={`/work/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box pb={4}>
              <Box sx={{ textTransform: "uppercase" }} pb={2}>
                image-based
              </Box>
              <Box pl={1}>
                {imagePosts.map((item) => (
                  <Box key={item.slug}>
                    <Link
                      className={` ${
                        pathname === `/work/${item.slug}` ? "active" : ""
                      }`}
                      href={`/work/${item.slug}`}
                    >
                      {item.title}
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
