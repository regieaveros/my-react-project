import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  aboutUsLayout: {
    background: "rgb(241, 238, 234)",
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
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
  aboutUsTitle1: {
    fontFamily: `"Reem Kufi", sans-serif`,
    fontWeight: 700,
    color: "rgb(54, 54, 54)",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& h2": {
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
        margin: 0,
        lineHeight: 1.2,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      "& h2": {
        fontSize: "5.2rem",
        margin: 0,
        lineHeight: 1.2,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "5.2rem",
        margin: 0,
        lineHeight: 1.2,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "5.2rem",
        margin: 0,
        lineHeight: 1.2,
      },
    },
  },
  contentLayout: {
    paddingBottom: 60,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 50,
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 120,
      paddingLeft: 0,
      paddingRight: 65,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 120,
      paddingLeft: 70,
      paddingRight: 65,
    },
  },
  aboutUsContent: {
    marginTop: 25,
    fontFamily: `'Muli', sans-serif`,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& p": {
        fontSize:
          "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
        margin: 0,
        lineHeight: 1.6,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      "& p": {
        fontSize: "1.6rem",
        margin: 0,
        lineHeight: 1.6,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& p": {
        fontSize: "1.6rem",
        margin: 0,
        lineHeight: 1.6,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& p": {
        fontSize: "1.6rem",
        margin: 0,
        lineHeight: 1.6,
      },
    },
  },
  buttonContainer: {
    marginTop: 50,
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
  aboutUsButton: {
    fontFamily: `"Muli", sans-serif`,
    border: "2px solid rgb(129, 104, 67)",
    borderRadius: 2,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 3,
    color: "rgb(129, 104, 67)",
    background: "none",
    transition: "all 0.3s ease-in-out",
    padding: 5,
    height: 60,
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 20px 30px 0 rgb(0 0 0 / 20%)",
      background: "rgb(182, 155, 116)",
      color: "rgb(254, 254, 254)",
      border: "2px solid rgb(182, 155, 116)",
    },
    [theme.breakpoints.down("xs")]: {
      width: 180,
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: 210,
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      width: 210,
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: 210,
      fontSize: "1rem",
    },
  },
  title2Container: {
    position: "relative",
  },
  aboutUsTitle2: {
    position: "absolute",
    top: 135,
    left: -38,
    transform: "rotate(90deg)",
    padding: 0,
    color: "rgb(52, 52, 52)",
    fontFamily: `"Muli", sans-serif`,
    [theme.breakpoints.down("xs")]: {
      "& h2": {
        margin: 0,
        fontSize:
          "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
        fontWeight: 700,
        width: 132,
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& h2": {
        margin: 0,
        fontSize: "1.6rem",
        fontWeight: 700,
        width: 132,
      },
    },
    [theme.breakpoints.up("md")]: {
      "& h2": {
        margin: 0,
        fontSize: "1.6rem",
        fontWeight: 700,
        width: 132,
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& h2": {
        margin: 0,
        fontSize: "1.6rem",
        fontWeight: 700,
        width: 132,
      },
    },
  },
  socialMediaLayout: {
    display: "block",
    height: 48,
    paddingTop: 5,
    margin: theme.spacing(1, 0),
    fontSize: 38,
    color: "rgb(52, 52, 52)",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "rgba(182, 155, 116, 0.46)",
    },
  },
  aboutUsLineContainer: {
    marginTop: 70,
    marginLeft: -25,
    padding: 0,
  },
  aboutUsLine: {
    padding: 0,
    borderBottom: "3px solid rgb(52, 52, 52)",
    width: 100,
    transform: "rotate(90deg)",
  },
  contentPosition: {
    position: "relative",
  },
  title2ContentPosition: {
    position: "absolute",
    width: 48,
    top: 20,
    [theme.breakpoints.down("xs")]: {
      right: 0,
    },
    [theme.breakpoints.up("sm")]: {
      right: 0,
    },
    [theme.breakpoints.up("md")]: {
      right: 0,
    },
    [theme.breakpoints.up("lg")]: {
      right: 88,
    },
  },
  aboutUsImage1: {
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 650,
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up("sm")]: {
      height: 800,
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      height: 800,
      paddingRight: theme.spacing(13.5),
    },
    [theme.breakpoints.up("lg")]: {
      height: 800,
      paddingRight: theme.spacing(23.5),
    },
  },
  aboutUsImage2: {
    position: "absolute",
    boxShadow: "2.5px 4.3px 62px 0 rgb(0 0 0 / 22%)",
    [theme.breakpoints.down("xs")]: {
      bottom: -100,
      right: 10,
      width: 200,
    },
    [theme.breakpoints.up("sm")]: {
      bottom: -110,
      right: 10,
      width: 330,
    },
    [theme.breakpoints.up("md")]: {
      bottom: -110,
      right: 10,
      width: 330,
    },
    [theme.breakpoints.up("lg")]: {
      bottom: -170,
      right: 95,
      width: 380,
    },
  },
  title1LineContainer1: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "28%",
      paddingRight: "28%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  title1LineContainer2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "18%",
      paddingRight: "18%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  title1Line1: {
    height: 40,
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
      width: 250,
    },
  },
  title1Line2: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: 280,
    },
    [theme.breakpoints.up("lg")]: {
      width: 350,
    },
  },
  contentLineContainer1: {
    marginTop: 40,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "28%",
      paddingRight: "28%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLineContainer2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLineContainer3: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLineContainer4: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "18%",
      paddingRight: "18%",
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
  contentLine1: {
    height: 30,
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
      width: "85%",
    },
  },
  contentLine2: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "95%",
    },
  },
  contentLine3: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "97%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "95%",
    },
  },
  contentLine4: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "48%",
    },
  },
  buttonBoxContainer: {
    marginTop: 40,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "55%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 200,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  buttonBox: {
    height: 50,
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
      width: 200,
    },
  },
  circleSpacing: {
    marginBottom: 10,
    width: 40,
    height: 40,
  },
  lineLayout: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 20,
    transform: "rotate(90deg)",
    height: 4,
    width: 100,
  },
  title2LineContainer: {
    marginTop: 115,
    marginLeft: 18,
  },
  title2Line: {
    height: 25,
    width: 170,
    transform: "rotate(90deg)",
  },
  imageBoxContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(12),
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: theme.spacing(23),
    },
  },
  imageBox: {
    height: 800,
  },
}));
