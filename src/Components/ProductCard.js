import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 550,
    display: "grid",
    justify: "center",
    textAlign: "center",
    padding: 15,
    margin: 10,
  },
  img: {
    minHeight: 300,
  },
  button: {},
}));

export default function ProductCard({
  img,
  title,
  weight,
  grossWeight,
  price,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.img}>
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
          src={img}
        />
      </div>

      <h4
        style={{
          textAlign: "left",
          fontSize: "1.7em",
          marginBottom: 5,
          color: "#00438A",
        }}
      >
        {title}
      </h4>
      <div
        style={{
          fontSize: "0.86em",
          margin: 0,
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        <p>
          Net wt: {weight} | Gross: {grossWeight}{" "}
        </p>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          style={{ borderRadius: 80, padding: 0, height: 45 }}
        >
          <h4>Add to Cart | </h4>
          <h4>
            MRP:
            {price}
          </h4>
        </Button>
      </ThemeProvider>
    </Paper>
  );
}
