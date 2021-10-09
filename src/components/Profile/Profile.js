import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import displayImage from "../../assets/images/displayImage.jpg";

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">Hussain</Typography>
        <Typography className="title">Hussain</Typography>
      </div>
      <figure className="profile-image">
        <img src={displayImage} alt="" />
      </figure>

      <div className="profile-information">
        Insert Timeline
        <br />
        <button> My Button</button>
      </div>
    </div>
  );
};

export default Profile;