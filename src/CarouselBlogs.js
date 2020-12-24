import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "./Components/Category";
import mutton from "./assets/mutton.png";
import chickenBreast from "./assets/chickenBreast.png";
import bbq from "./assets/bbq.png";
import { Button, Container, Grid, Typography } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffffff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#B40001",
    },
  },
});

const useStyles = makeStyles({
  Carousel: { margin: "auto", paddingTop: 50, minWidth: "80%", maxHeight: 600 },
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
          Check out our blogs
        </h2>
        <Slider {...settings}>
          <div>
            <Category img={chickenBreast} title="Chicken Curry Cut, Large" />
          </div>
          <div>
            <Category img={bbq} title="Goat Mince, Keema" />
          </div>
          <div>
            <Category img={mutton} title="Rohu (rui) Medium Bengali" />
          </div>
          <div>
            <Category img={mutton} title="Rohu (rui) Medium Bengali" />
          </div>
          <div>
            <Category img={chickenBreast} title="Chicken Curry Cut, Large" />
          </div>
          <div>
            <Category img={chickenBreast} title="Chicken Curry Cut, Large" />
          </div>
        </Slider>
      </Container>
      <Container
        style={{
          display: "grid",
          justify: "center",
          marginTop: 50,
          marginBottom: 40,
        }}
      >
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              borderRadius: 80,
              minWidth: 150,
              maxHeight: 60,
            }}
          >
            <h4>See all</h4>
          </Button>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default Carousel;
