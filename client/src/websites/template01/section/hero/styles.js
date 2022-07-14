import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  heroContainer: {
    position: "relative",
    zIndex: 0,
  },
  heroLayout: {
    backgroundPosition: "center center",
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(17),
      paddingTop: theme.spacing(17),
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(18),
      paddingTop: theme.spacing(18),
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(18),
      paddingTop: theme.spacing(18),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: theme.spacing(19),
      paddingTop: theme.spacing(19),
    },
  },
  heroOverlay: {
    position: "absolute",
    backgroundColor: "rgba(35,35,35)",
    opacity: 0.5,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 0,
  },
  frontContent: {
    zIndex: 2,
  },
  heroContent: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: 30,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(5),
      paddingRight: 30,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(13),
      paddingRight: 30,
    },
  },
  heroTitle: {
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        fontSize:
          "calc(2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      "& h1": {
        fontSize:
          "calc(2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h1": {
        fontSize: "5.2rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h1": {
        fontSize: "5.2rem",
      },
    },
    "& h1": {
      lineHeight: 1.2,
      fontWeight: 700,
      fontFamily: `"Reem Kufi", sans-serif`,
      color: "rgba(255, 255, 255)",
      padding: 0,
      margin: 0,
    },
    marginTop: 56,
    marginBottom: 0,
  },
  heroTextInfo: {
    marginTop: 0,
    color: "rgba(255, 255, 255)",
    [theme.breakpoints.down("xs")]: {
      "& p": {
        fontSize:
          "calc(1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
        paddingRight: theme.spacing(0),
      },
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      "& p": {
        fontSize:
          "calc(1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
        paddingRight: theme.spacing(0),
      },
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      "& p": {
        fontSize: "1.6rem",
        paddingRight: theme.spacing(35),
      },
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      "& p": {
        fontSize: "1.6rem",
        paddingRight: theme.spacing(0),
      },
      textAlign: "left",
    },
  },
  titleHeroSkeleton: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(250px + 100vw - 1024px)",
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("lg")]: {
      width: "calc(2px + 100vw - 1024px)",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  skeletonTitleLine: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "13%",
      paddingRight: "13%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: "40%",
    },
  },
  skeletonContentLine1: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "58%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: "10%",
    },
  },
  skeletonContentLine2: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "55%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  skeletonContentLine3: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "55%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  skeletonContentLine4: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "23%",
      paddingRight: "23%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "58%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: "10%",
    },
  },
}));
