import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Resume.css";
import ResumeData from "../../utils/ResumeData";

const Resume = () => {
  return (
    <>
      {/* About Us */}
      <Grid container className="section">
        <Grid item className="about-us">
          {/* <Typography mb={2} variant="h5">
            About Me
          </Typography> */}
          <Grid item xs={12}>
            <Typography className="title" mb={2} variant="subtitle1">
              {ResumeData.about_title}
            </Typography>
            <Typography className="about-description" mb={2} variant="body1">
              {ResumeData.about}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Education */}
      <Grid container className="section resume-timeline">
        <Grid item className="section-title">
          <span></span>
          <h5 className="section-title-text">Resume</h5>
        </Grid>
      </Grid>
      {/* Services  */}
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;
