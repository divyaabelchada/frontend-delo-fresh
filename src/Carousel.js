import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./Components/ProductCard";
import mutton from "./assets/mutton.png";
import chickenBreast from "./assets/chickenBreast.png";
import bbq from "./assets/bbq.png";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  Carousel: {
    minWidth: "80%",
    maxHeight: 600,
  },
});

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const classes = useStyles();

  return (
    <div>
      <Container className={classes.Carousel}>
        <h2 style={{ fontSize: "2.7em", fontWeight: "bold", color: "#00438A" }}>
          Best Sellers
        </h2>
        <Slider {...settings}>
          <div>
            <ProductCard
              img={chickenBreast}
              title="Chicken Curry Cut, Large"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <ProductCard
              img={bbq}
              title="Goat Mince, Keema"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <ProductCard
              img={mutton}
              title="Rohu (rui) Medium Bengali"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <ProductCard
              img={mutton}
              title="Rohu (rui) Medium Bengali"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <ProductCard
              img={chickenBreast}
              title="Chicken Curry Cut, Large"
              weight="500 gms"
              grossWeight="526 gms"
              price="Rs 549/-"
            />
          </div>
          <div>
            <ProductCard
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
