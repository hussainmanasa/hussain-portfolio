import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Resume.css";
import ResumeData from "../../utils/ResumeData";
import ProfileTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/ProfileTimeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

import {
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@mui/lab";

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

        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6}>
              {/* Experiences */}
              <ProfileTimeline icon={<WorkIcon />} title="Work Experience">
                {ResumeData.experiences.map((exp) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />

                    <TimelineContent>
                      <Typography className="exp-timeline-title">
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="exp-timeline-date"
                      >
                        {exp.date}
                      </Typography>
                      <Typography variant="body2" className="exp-timeline-desc">
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </ProfileTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              {/* Education Details */}
              <ProfileTimeline icon={<SchoolIcon />} title="Education">
                {ResumeData.education.map((edu) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />

                    <TimelineContent>
                      <Typography className="edu-timeline-title">
                        {edu.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="edu-timeline-date"
                      >
                        {edu.date}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </ProfileTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section resume-skills">
        <Grid item className="section-title">
          <span></span>
          <h5 className="section-title-text">My Skills</h5>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
