import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  productsLayout: {
    background: "rgb(238, 232, 223)",
    paddingTop: 20,
    paddingBottom: 20,
  },
  productImage: {
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      paddingLeft: 30,
      paddingRight: 90,
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      paddingLeft: 30,
      paddingRight: 90,
    },
    objectFit: "cover",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  productContents: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(0),
      paddingRight: 20,
      paddingLeft: 20,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(0),
      paddingRight: 30,
      paddingLeft: 30,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
      paddingRight: 30,
      paddingLeft: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(5),
      paddingRight: 30,
      paddingLeft: 0,
    },
  },
  productTitle: {
    fontFamily: `"Reem Kufi", sans-serif`,
    color: "rgb(52, 52, 52)",
    "& h3": {
      fontWeight: 700,
      margin: 0,
      lineHeight: 1,
    },
    [theme.breakpoints.down("xs")]: {
      "& h3": {
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      "& h3": {
        fontSize:
          "calc( 2.4699999999999998rem + (5.2 - 2.4699999999999998) * ((100vw - 20rem) / (48 - 20)))",
      },
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      "& h3": {
        fontSize: "5.2rem",
      },
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      "& h3": {
        fontSize: "5.2rem",
      },
      textAlign: "left",
    },
  },
  productContentContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  productsContent: {
    fontFamily: `"Muli"Muli, sans-serif`,
    color: "rgb(52, 52, 52)",
    "& p": {
      margin: 0,
      lineHeight: 1.2,
    },
    [theme.breakpoints.down("xs")]: {
      "& p": {
        fontSize:
          "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
      },
      textAlign: "center",
      paddingLeft: 8,
      paddingRight: 8,
    },
    [theme.breakpoints.up("sm")]: {
      "& p": {
        fontSize:
          "calc( 1.21rem + (1.6 - 1.21) * ((100vw - 20rem) / (48 - 20)))",
      },
      textAlign: "center",
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      "& p": {
        fontSize: "1.6rem",
      },
      textAlign: "left",
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("lg")]: {
      "& p": {
        fontSize: "1.6rem",
      },
      textAlign: "left",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  productInfoList01: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: -30,
      marginBottom: -30,
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: -30,
      marginBottom: -30,
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: -39,
      marginBottom: 0,
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: -39,
      marginBottom: 0,
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(0),
    },
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: `"Muli", sans-serif`,
    fontStyle: "normal",
    lineHeight: 1.3,
    "& ol": {
      counterReset: `start-counter 0`,
      listStylePosition: "inside",
      "& li": {
        counterIncrement: `start-counter`,
        paddingBottom: theme.spacing(2),
        "&::marker": {
          color: "rgb(182, 155, 116)",
          content: `counter(start-counter) ". "`,
        },
      },
    },
  },
  productInfoList02: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: -30,
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: -30,
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: -39,
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: -39,
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(0),
    },
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: `"Muli", sans-serif`,
    fontStyle: "normal",
    lineHeight: 1.3,
    "& ol": {
      counterReset: `start-counter 4`,
      listStylePosition: "inside",
      "& li": {
        counterIncrement: `start-counter`,
        paddingBottom: theme.spacing(2),
        "&::marker": {
          color: "rgb(182, 155, 116)",
          content: `counter(start-counter) ". "`,
        },
      },
    },
  },
  productsTitleSkeleton1: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "23%",
      paddingLeft: "23%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: "40%",
      paddingLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "40%",
      paddingLeft: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "50%",
      paddingLeft: 0,
    },
  },
  productsTitleSkeleton2: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "16%",
      paddingLeft: "16%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: "30%",
      paddingLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      paddingRight: "30%",
      paddingLeft: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "40%",
      paddingLeft: 0,
    },
  },
  productsContentSkeleton1: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: "5%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: "5%",
    },
    marginBottom: 3,
  },
  productsContentSkeleton2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: "10%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: "10%",
    },
    marginBottom: 3,
  },
  productsContentSkeleton3: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: "15%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: "15%",
    },
    marginBottom: 3,
  },
  productsDescSkeleton1: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  productsDescSkeleton2: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  productBoxSkeleton: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1%",
      paddingBottom: "2%",
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1%",
      paddingBottom: "2%",
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },
  boxSkeletonLayout: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: 350,
    },
    [theme.breakpoints.up("sm")]: {
      height: 450,
    },
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
    [theme.breakpoints.up("lg")]: {
      height: 450,
    },
  },
}));
