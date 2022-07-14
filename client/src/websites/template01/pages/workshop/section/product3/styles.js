import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  productLayout: {
    background: "rgb(238, 232, 223)",
    padding: theme.spacing(8, 0),
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.down("xs")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  contentContainer1: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: 45,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 70,
    },
  },
  contentContainer2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 30,
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 30,
    },
  },
  productImage: {
    width: "100%",
    boxShadow: "2.5px 4.3px 29px 0 rgb(0 0 0 / 18%)",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: 0,
    },
  },
  productTitle1: {
    color: "rgb(52, 52, 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    lineHeight: 1.2,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& h2": {
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "5.2rem",
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "5.2rem",
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "5.2rem",
        margin: 0,
      },
    },
  },
  productContent1: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(7),
    color: "rgba(51, 51, 51, 1)",
    fontFamily: `'Muli', sans-serif`,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& h2": {
        fontSize:
          "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
        lineHeight: 1.3,
        fontWeight: 300,
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "1.6rem",
        lineHeight: 1.3,
        fontWeight: 300,
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "1.6rem",
        lineHeight: 1.3,
        fontWeight: 300,
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h2": {
        fontSize: "1.6rem",
        lineHeight: 1.3,
        fontWeight: 300,
        margin: 0,
      },
    },
  },
  productTitle2: {
    color: "rgb(52, 52, 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& h3": {
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      "& h3": {
        fontSize: "2.4rem",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h3": {
        fontSize: "2.4rem",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h3": {
        fontSize: "2.4rem",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
  },
  productContent2: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(4),
    color: "rgba(52, 52, 52, 1)",
    fontFamily: `"Muli", sans-serif`,
    "& p": {
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: 1.6,
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  },
  productTitle3: {
    color: "rgb(52, 52, 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      "& h3": {
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      "& h3": {
        fontSize: "2.4rem",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      "& h3": {
        fontSize: "2.4rem",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      "& h3": {
        fontSize: "2.4rem",
        lineHeight: 1.3,
        fontWeight: 700,
        margin: 0,
      },
    },
  },
  productContent3: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
    color: "rgba(52, 52, 52, 1)",
    fontFamily: `"Muli", sans-serif`,
    "& p": {
      fontSize: "1.2rem",
      fontWeight: 400,
      lineHeight: 1.6,
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  },
  accordionLayout: {
    background: "none",
    boxShadow: "none",
    "&:before": {
      background: "none",
    },
  },
  accordionSummaryLayout: {
    padding: 0,
    margin: 0,
  },
  accordionTitle: {
    color: "rgba(0,0,0,1)",
    fontFamily: `"Muli", sans-serif`,
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6rem",
    },
  },
  accordionContent: {
    padding: 0,
    margin: 0,
    color: "rgba(52, 52, 52, 1)",
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    fontWeight: 400,
  },
  title1Container1: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  title1Container2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
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
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
  title1Line2: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "55%",
    },
  },
  content1Container1: {
    marginTop: 25,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  content1Container2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "18%",
      paddingRight: "18%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  content1Line1: {
    height: 30,
    width: "100%",
  },
  content1Line2: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "85%",
    },
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "85%",
    },
  },
  imageBox: {
    marginTop: 40,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 40,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 40,
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: 0,
    },
    height: 380,
    width: "100%",
  },
  titleLayoutContainer: {
    marginBottom: 25,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  titleLayoutLine: {
    height: 35,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  contentLayoutContainer1: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLayoutContainer2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLayoutContainer3: {
    padding: 0,
  },
  contentLayoutContainer4: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLayoutContainer5: {
    marginBottom: 25,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  contentLayoutLine1: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "95%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "95%",
    },
  },
  contentLayoutLine2: {
    height: 27,
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
      width: "100%",
    },
  },
  contentLayoutLine3: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
  },
  contentLayoutLine4: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
  contentLayoutLine5: {
    height: 27,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    },
  },
  accordionLineContainer: {
    marginTop: 40,
  },
  accordionLine: {
    marginTop: -20,
    height: 90,
    width: "100%",
  },
}));
