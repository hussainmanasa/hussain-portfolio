import React from "react";
import Button from "@mui/material/Button";
import "./CustomButton.css";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  textTransform: "none",
});

const CustomButton = (props) => {
  return (
    <div className="custom-button">
      <BootstrapButton variant="contained" endIcon={props.icon} color="primary">
        {props.text}
      </BootstrapButton>
    </div>
  );
};

export default CustomButton;
