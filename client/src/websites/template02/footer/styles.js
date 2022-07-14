import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  footerLayout1: {
    background: "rgb(22, 22, 22)",
    padding: theme.spacing(0, 4.5),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(4.5),
  },
  footerContentCenter: {
    display: "flex",
    justifyContent: "center",
  },
  footerContentLayout1: {
    paddingTop: theme.spacing(2),
    fontFamily: "Roboto Black",
    color: "rgb(255, 255, 255)",
    transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    cursor: "pointer",
    width: 160,
    [theme.breakpoints.down("xs")]: {
      fontSize:
        "calc( 1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
    "& h4": {
      margin: 0,
    },
    "&:hover": {
      color: "rgb(149, 20, 132)",
    },
  },
  footerLayout2: {
    background: "rgb(255, 255, 255)",
    paddingBottom: theme.spacing(4.5),
  },
  footerImageCenter: {
    display: "flex",
    justifyContent: "center",
  },
  footerImageWord: {
    transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    paddingTop: theme.spacing(4.5),
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  footerLayout3: {
    padding: theme.spacing(4, 0),
    background: "rgb(0, 0, 0)",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "unset",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "unset",
    },
  },
  footerCopyright: {
    transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    color: "rgba(116, 116, 116, 1)",
    fontSize: "1rem",
    "& p": {
      margin: 0,
    },
  },
  footerMenu: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  footerLink: {
    transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
    color: "rgb(255, 255, 255)",
    fontSize: "1rem",
    "&:hover": {
      color: "rgb(149, 20, 132)",
      textDecoration: "none",
    },
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(3),
    },
  },
  footerLinkLayout: {
    position: "relative",
    "& .footerLinkStyle": {
      position: "absolute",
      bottom: -5,
      [theme.breakpoints.down("xs")]: {
        left: 16.5,
      },
      [theme.breakpoints.up("sm")]: {
        left: 17,
      },
      [theme.breakpoints.up("md")]: {
        left: 18,
      },
      [theme.breakpoints.up("lg")]: {
        left: 25,
      },
      height: 2,
      width: 0,
      transition: "width 0.4s",
    },
    "&:hover .footerLinkStyle": {
      width: 23,
      background: "rgb(149, 20, 132)",
    },
  },
}));
