import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box display="flex" sx={{ mb: 10 }}>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: "#1B4332" }}>
        <Toolbar>
          <Typography align="right" sx={{ color: "#D8F3DC", ml: "auto" }}>
            <NavHashLink className="nav-link" smooth to="/#about">
              About me
            </NavHashLink>
          </Typography>
          <Typography align="right" sx={{ color: "#D8F3DC", ml: 3 }}>
            <NavHashLink className="nav-link" smooth to="/#projects">
              Projects
            </NavHashLink>
          </Typography>

          <a
            href="https://www.linkedin.com/in/rachel--eckert/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon className="icons" sx={{ ml: 3 }} />
          </a>

          <a
            href="https://github.com/rachel-eckert"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon className="icons" sx={{ ml: 2 }} />
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
