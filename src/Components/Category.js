import { Paper, Typography } from "@material-ui/core";
import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

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
    maxHeight: 400,
    minWidth: 250,
    textAlign: "center",
    padding: 15,
    margin: 10,
  },
  img: {
    minHeight: "75%",
  },
  card: {
    maxHeight: 400,
    borderRadius: 20,
  },
  button: {},
}));

function Category({ img, title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <div className={classes.img}>
          <img
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            src={img}
          />
        </div>
        <h4 style={{ fontSize: "2em", color: "#C61423", marginTop: 5 }}>
          {title}
        </h4>
      </Paper>
    </div>
  );
}

export default Category;
