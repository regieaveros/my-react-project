import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  heroLayout: {
    marginTop: -64,
    backgroundPosition: "50% 50%",
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(30),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(30),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(30),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(30),
    },
  },
  heroLine: {
    background: "rgb(149, 20, 132)",
    height: 3.5,
    width: 80,
  },
  heroHeading: {
    marginTop: 23,
    textAlign: "left",
    fontFamily: "Roboto Black",
    color: "rgb(255, 255, 255)",
    "& h1": {
      [theme.breakpoints.down("xs")]: {
        fontSize:
          "calc( 2.365rem + (4.9 - 2.365) * ((100vw - 20rem) / (48 - 20)))",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "4.9rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "4.9rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "4.9rem",
      },
      fontWeight: 800,
      margin: 0,
    },
  },
  heroButton: {
    position: "relative",
    marginTop: 20,
    padding: theme.spacing(2.2, 4.3),
    fontFamily: "Roboto Black",
    color: "rgb(255, 255, 255)",
    fontSize: "1rem",
    textTransform: "none",
    transform: "perspective(1px) translateZ(0)",
    borderRadius: 0,
    border: "2px solid rgb(149, 20, 132)",
    "& .heroButtonStyle": {
      zIndex: -1,
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 0,
      transition: "all 0.3s ease-in-out !important",
    },
    "&:hover .heroButtonStyle": {
      background: "rgb(149, 20, 132)",
      width: "100%",
    },
  },
  heroContentLayout: {
    marginTop: theme.spacing(19),
  },
  heroContentCenter: {
    display: "flex",
    justifyContent: "center",
  },
  heroContent1: {
    background: "rgb(149, 20, 132)",
    padding: theme.spacing(0, 5),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(11),
    "& .heroContentIcon1": {
      color: "rgb(255, 255, 255, 255)",
      fontSize: 60,
    },
    "& .heroTitle1": {
      textAlign: "left",
      fontFamily: "Roboto Black",
      color: "rgb(255, 255, 255, 255)",
      fontWeight: 700,
      "& h4": {
        fontSize: "1.5rem",
        margin: 0,
      },
    },
    "& .heroContentLine1": {
      marginTop: 5,
      background: "rgb(255, 255, 255, 255)",
      height: 2,
      width: 40,
    },
    "& .heroDescription1": {
      marginTop: 25,
      textAlign: "left",
      color: "rgb(255, 255, 255, 255)",
      fontWeight: 300,
      "& p": {
        fontSize: "1rem",
        margin: 0,
      },
    },
  },
  heroContentDefault: {
    background: "rgba(31, 39, 50, 1)",
    padding: theme.spacing(0, 5),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(11),
    transition: "all 0.6s",
    "&:hover": {
      background: "rgb(149, 20, 132)",
    },
    "& .heroContentIcon1": {
      transition: "all 0.6s",
      color: "rgb(149, 20, 132)",
      fontSize: 60,
    },
    "&:hover .heroContentIcon1": {
      color: "rgb(255, 255, 255)",
    },
    "& .heroTitle1": {
      textAlign: "left",
      fontFamily: "Roboto Black",
      color: "rgb(255, 255, 255, 255)",
      fontWeight: 700,
      "& h4": {
        fontSize: "1.5rem",
        margin: 0,
      },
    },
    "& .heroContentLine1": {
      transition: "all 0.6s",
      marginTop: 5,
      background: "rgb(149, 20, 132)",
      height: 2,
      width: 40,
    },
    "&:hover .heroContentLine1": {
      background: "rgb(255, 255, 255)",
    },
    "& .heroDescription1": {
      marginTop: 25,
      textAlign: "left",
      color: "rgb(255, 255, 255, 255)",
      fontWeight: 300,
      "& p": {
        fontSize: "1rem",
        margin: 0,
      },
    },
  },
  heroContentItemLayout1: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 30,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      marginRight: theme.spacing(2.5),
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: 0,
      marginRight: theme.spacing(2.5),
      marginLeft: theme.spacing(0),
    },
  },
  heroContentItemLayout2: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
      margin: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 30,
      margin: theme.spacing(0),
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      margin: theme.spacing(0, 1.3),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: 0,
      margin: theme.spacing(0, 1.3),
    },
  },
  heroContentItemLayout3: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 30,
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 30,
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(2.5),
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: 0,
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(2.5),
    },
    transition: "all 0.4s",
    "& .heroBlockStyle": {
      zIndex: -1,
      background: "rgb(149, 20, 132)",
      height: 70,
      position: "absolute",
      bottom: -22,
      [theme.breakpoints.down("xs")]: {
        left: 0,
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        left: 20,
        width: "99%",
      },
      [theme.breakpoints.up("md")]: {
        left: 20,
        width: "99%",
      },
      [theme.breakpoints.up("lg")]: {
        left: 20,
        width: "99%",
      },
    },
    "&:hover .heroBlockStyle": {
      background: "rgb(131 30 117)",
    },
  },
  heroItemLayout: {
    zIndex: 10,
    position: "relative",
  },
}));
