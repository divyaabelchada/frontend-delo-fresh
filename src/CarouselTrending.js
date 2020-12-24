import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingComponents from "./Components/TrendingComponents";
import mutton from "./assets/mutton.png";
import chickenBreast from "./assets/chickenBreast.png";
import bbq from "./assets/bbq.png";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  Carousel: {
    margin: "auto",
    paddingTop: 30,
    minWidth: "80%",
    maxHeight: 600,
    paddingBottom: 50,
  },
});

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const classes = useStyles();

  return (
    <div>
      <Container className={classes.Carousel}>
        <h2 style={{ fontSize: "2.7em", fontWeight: "bold", color: "#00438A" }}>
          Trending Now
        </h2>
        <Slider {...settings}>
          <div>
            <TrendingComponents
              img={chickenBreast}
              title="Chicken Curry Cut, Large"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <TrendingComponents
              img={bbq}
              title="Goat Mince, Keema"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <TrendingComponents
              img={mutton}
              title="Rohu (rui) Medium Bengali"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <TrendingComponents
              img={mutton}
              title="Rohu (rui) Medium Bengali"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <TrendingComponents
              img={chickenBreast}
              title="Chicken Curry Cut, Large"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <TrendingComponents
              img={chickenBreast}
              title="Chicken Curry Cut, Large"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Carousel;
