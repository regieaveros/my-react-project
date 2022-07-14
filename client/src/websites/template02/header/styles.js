import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 999,
  },
  iconLayout: {
    fontSize: 30,
    background: "rgb(149, 20, 132)",
    color: "rgb(252,255,255)",
    borderRadius: 3,
    "&:hover": {
      background: "rgba(187, 19, 165, 1)",
      color: "rgb(252,255,255)",
    },
  },
  headerLayout: {
    boxShadow: "none",
    padding: 10,
    zIndex: 9999,
  },
  defaultBackground: {
    transition: "all 0.3s",
    background: "rgb(15 4 34 / 18%)",
  },
  scrollBackground: {
    transition: "all 0.3s",
    background: "rgba(31, 39, 50, 0.9)",
  },
  activeBackground: {
    transition: "all 0.3s",
    background: "rgb(31, 39, 50)",
  },
  hederLinkLayout: {
    transition: "all 0.3s",
    paddingTop: 30,
    paddingBottom: 5,
  },
  headerScrollLayout: {
    transition: "all 0.3s",
    paddingTop: 5,
    paddingBottom: 5,
  },
  linkLogoLayout: {
    margin: "0 auto",
    marginLeft: -27,
  },
  linkLogo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontFamily: "Roboto Black",
    textDecoration: "none",
    fontWeight: 700,
    color: "rgb(255, 255, 255)",
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc( 1.7rem + (2.6 - 1.7) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.6rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.6rem",
    },
  },
  logoLayout: {
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "calc( 1.7rem + (3.3 - 1.7) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("sm")]: {
      width: 45,
    },
    [theme.breakpoints.up("md")]: {
      width: 45,
    },
    [theme.breakpoints.up("lg")]: {
      width: 45,
    },
    marginRight: 10,
  },
  link: {
    fontFamily: "Roboto Black",
    fontSize: "1rem",
    fontWeight: 800,
    color: "rgb(255, 255, 255)",
    position: "relative",
    textDecoration: "none",
    marginLeft: 25,
    "& .linkStyle": {
      position: "absolute",
      bottom: -5,
      left: 0,
      height: 2,
      width: 0,
      transition: "width 0.4s",
    },
    "&:hover .linkStyle": {
      background: "rgb(149, 20, 132)",
      width: 23,
    },
    "& .activeLink": {
      background: "rgb(149, 20, 132)",
      width: 23,
    },
  },
  drawerLayout: {
    overflow: "hidden",
    background: "rgb(31, 39, 50)",
    paddingBottom: 20,
  },
  drawerLayoutTop: {
    [theme.breakpoints.down("xs")]: {
      marginTop: 28,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 33,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 33,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 33,
    },
  },
  drawerLayoutScroll: {
    [theme.breakpoints.down("xs")]: {
      marginTop: 14,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 19,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 19,
    },
  },
  listItemButton: {
    textAlign: "center",
    "&:hover": {
      background: "none",
    },
  },
  menuTextLayout: {
    position: "relative",
    fontFamily: "Roboto Black",
    fontSize: "1rem",
    fontWeight: 800,
    color: "rgb(255, 255, 255)",
    textDecoration: "none",
    "& .mobileLinkStyle": {
      position: "absolute",
      bottom: -5,
      left: 0,
      height: 2,
      width: 0,
      transition: "width 0.4s",
    },
    "&:hover .mobileLinkStyle": {
      background: "rgb(149, 20, 132)",
      width: 23,
    },
    "& .mobileActiveLink": {
      background: "rgb(149, 20, 132)",
      width: 23,
    },
  },
}));
