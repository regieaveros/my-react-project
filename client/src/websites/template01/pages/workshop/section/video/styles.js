import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  videoLayout: {
    background: "rgb(238, 232, 223)",
    padding: theme.spacing(6, 0),
    paddingLeft: 30,
    paddingRight: 30,
  },
  videoTitle1: {
    marginBottom: theme.spacing(2.5),
    color: "rgb(52, 52, 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    textAlign: "center",
    "& h3": {
      fontSize: "2.4rem",
      fontWeight: 300,
      margin: 0,
    },
  },
  videoFrameTitle: {
    marginTop: theme.spacing(5),
    color: "rgb(52 52 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    textAlign: "center",
    "& h2": {
      margin: 0,
      fontSize: "2.4rem",
      fontWeight: 700,
    },
  },
  frameLayout: {
    padding: theme.spacing(0, 1.5),
  },
  videoFrame: {
    display: "flex",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 500,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    "& .imageOverlay": {
      position: "absolute",
      top: 0,
      left: 0,
      background: "rgba(206, 191, 175, 1)",
      opacity: 0.6,
      zIndex: 0,
      height: "100%",
      width: "100%",
    },
  },
  videoButton: {
    color: "rgb(255 255 255 / 72%)",
    fontSize: 110,
    padding: 0,
    transition: "all 0.3s",
    "&:hover": {
      fontSize: 125,
    },
  },
  buttonLayout: {
    textAlign: "center",
  },
  linkButton: {
    position: "relative",
    textTransform: "none",
    color: "rgb(182, 155, 116)",
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    fontWeight: 700,
    "&:hover": {
      background: "none",
    },
    "& .linkButtonIcon": {
      position: "absolute",
      fontSize: 28,
      top: 1,
      right: -30,
      transition: "all 0.2s",
    },
    "&:hover .linkButtonIcon": {
      right: -35,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: `9999 !important`,
  },
  overlay: {
    position: "relative",
    background: "none",
    padding: 0,
    margin: 0,
    "& div p": {
      height: "calc(44.9943757vw)",
      width: "80vw",
      margin: "0 auto",
    },
  },
  modalClose: {
    position: "fixed",
    color: "white",
    background: "rgba(52, 52, 52, 0.30)",
    fontSize: 50,
    padding: 5,
    "&:hover": {
      background: "rgba(52, 52, 52, 0.66)",
    },
    [theme.breakpoints.down("xs")]: {
      top: 15,
      right: 15,
    },
    [theme.breakpoints.up("sm")]: {
      top: 15,
      right: 15,
    },
    [theme.breakpoints.up("md")]: {
      top: 15,
      right: 15,
    },
    [theme.breakpoints.up("lg")]: {
      top: "3%",
      right: 80,
    },
  },
  videoLoading: {
    color: "rgba(52, 52, 52, 0.67)",
    height: "90px !important",
    width: "90px !important",
  },
  titleLineContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
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
      paddingLeft: "32%",
      paddingRight: "32%",
    },
  },
  titleLine: {
    height: 40,
    width: "100%",
  },
  videoFrameBox: {
    padding: theme.spacing(0, 1),
  },
  videoBox: {
    marginTop: 30,
    height: 450,
    width: "100%",
  },
  titleVideoLineContainer: {
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "12%",
      paddingRight: "12%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "27%",
      paddingRight: "27%",
    },
  },
  linkBoxContainer: {
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "31%",
      paddingRight: "31%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "38%",
      paddingRight: "38%",
    },
  },
  titleVideoLine: {
    height: 35,
    width: "100%",
  },
  linkBox: {
    height: 45,
    width: "100%",
  },
}));
