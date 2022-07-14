import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  productLayout: {
    background: "rgb(241, 238, 234)",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
    paddingLeft: 30,
    paddingRight: 30,
  },
  productIcon: {
    width: 100,
    height: 100,
  },
  productTitle: {
    padding: theme.spacing(1.5, 0),
    textAlign: "center",
    color: "rgb(52, 52, 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    [theme.breakpoints.down("xs")]: {
      "& h4": {
        margin: 0,
        fontSize:
          "calc( 1.4 * (1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20))))",
        fontWeight: 700,
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& h4": {
        margin: 0,
        fontSize: "2.4rem",
        fontWeight: 700,
      },
    },
    [theme.breakpoints.up("md")]: {
      "& h4": {
        margin: 0,
        fontSize: "2.4rem",
        fontWeight: 700,
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& h4": {
        margin: 0,
        fontSize: "2.4rem",
        fontWeight: 700,
      },
    },
  },
  productContentsLayout: {
    width: "100%",
    maxWidth: 475,
    margin: "auto",
    padding: theme.spacing(3, 0),
  },
  productContent: {
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(118, 118, 118)",
    textAlign: "center",
    "& p": {
      fontSize: "1.2rem",
      margin: 0,
      lineHeight: 1.6,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 23,
      paddingRight: 23,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 23,
      paddingRight: 23,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 23,
      paddingRight: 23,
    },
  },
  roundIcon: {
    height: 110,
    width: 110,
  },
  titleLineContainer: {
    paddingLeft: "22%",
    paddingRight: "22%",
    padding: theme.spacing(2, 0),
  },
  titleLine: {
    height: 35,
    width: "100%",
  },
  contentLineContainer1: {
    padding: theme.spacing(0.2, 0),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
  },
  contentLineContainer2: {
    padding: theme.spacing(0.2, 0),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
  contentLineContainer3: {
    padding: theme.spacing(0.2, 0),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "8%",
      paddingRight: "8%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  },
  contentLineContainer4: {
    padding: theme.spacing(0.2, 0),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "23%",
      paddingRight: "23%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
  },
  contentLine1: {
    height: 25,
    width: "100%",
  },
  contentLine2: {
    height: 25,
    width: "100%",
  },
  contentLine3: {
    height: 25,
    width: "100%",
  },
  contentLine4: {
    height: 25,
    width: "100%",
  },
}));
