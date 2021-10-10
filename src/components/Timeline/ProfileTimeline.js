import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CardTravelIcon from "@mui/icons-material/CardTravel";

import "./ProfileTimeline.css";

const ProfileTimeline = () => {
  return (
    <div>
      <Timeline>
        {/** Header */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <CardTravelIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{/* <CardTravelIcon /> */}</TimelineContent>
        </TimelineItem>

        {/** Items */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default ProfileTimeline;
