import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  footerLayout: {
    height: "100%",
    background: "rgb(42,37,37)",
  },
  footerImg: {
    paddingTop: 80,
  },
  footerInfoLayout: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(32),
      paddingRight: theme.spacing(32),
    },
  },
  footerInfoTitle: {
    fontFamily: `"Muli", sans-serif`,
    fontWeight: 700,
    color: "rgb(182,155,116)",
  },
  footerInfoText: {
    fontFamily: `"Muli", sans-serif`,
    fontSize: 18,
    color: "rgb(250,250,250)",
    lineHeight: 0.5,
  },
  textSpacing: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(7),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(8),
    },
  },
  footerSocialMedia: {
    paddingTop: theme.spacing(12),
    paddingBottom: "49px",
  },
  footerSpacing: {
    marginBottom: 5,
  },
  socialMediaLayout: {
    color: "rgb(182,155,116)",
    fontSize: 35,
    paddingBottom: theme.spacing(2),
  },
  footerLine: {
    marginTop: theme.spacing(9),
    width: 100,
    borderTop: "3px solid rgb(182,155,116)",
    transform: "rotate(90deg)",
  },
  footerCopyright: {
    textAlign: "center",
    fontSize: 18,
    padding: 10,
    background: "rgb(33, 28, 28)",
    color: "rgb(104, 118, 118)",
  },
}));
