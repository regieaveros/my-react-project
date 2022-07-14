import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  featuresLayout: {
    background: "rgb(241, 238, 234)",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(7),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(6),
    },
  },
  featureTitle: {
    fontWeight: 700,
    paddingBottom: 10,
    color: "rgb(52, 52, 52)",
    textAlign: "center",
    fontFamily: `"Reem Kufi", sans-serif`,
    "& h2": {
      fontSize: "2.4rem",
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      "& h2": {
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& h2": {
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("md")]: {
      "& h2": {
        fontSize: "2.4rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& h2": {
        fontSize: "2.4rem",
      },
    },
  },
  featureInfoContainer: {
    maxWidth: 800,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  featureInfo: {
    color: "rgb(52, 52, 52)",
    textAlign: "center",
    fontFamily: `"Muli", sans-serif`,
    lineHeight: 1.3,
    "& h4": {
      fontSize: "1.2rem",
      margin: 0,
      fontWeight: "500",
    },
  },
  featurePostInfo: {
    color: "rgb(52, 52, 52)",
    textAlign: "center",
    fontFamily: `"Muli", sans-serif`,
    fontWeight: "500",
    lineHeight: 1.3,
    "& p": {
      margin: 0,
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  featurePostLayout: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 0,
      paddingTop: 40,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 0,
      paddingTop: 50,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 14,
      paddingTop: 50,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 10,
      paddingTop: 50,
    },
  },
  featurePostContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: theme.spacing(0),
    },
    "& .featurePostImage": {
      width: "100%",
      minWidth: "100%",
      height: 300,
      objectFit: "cover",
      transition: "all 0.3s",
    },
    "&:hover .featurePostImage": {
      transform: "scale(1.2)",
    },
  },
  featureImageContainer: {
    height: 300,
    overflow: "hidden",
    marginBottom: 20,
  },
  featureLink: {
    textAlign: "center",
    paddingTop: theme.spacing(3),
  },
  linkStyle: {
    fontFamily: `"Muli", sans-serif`,
    fontWeight: 600,
    fontSize: "1.2rem",
    textTransform: "none",
    color: "rgb(182, 155, 116)",
    "&:hover": {
      background: "none",
    },
    "& .featureButtonIcon": {
      position: "absolute",
      top: 6,
      right: -23,
      transition: "all 0.3s",
      fontSize: 25,
    },
    "&:hover .featureButtonIcon": {
      right: -30,
    },
  },
  featureTitleSkeleton: {
    [theme.breakpoints.down("xs")]: {
      width: "45%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 250,
    },
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: 300,
    },
  },
}));
