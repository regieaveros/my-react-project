import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  contactsLayout: {
    background: "rgb(241, 238, 234)",
    paddingLeft: 30,
    paddingRight: 30,
    padding: theme.spacing(7.5, 0),
  },
  mapContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "87%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "87%",
    },
  },
  mapLayout: {
    width: "100%",
    height: 420,
    border: 0,
    boxShadow: "2.5px 4.3px 29px 0 rgb(0 0 0 / 18%)",
  },
  imageBox: {
    height: 420,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "87%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "87%",
    },
  },
  contactTitle1: {
    marginBottom: 20,
    fontFamily: `"Reem Kufi", sans-serif`,
    fontWeight: 700,
    color: "rgb(52, 52, 52)",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& h2": {
        margin: 0,
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      "& h2": {
        margin: 0,
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h2": {
        margin: 0,
        fontSize: "5.2rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h2": {
        margin: 0,
        fontSize: "5.2rem",
      },
    },
  },
  titleLineContainer1: {
    marginBottom: 35,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  titleLine1: {
    height: 45,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },
  contactTitle2: {
    marginBottom: 35,
    fontFamily: `"Reem Kufi", sans-serif`,
    fontWeight: 700,
    color: "rgb(52, 52, 52)",
    [theme.breakpoints.down("xs")]: {
      marginTop: 60,
      textAlign: "center",
      "& h3": {
        margin: 0,
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
        lineHeight: 1.2,
      },
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 60,
      textAlign: "center",
      "& h3": {
        margin: 0,
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
        lineHeight: 1.2,
      },
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      textAlign: "left",
      "& h3": {
        margin: 0,
        fontSize: "2.4rem",
        lineHeight: 1.2,
      },
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 0,
      textAlign: "left",
      "& h3": {
        margin: 0,
        fontSize: "2.4rem",
        lineHeight: 1.2,
      },
    },
  },
  titleLineContainer2: {
    marginBottom: 35,
    [theme.breakpoints.down("xs")]: {
      marginTop: 60,
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 60,
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 0,
      padding: 0,
    },
  },
  titleLine2: {
    height: 35,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 300,
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  contactContent: {
    marginBottom: 35,
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(52, 52, 52)",
    fontWeight: 400,
    "& p": {
      margin: 0,
      fontSize: "1.2rem",
      lineHeight: 1.6,
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  },
  contentContainer1: {
    marginBottom: 3,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "23%",
      paddingRight: "23%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentContainer2: {
    marginBottom: 3,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "12%",
      paddingRight: "12%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentContainer3: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "28%",
      paddingRight: "28%",
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
  contentLine1: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
  },
  contentLine2: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  contentLine3: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  contactInfo: {
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(52, 52, 52)",
    fontWeight: 400,
    "& p": {
      margin: 0,
      fontSize: "1.2rem",
      lineHeight: 1.6,
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  },
  infoLinesSpacing: {
    marginTop: 40,
  },
  infoContainer1: {
    marginBottom: 5,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
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
  infoContainer2: {
    marginBottom: 5,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "35%",
      paddingRight: "35%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  infoLine1: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  infoLine2: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
    [theme.breakpoints.up("lg")]: {
      width: "35%",
    },
  },
}));
