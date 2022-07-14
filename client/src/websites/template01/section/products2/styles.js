import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  productsLayout: {
    background: "rgb(101, 107, 80)",
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: theme.spacing(7),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: theme.spacing(7),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "5.5%",
      paddingRight: "5.5%",
      paddingBottom: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: theme.spacing(8),
    },
  },
  productsContentContainer1: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1),
      paddingRight: 0,
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(1),
      paddingRight: 0,
      paddingBottom: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(8),
      paddingBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(12),
      paddingRight: theme.spacing(8),
      paddingBottom: 0,
    },
  },
  productsContentContainer2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(1),
    },
  },
  productsTitle: {
    fontFamily: `"Reem Kufi", sans-serif`,
    color: "rgb(255, 255, 255)",
    "& h2": {
      [theme.breakpoints.down("xs")]: {
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
        textAlign: "center",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
        textAlign: "left",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "5.2rem",
        textAlign: "left",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "5.2rem",
        textAlign: "left",
      },
      lineHeight: 1.2,
      margin: 0,
      fontWeight: 700,
    },
  },
  titleLineContainer1: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
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
  titleLineContainer2: {
    marginTop: -5,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "13%",
      paddingRight: "13%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
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
  titleLine1: {
    height: 55,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  titleLine2: {
    height: 55,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  productsContent: {
    marginTop: theme.spacing(4),
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(255, 255, 255)",
    fontStyle: "normal",
    "& h2": {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        fontSize:
          "calc( 1.21rem + (1.5 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
      },
      [theme.breakpoints.up("sm")]: {
        textAlign: "left",
        fontSize:
          "calc( 1.21rem + (1.5 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
      },
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        textAlign: "left",
        fontSize: "1.5rem",
      },
      lineHeight: 1.3,
      fontWeight: 100,
      margin: 0,
    },
  },
  contentLineContainer1: {
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
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
  contentLineContainer2: {
    marginTop: 5,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
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
  contentLineContainer3: {
    marginTop: 5,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
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
  contentLineContainer4: {
    marginTop: 5,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
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
  contentLine1: {
    height: 33,
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
  contentLine2: {
    height: 33,
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
  contentLine3: {
    height: 33,
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
  contentLine4: {
    height: 33,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  productImage: {
    width: "100%",
    height: 400,
    objectFit: "cover",
    objectPosition: "top",
    boxShadow: "2.5px 4.3px 29px 0 rgb(0 0 0 / 18%)",
  },
  accordionContainer: {
    marginTop: theme.spacing(4.5),
  },
  accordionLayout: {
    background: "rgb(101, 107, 80)",
    boxShadow: "none",
    position: "unset",
  },
  accordionSummaryLayout: {
    padding: 0,
    borderBottom: "2px solid rgb(182, 155, 116)",
  },
  accordionTitle: {
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
    fontFamily: `"Muli", sans-serif`,
    padding: theme.spacing(1, 0),
    marginBottom: 0,
    color: "rgb(255, 255, 255)",
  },
  accordionContent: {
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    color: "rgb(255, 255, 255)",
    padding: 0,
  },
  accordionLine: {
    marginTop: -30,
    height: 100,
    width: "100%",
  },
}));
