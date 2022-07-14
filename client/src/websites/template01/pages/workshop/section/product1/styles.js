import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  productLayout: {
    position: "relative",
    background: "rgb(241, 238, 234)",
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  productImage: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    top: 0,
    height: "80%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75%",
    },
  },
  productContentLayout: {
    position: "relative",
    paddingTop: 52,
  },
  productTitle: {
    fontFamily: `"Reem Kufi", sans-serif`,
    color: "rgb(52, 52, 52)",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      textAlign: "center",
      "& h2": {
        margin: 0,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      maxWidth: 736,
      "& h2": {
        margin: 0,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: "5.2rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      maxWidth: 736,
      "& h2": {
        margin: 0,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: "5.2rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "right",
      maxWidth: 736,
      "& h2": {
        margin: 0,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: "5.2rem",
      },
    },
  },
  contentLayout: {
    marginTop: 40,
    background: "rgb(101, 107, 80)",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2.5, 4),
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2.5, 4),
      maxWidth: 736,
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5, 12),
      maxWidth: 736,
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(5, 12),
      maxWidth: 736,
    },
  },
  productContent: {
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(255, 255, 255)",
    textAlign: "center",
    "& p": {
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
  productButton: {
    color: "rgb(182, 155, 116)",
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    fontWeight: 700,
    textTransform: "capitalize",
    "& .iconButton": {
      position: "absolute",
      top: 5,
      right: -28,
      fontSize: 25,
      transition: "all 0.3s",
    },
    "&:hover": {
      "& .iconButton": {
        right: -32,
      },
      background: "none",
    },
  },
  imageBox: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75%",
    },
  },
  lineLayout: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 800,
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 800,
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(8),
    },
  },
  titleLineContainer1: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  titleLineContainer2: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  titleLine1: {
    top: 0,
    right: 0,
    height: 40,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      position: "unset",
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      position: "unset",
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      maxWidth: 380,
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      maxWidth: 380,
    },
  },
  titleLine2: {
    right: 0,
    height: 40,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      position: "unset",
      top: 0,
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      position: "unset",
      top: 0,
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 40,
      maxWidth: 460,
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      top: 40,
      maxWidth: 460,
    },
  },
  contentBoxLayout: {
    paddingTop: 55,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(40),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: theme.spacing(40),
    },
  },
  contentBoxContainer: {
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 800,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 800,
    },
  },
  contentBox: {
    top: 0,
    right: 0,
    height: 300,
    [theme.breakpoints.down("xs")]: {
      position: "unset",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      position: "unset",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: 717,
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: 717,
    },
  },
}));
