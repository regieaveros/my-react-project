import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  productsLayout: {
    background: "rgb(241, 238, 234)",
    padding: theme.spacing(6, 0),
    [theme.breakpoints.down("xs")]: {
      paddingRight: 20,
      paddingLeft: 20,
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: 30,
      paddingLeft: 30,
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "5.5%",
      paddingLeft: "5.5%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 30,
      paddingLeft: 30,
    },
  },
  productImage: {
    verticalAlign: "middle",
    borderStyle: "none",
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
  productImageSkeleton: {
    height: 400,
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
  productContents: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
    },
  },
  productTitle1: {
    fontFamily: `"Reem Kufi", sans-serif`,
    fontSize: "3.5rem",
    fontWeight: 700,
    color: "rgb(52, 52, 52)",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 38,
      paddingLeft: "14%",
      paddingRight: "14%",
      width: "100%",
      "& h2": {
        textAlign: "center",
        margin: 0,
        lineHeight: 1.2,
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(7),
      paddingLeft: 0,
      paddingRight: 0,
      width: 400,
      "& h2": {
        textAlign: "left",
        margin: 0,
        lineHeight: 1.2,
        fontSize: "5.2rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(7),
      paddingLeft: 0,
      paddingRight: 0,
      width: 400,
      "& h2": {
        textAlign: "left",
        margin: 0,
        lineHeight: 1.2,
        fontSize: "5.2rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(7),
      paddingLeft: 0,
      paddingRight: 0,
      width: 400,
      "& h2": {
        textAlign: "left",
        margin: 0,
        lineHeight: 1.2,
        fontSize: "5.2rem",
      },
    },
  },
  productTitle1Container1: {
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
  productTitle1Container2: {
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
  productTitle1Container3: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
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
    marginBottom: 60,
  },
  productTitle1Line1: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75%",
    },
  },
  productTitle1Line2: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "65%",
    },
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
    },
  },
  productTitle1Line3: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.up("md")]: {
      width: "55%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "55%",
    },
  },
  productTitle2: {
    marginTop: theme.spacing(4),
    fontFamily: `"Reem Kufi", sans-serif`,
    fontWeight: 700,
    color: "rgb(52, 52, 52)",
    [theme.breakpoints.down("xs")]: {
      "& h3": {
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& h3": {
        fontSize: "2.4rem",
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      "& h3": {
        fontSize: "2.4rem",
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& h3": {
        fontSize: "2.4rem",
        margin: 0,
      },
    },
  },
  productTitle2Container: {
    padding: 0,
    marginTop: 25,
  },
  productTitle2Line: {
    height: 35,
    [theme.breakpoints.down("xs")]: {
      width: "65%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.up("md")]: {
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "55%",
    },
  },
  productContent1: {
    fontFamily: `"Muli", sans-serif`,
    fontWeight: 400,
    color: "rgb(52, 52, 52)",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingTop: 30,
      "& p": {
        fontSize:
          "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
        margin: 0,
        lineHeight: 1.5,
      },
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      paddingTop: 30,
      "& p": {
        fontSize: "1.6rem",
        margin: 0,
        lineHeight: 1.5,
      },
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingTop: 0,
      "& p": {
        fontSize: "1.6rem",
        margin: 0,
        lineHeight: 1.5,
      },
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      paddingTop: 0,
      "& p": {
        fontSize: "1.6rem",
        margin: 0,
        lineHeight: 1.5,
      },
    },
  },
  productContent1Container1: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
      marginTop: 20,
    },
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      marginTop: 20,
    },
    [theme.breakpoints.up("md")]: {
      padding: 0,
      marginTop: 0,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      marginTop: 0,
    },
  },
  productContent1Container2: {
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
  productContent1Container3: {
    padding: 0,
  },
  productContent1Container4: {
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
  productContent1Line1: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "88%",
    },
    [theme.breakpoints.up("md")]: {
      width: "88%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "88%",
    },
  },
  productContent1Line2: {
    height: 30,
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
  productContent1Line3: {
    height: 30,
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
  productContent1Line4: {
    height: 30,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },
  productContent2: {
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(52, 52, 52)",
    "& p": {
      fontSize: "1.2rem",
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(3),
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(7),
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(7),
      textAlign: "left",
    },
  },
  productContent2Container1: {
    marginTop: 35,
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
  productContent2Container2: {
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
  productContent2Container3: {
    padding: 0,
  },
  productContent2Container4: {
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
  productContent2Line1: {
    height: 28,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "88%",
    },
    [theme.breakpoints.up("md")]: {
      width: "88%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "88%",
    },
  },
  productContent2Line2: {
    height: 28,
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
  productContent2Line3: {
    height: 28,
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
  productContent2Line4: {
    height: 28,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },
  productDescContainer: {
    padding: 0,
    marginTop: 20,
  },
  productDescLine: {
    height: 23,
    marginBottom: 5,
    width: "100%",
  },
  productDescription: {
    marginLeft: -15,
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    color: "rgb(52, 52, 52)",
    fontWeight: 400,
    "& ul": {
      lineHeight: 1.7,
      "& li::marker": {
        color: "rgb(182, 155, 116)",
        fontSize: 21,
      },
    },
  },
}));
