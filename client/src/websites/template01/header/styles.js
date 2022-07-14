import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 999,
  },
  linkStyle: {
    transition: "all 0.2s",
    "&:hover": {
      borderBottom: "3px solid rgb(184,157,119)",
      paddingBottom: 8,
    },
  },
  link: {
    marginRight: 18,
    marginLeft: 18,
    color: "rgb(0,0,0)",
    fontSize: 21,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  activeLink: {
    borderBottom: "2.5px solid rgb(184,157,119)",
    paddingBottom: 7,
  },
  linkLogo: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 37,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 37,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 37,
    },
    display: "flex",
    textDecoration: "none",
    cursor: "pointer",
    alignItems: "center",
    fontWeight: 700,
    color: "rgb(0,0,0)",
    fontFamily: `'Reem Kufi', sans-serif`,
    "&:hover": {
      textDecoration: "none",
    },
  },

  linkLayout: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },
  logoLayout: {
    [theme.breakpoints.down("xs")]: {
      height: 50,
    },
    [theme.breakpoints.up("sm")]: {
      height: 73,
    },
    [theme.breakpoints.up("md")]: {
      height: 73,
    },
    [theme.breakpoints.up("lg")]: {
      height: 73,
    },
    paddingRight: 10,
    transition: "0.5s",
  },
  logoLayoutScroll: {
    [theme.breakpoints.down("xs")]: {
      height: 43,
    },
    [theme.breakpoints.up("sm")]: {
      height: 53,
    },
    [theme.breakpoints.up("md")]: {
      height: 53,
    },
    [theme.breakpoints.up("lg")]: {
      height: 53,
    },
    paddingRight: 5,
    transition: "0.5s",
  },
  iconLayout: {
    fontSize: 30,
    background: "rgb(185,161,126)",
    color: "rgb(252,255,255)",
    borderRadius: 3,
    "&:hover": {
      background: "rgb(196,181,160)",
      color: "rgb(252,255,255)",
    },
  },
  layout: {
    background: "rgb(241,238,234)",
    color: "rgb(30,23,15)",
    boxShadow: "none",
    padding: 10,
    zIndex: 9999,
  },
  menuButton: {
    display: "flex",
    alignItems: "center",
  },
  drawerLayout: {
    padding: 10,
    background: "rgb(241,238,234)",
  },
  listItemButton: {
    "&:hover": {
      background: "rgb(241, 238, 234)",
    },
    "&:focus": {
      background: "rgb(241, 238, 234)",
    },
  },
  listItemLayout: {
    textAlign: "center",
    borderBottom: "1px solid rgb(230,218,202)",
    transition: "all 0.2s",
    "&:hover": {
      borderBottom: "3px solid rgb(184,157,119)",
      [theme.breakpoints.down("xs")]: {
        marginRight: "15%",
        marginLeft: "15%",
      },
      [theme.breakpoints.up("sm")]: {
        marginRight: "30%",
        marginLeft: "30%",
      },
      [theme.breakpoints.up("md")]: {
        marginRight: "35%",
        marginLeft: "35%",
      },
    },
  },
  activeListItemLayout: {
    borderBottom: "3px solid rgb(184,157,119)",
    [theme.breakpoints.down("xs")]: {
      marginRight: "15%",
      marginLeft: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      marginRight: "30%",
      marginLeft: "30%",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "35%",
      marginLeft: "35%",
    },
  },
  menuTextLayout: {
    color: "rgb(0,0,0)",
    fontWeight: 500,
    margin: 4,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 21,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 21,
    },
  },
  linkSkeleton: {
    paddingLeft: 20,
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
    [theme.breakpoints.up("sm")]: {
      width: 150,
    },
    [theme.breakpoints.up("md")]: {
      width: 150,
    },
    [theme.breakpoints.up("lg")]: {
      width: 150,
    },
  },
  logoSkeleton: {
    paddingLeft: 15,
  },
}));
