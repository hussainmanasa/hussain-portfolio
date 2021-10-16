import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Resume.css";
import ResumeData from "../../utils/ResumeData";
import ProfileTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/ProfileTimeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import Slider from "react-slick";
import { TimelineContent, TimelineItem } from "@mui/lab";
import Paper from "@mui/material/Paper";

const Resume = () => {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
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
          <h5 className="section-title-text">Skills</h5>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs>
              <Slider {...settings}>
                {ResumeData.skils.map((skill) => (
                  <Paper key={skill.title} elevation={3} className="slide">
                    <img alt="" loading="lazy" src={skill.icon} />
                    {/* <h3>{skill.title}</h3> */}
                  </Paper>
                ))}
                {/* <Paper elevation={3} className="slide">
                  <h3>test</h3>
                </Paper> */}
              </Slider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
