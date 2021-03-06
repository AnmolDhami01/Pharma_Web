import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HoveredLinks from "./HoveredLinks";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

import injectionIcon from "../static/injectionIcon.png";
import ListAltSharpIcon from "@mui/icons-material/ListAltSharp";
import { Link } from "react-router-dom";
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function HoverLinks(props) {
  const svgIcon = (
    <Icon>
      <img alt="edit" src={injectionIcon} />
    </Icon>
  );
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <HoveredLinks
              text={props.text}
              text1={props.text1}
              text2={props.text2}
              text3={props.text3}
              text4={props.text4}
              text5={props.text5}
              text6={props.text6}
              text7={props.text7}
              text8={props.text8}
              text9={props.text9}
              text10={props.text10}
            />
          </React.Fragment>
        }
      >
        {/* <img src={injectionIcon} alt="" srcset="" /> */}
        <Link to="/company">
          <Button
            // variant="contained"
            startIcon={<MedicalServicesIcon />}
            sx={{
              color: "#0C8540",
              fontFamily: "Poppins",
              // background: "white",
              height: "35px",
              "&:hover": {
                backgroundColor: "white",
              },
              "&:focus": {
                backgroundColor: "white",
              },
            }}
            endIcon={<ExpandMoreIcon />}
          >
            {/* {props.heading} */}

            <Typography fontFamily="Poppins">{props.heading}</Typography>
          </Button>
        </Link>
      </HtmlTooltip>
    </div>
  );
}
