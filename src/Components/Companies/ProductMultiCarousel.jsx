import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BootstrapMulti.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { data, multiData, Acumin } from "./data";

import Rating from "@mui/material/Rating";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ backgroundColor: "#0c8540" }}
    >
      <ArrowBackIos
        style={{ color: "white", backgroundColor: "#0c8540", fontSize: "30px" }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ backgroundColor: "#0c8540" }}
    >
      <ArrowForwardIos
        style={{ color: "white", backgroundColor: "#0c8540", fontSize: "30px" }}
      />
    </div>
  );
};

const ProductMultiCarousel = (props) => {
  const { company, styles } = props;
  return (
    <div
      className="BootstrapMulti"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={props.count}
          slidesToScroll={1}
          speed={500}
          autoplay={true}
          autoplaySpeed={2000}
          dots
        >
          {company.map((item) => (
            <Card item={item} styles={styles} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item, styles }) => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          margin: 10,
          padding: "0 10px",
          width: 210,
          boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
          // backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        {/* <span style={{ float: "right", padding: "5px" }}>
        <FavoriteBorderIcon style={{ color: "gray" }} />
    </span> */}

        <img className="multi__image" src={item} alt="" style={styles} />
      </div>
    </>
  );
};

export default ProductMultiCarousel;
