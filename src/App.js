import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import delo_fresh_logo from "./assets/delo_fresh_logo.png";
import headerImg from "./assets/headerImg.png";
import categories from "./assets/categories.png";
import steaks from "./assets/steaks.png";
import chickenone from "./assets/chickenone.png";
import fish from "./assets/fish.png";
import icon from "./assets/icon.png";
import iconOutlined from "./assets/iconOutlined.png";
import perks from "./assets/perks.png";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  InputBase,
  TextField,
} from "@material-ui/core";
import {
  DoneOutlineRounded,
  ExpandMoreOutlined,
  FiberManualRecordRounded,
  LocationOnOutlined,
  PersonOutline,
  Search,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Carousel from "./Carousel";
import CarouselTrending from "./CarouselTrending";
import Category from "./Components/Category";
import CarouselBlogs from "./CarouselBlogs";
import IconsCard from "./Components/IconsCard";
import SpecialityCard from "./Components/SpecialityCard";
import gradient from "./assets/gradient.svg";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#00438A",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  logo: {
    maxHeight: 83,
    maxWidth: 153,
    marginBottom: 10,
  },
  MainContainer: {
    paddingTop: 70,
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "70%",
    justifyContent: "center",
  },
  speciality: {
    padding: 50,
    backgroundImage: `url(${headerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    transform: "scaleX(-1)",
    minHeight: 300,
  },
  verticalLine: {
    borderLeft: "3px solid #B40001",
    height: 100,
    marginTop: "auto",
    marginBottom: "auto",
  },
  verticalLineThin: {
    borderLeft: "1px solid #B40001",
    height: 70,
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

function AppScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

AppScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar color="secondary">
          <Grid
            style={{ backgroundColor: "#00438A", color: "#ffffff" }}
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
          >
            <Grid>
              <p>
                <FiberManualRecordRounded fontSize="small" /> About us &nbsp;
              </p>
            </Grid>
            <Grid>
              <p>
                <FiberManualRecordRounded fontSize="small" /> Contact us &nbsp;
              </p>
            </Grid>
            <Grid>
              <p>
                <FiberManualRecordRounded fontSize="small" /> Download App
                &nbsp; &nbsp; &nbsp;
              </p>
            </Grid>
          </Grid>
          <Toolbar color="secondary">
            <Container style={{ display: "flex", minWidth: "80%" }}>
              <img className={classes.logo} src={delo_fresh_logo} />
              <Grid
                style={{ margin: "auto" }}
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Card
                  style={{
                    paddingLeft: "1%",

                    borderRadius: 40,
                    border: "1px solid #00438A",
                    display: "flex",
                  }}
                >
                  <Input
                    placeholder="Search"
                    style={{ width: 400, height: "3em" }}
                  />
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                </Card>
              </Grid>
              <Grid
                style={{ margin: "auto" }}
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
              >
                <Button
                  color="#000000"
                  className={classes.button}
                  size="large"
                  aria-label="Location"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  startIcon={<LocationOnOutlined />}
                  endIcon={<ExpandMoreOutlined />}
                >
                  Location
                </Button>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Mumbai</MenuItem>
                  <MenuItem onClick={handleClose}>Pune</MenuItem>
                </Menu>

                <Button
                  color="#000000"
                  className={classes.button}
                  size="large"
                  startIcon={<PersonOutline />}
                >
                  Login
                </Button>
                <Button
                  color="#000000"
                  className={classes.button}
                  size="large"
                  startIcon={<ShoppingCartOutlined />}
                >
                  Cart
                </Button>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />

        <div style={{ minHeight: 80 }}></div>

        {/* -------------- Header img----------- */}
        <img style={{ width: "100%", margin: 0, padding: 0 }} src={headerImg} />
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          style={{
            backgroundColor: "#ffffff",
            marginTop: 0,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 0,
          }}
        >
          <IconsCard img={icon} title="Red Hot Deals" />
          <div className={classes.verticalLine} />
          <IconsCard img={icon} title="Red Hot Deals" />
          <div className={classes.verticalLine} />
          <IconsCard img={icon} title="Red Hot Deals" />
          <div className={classes.verticalLine} />
          <IconsCard img={icon} title="Red Hot Deals" />
          <div className={classes.verticalLine} />
          <IconsCard img={icon} title="Red Hot Deals" />
          <div className={classes.verticalLine} />
          <IconsCard img={icon} title="Red Hot Deals" />
        </Grid>

        {/* ------------- steak img -------------- */}
        <img style={{ width: "100%" }} src={steaks} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          style={{
            backgroundColor: "#F0F0F0",
            marginTop: 0,
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 0,
          }}
        >
          <SpecialityCard img={iconOutlined} title="Premium Produce" />
          <div className={classes.verticalLine} />
          <SpecialityCard img={iconOutlined} title="Premium Produce lorem " />
          <div className={classes.verticalLine} />
          <SpecialityCard img={iconOutlined} title="Premium Produce" />
          <div className={classes.verticalLine} />
          <SpecialityCard img={iconOutlined} title="Premium Produce" />
          <div className={classes.verticalLine} />
          <SpecialityCard img={iconOutlined} title="Premium Produce" />
        </Grid>

        {/* Cards for Best sellers */}
        <div
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            paddingTop: 20,
            paddingBottom: 30,
          }}
        >
          <Container maxWidth="1000">
            <Carousel />
          </Container>
        </div>

        <div
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Container style={{ marginTop: 40 }}>
            <h2
              style={{
                fontSize: "2.7em",
                fontWeight: "bold",
                color: "#00438A",
              }}
            >
              Explore by Categories
            </h2>
          </Container>

          <Container className={classes.categories}>
            <Category img={chickenone} title="chicken" />
            <Category img={chickenone} title="chicken" />
            <Category img={chickenone} title="chicken" />
            <Category img={chickenone} title="chicken" />
            <Category img={chickenone} title="chicken" />
          </Container>
        </div>
        <div
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            paddingTop: 20,
            paddingBottom: 30,
          }}
        >
          <Container>
            <CarouselTrending />
          </Container>
        </div>

        {/* ----------- Blogs ----------- */}
        <div
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Container>
            <CarouselBlogs />
          </Container>
        </div>

        {/* -----------------speciality-------------- */}
        <Grid justify="flex-end" className={classes.speciality} style={{}}>
          <Card
            style={{
              padding: 30,
              maxHeight: 600,
              maxWidth: 700,
              transform: "scaleX(-1)",
            }}
          >
            <h2 style={{ fontSize: "2em", color: "#B40001" }}>
              Every Delo Fresh boc Contains Meat thats :
            </h2>

            <div style={{ display: "flex" }}>
              <DoneOutlineRounded style={{ color: "#B40001" }} />
              <p
                style={{
                  fontSize: "1.7em",
                  fontWeight: "bold",
                  marginTop: 5,
                  marginLeft: 8,
                }}
              >
                Vacum sealed and chilled between 0-4 C
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <DoneOutlineRounded style={{ color: "#B40001" }} />

              <p
                style={{
                  fontSize: "1.7em",
                  fontWeight: "bold",
                  marginTop: 5,
                  marginLeft: 8,
                }}
              >
                Vacum sealed and chilled between 0-4 C
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <DoneOutlineRounded style={{ color: "#B40001" }} />

              <p
                style={{
                  fontSize: "1.7em",
                  fontWeight: "bold",
                  marginTop: 5,
                  marginLeft: 8,
                }}
              >
                Vacum sealed and chilled between 0-4 C
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <DoneOutlineRounded style={{ color: "#B40001" }} />

              <p
                style={{
                  fontSize: "1.7em",
                  fontWeight: "bold",
                  marginTop: 5,
                  marginLeft: 8,
                }}
              >
                Vacum sealed and chilled between 0-4 C
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <DoneOutlineRounded style={{ color: "#B40001" }} />
              <p
                style={{
                  fontSize: "1.7em",
                  fontWeight: "bold",
                  marginTop: 5,
                  marginLeft: 8,
                }}
              >
                Vacum sealed and chilled between 0-4 C
              </p>
            </div>
          </Card>
        </Grid>
        <div
          style={{
            backgroundColor: "#00438A",

            color: "#ffffff",
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid>
              <p>
                <h4>USE FULL LINKS</h4>
                <ul style={{ listStyleType: "none" }}>
                  <li>Why licious?</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Campaign</li>
                  <li>About us</li>
                </ul>
              </p>
            </Grid>
            <Grid>
              <p>
                <h4>USE FULL LINKS</h4>
                <ul style={{ listStyleType: "none" }}>
                  <li>Why licious?</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Campaign</li>
                  <li>About us</li>
                </ul>
              </p>
            </Grid>
            <Grid>
              <p>
                <h4>USE FULL LINKS</h4>
                <ul style={{ listStyleType: "none" }}>
                  <li>Why licious?</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Campaign</li>
                  <li>About us</li>
                </ul>
              </p>
            </Grid>
            <Grid>
              <p>
                <h4>USE FULL LINKS</h4>
                <ul style={{ listStyleType: "none" }}>
                  <li>Why licious?</li>
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Campaign</li>
                  <li>About us</li>
                </ul>
              </p>
            </Grid>
          </Grid>
          <hr></hr>
          <Container style={{ minWidth: "75%" }}>
            <h3>We sell only the meat that we would eat ourself</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>We sell only the meat that we would eat ourself</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3>We sell only the meat that we would eat ourself</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Container>
          <hr></hr>
          <Container style={{ minWidth: "75%", textAlign: "center" }}>
            <h3>2020 Delightful Gourmet Pvt Ltd</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Container>
        </div>
      </ThemeProvider>
      <AppScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </AppScrollTop>
    </React.Fragment>
  );
}
