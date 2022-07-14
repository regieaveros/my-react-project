import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  postProductsLayout: {
    background: "rgb(241, 238, 234)",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  carouselTitle: {
    textAlign: "center",
    color: "rgb(52, 52, 52)",
    fontFamily: `"Reem Kufi", sans-serif`,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.4rem",
    },
  },
  carouselContent: {
    paddingTop: theme.spacing(2),
    fontFamily: `"Muli", sans-serif`,
    "& p": {
      fontSize: "1.2rem",
      margin: 0,
    },
    color: "rgb(128, 123, 123)",
    [theme.breakpoints.down("xs")]: {
      width: "88%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "78%",
    },
    [theme.breakpoints.up("md")]: {
      width: "76%",
    },
    [theme.breakpoints.up("lg")]: {
      width: 970,
    },
  },
  swiperLayout: {
    maxWidth: "100%",
    width: 1450,
  },
  swiperButtonContainer: {
    position: "absolute",
    zIndex: 2,
    top: 85,
  },
  swiperButtonStyle: {
    textAlign: "center",
    background: "rgb(220, 208, 191)",
    color: "rgb(250, 250, 250)",
    fontSize: 60,
    padding: 5,
    width: 45,
    height: 45,
    opacity: 0.5,
    transition: "all 0.2s",
    "&:hover": {
      background: "rgb(220, 208, 191)",
      opacity: 1,
    },
  },
  swiperButtonLeft: {
    [theme.breakpoints.down("xs")]: {
      right: "33%",
    },
    [theme.breakpoints.up("sm")]: {
      right: "35%",
    },
    [theme.breakpoints.up("md")]: {
      right: 170,
    },
    [theme.breakpoints.up("lg")]: {
      right: 170,
    },
  },
  swiperButtonRight: {
    [theme.breakpoints.down("xs")]: {
      left: "33%",
    },
    [theme.breakpoints.up("sm")]: {
      left: "35%",
    },
    [theme.breakpoints.up("md")]: {
      left: 170,
    },
    [theme.breakpoints.up("lg")]: {
      left: 170,
    },
  },
  watermarksImage: {
    [theme.breakpoints.down("xs")]: {
      width: "33%",
      marginBottom: -48,
    },
    [theme.breakpoints.up("sm")]: {
      width: 160,
      marginBottom: -58,
    },
    [theme.breakpoints.up("md")]: {
      width: 160,
      marginBottom: -58,
    },
    [theme.breakpoints.up("lg")]: {
      width: 160,
      marginBottom: -58,
    },
    height: "100%",
    width: 160,
    zIndex: 0,
  },
  productImageContainer: {
    paddingTop: theme.spacing(13),
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
  postProductsCard: {
    background: "none",
    boxShadow: "none",
    borderRadius: 0,
    padding: theme.spacing(1),
  },
  postProductsCardButton: {
    transition: "all 0.3s",
    "&:hover": {
      background: "rgb(232, 224, 213)",
    },
  },
  postProductsTitle: {
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.6rem",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: -1,
  },
  postProductsPrice: {
    fontFamily: `"Muli", sans-serif`,
    fontWeight: 700,
    fontSize: "1.6rem",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: -1,
  },
  postProductsPricePercent: {
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: 15,
    background: "rgb(206, 191, 175)",
    padding: theme.spacing(0.4, 2, 0.4),
    borderRadius: 20,
  },
  postProductsOrigPrice: {
    fontFamily: `"Muli", sans-serif`,
    fontWeight: 700,
    fontSize: "1.2rem",
    fontStyle: "normal",
    lineHeight: 1,
    letterSpacing: -1,
    color: "rgb(118, 118, 118)",
    textDecoration: "line-through",
    paddingLeft: 12,
  },
  modalLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: `9999 !important`,
  },
  paperLayout: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "block",
    overflowY: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "94%",
      height: "94%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      height: "78%",
    },
    [theme.breakpoints.up("md")]: {
      width: "85%",
      height: "73%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "66%",
      height: "73%",
    },
  },
  modalClose: {
    fontSize: 45,
    padding: 5,
    marginTop: -13,
    marginRight: -30,
    color: "rgb(214, 214, 214)",
    transition: "all 0.3s",
    "&:hover": {
      color: "rgb(232, 224, 213)",
      background: "none",
    },
  },
  productImageModal: {
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "65%",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "90%",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "90%",
      width: "100%",
    },
  },
  productContentModal: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 20,
      paddingLeft: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 0,
      paddingLeft: 40,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      paddingLeft: 40,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 0,
      paddingLeft: 40,
    },
  },
  lineLayout: {
    width: "92%",
    opacity: 0.3,
    marginTop: 20,
    marginRight: 75,
  },
  contentBody: {
    paddingTop: 15,
    fontSize: 16,
    lineHeight: 1.7,
    paddingBottom: 35,
    "& p": {
      margin: 0,
    },
    "& ul": {
      margin: 0,
    },
  },
  swiperBoxWatermark: {
    [theme.breakpoints.down("xs")]: {
      height: 80,
      width: 80,
    },
    [theme.breakpoints.up("sm")]: {
      height: 90,
      width: 90,
    },
    [theme.breakpoints.up("md")]: {
      height: 90,
      width: 90,
    },
    [theme.breakpoints.up("lg")]: {
      height: 90,
      width: 90,
    },
  },
  swiperTitleLine: {
    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      height: 30,
      width: 420,
    },
    [theme.breakpoints.up("md")]: {
      height: 30,
      width: 420,
    },
    [theme.breakpoints.up("lg")]: {
      height: 30,
      width: 420,
    },
  },
  swiperContentLine1: {
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
      width: 720,
    },
    [theme.breakpoints.up("lg")]: {
      width: 720,
    },
  },
  swiperContentLine2: {
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "65%",
    },
    [theme.breakpoints.up("md")]: {
      width: 620,
    },
    [theme.breakpoints.up("lg")]: {
      width: 620,
    },
  },
  swiperContentLine3: {
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "55%",
    },
    [theme.breakpoints.up("md")]: {
      width: 520,
    },
    [theme.breakpoints.up("lg")]: {
      width: 520,
    },
  },
  swiperContentLine4: {
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("md")]: {
      width: 420,
    },
    [theme.breakpoints.up("lg")]: {
      width: 420,
    },
  },
  productsSkeletonLayout: {
    padding: theme.spacing(1),
  },
  productsImageSkeleton: {
    height: 230,
    width: "100%",
  },
  productsTitleLine: {
    height: 30,
    width: "45%",
  },
  productsPriceLine: {
    height: 25,
    width: "40%",
  },
}));
