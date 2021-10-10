import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CardTravelIcon from "@mui/icons-material/CardTravel";

import "./ProfileTimeline.css";
import { Typography } from "@mui/material";

const ProfileTimeline = (props) => {
  return (
    <div>
      <Timeline>
        {/** Header */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              {/* <CardTravelIcon /> */}
              {props.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{props.title}</Typography>
          </TimelineContent>
        </TimelineItem>
        {props.children}
      </Timeline>
    </div>
  );
};

export const CustomTimelineSeperator = () => (
  <TimelineSeparator>
    <TimelineDot variant="outlined" color="primary" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default ProfileTimeline;
