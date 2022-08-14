import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import displayImage from "../../assets/images/displayImage.jpg";
import ProfileTimeline, {
  CustomTimelineSeperator,
} from "../Timeline/ProfileTimeline";
import ResumeData from "../../utils/ResumeData";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../CustomButton/CustomButton";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Resume from "../../resume/Hussain_Manasawala_Resume.pdf";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent>
      {link ? (
        <Typography className="profile-timeline-content">
          <span>{title}:</span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="profile-timeline-content">
          <span> {title}: </span>
          <span> {text} </span>
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  const onDownloadHandler = () => {
    const link = document.createElement("a");
    link.download = `Hussain_Manasawala_Resume.pdf`;
    link.href = Resume;
    link.click();
  };
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">{ResumeData.name}</Typography>
        <Typography className="title">{ResumeData.title}</Typography>
      </div>
      <figure className="profile-image">
        <img src={displayImage} alt="" />
      </figure>

      <div className="profile-information">
        <ProfileTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={ResumeData.name} />
          <CustomTimelineItem title="Title" text={ResumeData.title} />
          <CustomTimelineItem title="Email" text={ResumeData.email} />

          {/* {Object.keys(ResumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={ResumeData.socials[key].text}
              link={ResumeData.socials[key].link}
            />
          ))} */}
        </ProfileTimeline>
        <br />
        <CustomButton
          buttonHandler={onDownloadHandler}
          text="Download CV"
          icon={<FileDownloadOutlinedIcon />}
        />
        {/* <button> My Button</button> */}
      </div>
    </div>
  );
};

export default Profile;
