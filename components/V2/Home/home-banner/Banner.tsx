import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import style from "../../../../styles/V2/Home/HomeBanner.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Typical from "react-typical";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  return (
    <Box
      className="h-screen"
      bgcolor="#0A182E"
      marginTop={3}
      sx={{ flexGrow: 1 }}
    >
      <Grid
        container
        paddingTop={15}
        paddingX={12}
        columns={16}
        className="flex items-center"
      >
        <Grid item xs={8}>
          <Box>
            <h1 className={style.header1}> Hello! </h1>
            <h1 className={style.header2}> This is Emrul Kayes </h1>
            <Box className="pt-3 ml-3 text-xl font-semibold text-sky-400 ">
              <Typical
                steps={[
                  "Software Engineer",
                  3500,
                  "Backend Development ( Most Likely )",
                  3500,
                ]}
                loop={Infinity}
                wrapper="Box"
              />{" "}
            </Box>
            <Box
              paddingLeft={1.2}
              color="#8892B0"
              marginTop={3}
              marginBottom={5}
            >
              I am a web developer. In the last few months I have completed more
              than 10+ websites project. Im expert in HTML, CSS and JavaScript.
              As a library component Im expert in both Bootstrap and
              TailwindCSS. Also expert in React js as a JavaScript framework. As
              a backend good at Node.js and Express.js. Also have good knowledge
              at Mongodb database
            </Box>
            <a
              href="resume.pdf"
              className=" flex items-center w-1/4 justify-evenly ml-3 py-3 rounded-lg border-2 text-[#4AB9A7] font-semibold border-sky-300 normal-case hover:text-black hover:bg-sky-100"
              download
            >
              {" "}
              <i>Download Resume</i> <CloudDownloadIcon />
            </a>
          </Box>
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={8}>
          <img
            className="w-2/4 rounded-3xl max-w-lg transition-all duration-800 cursor-pointer filter hover:grayscale grayscale-0"
            src="/profile.jpg"
            alt="image description"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
