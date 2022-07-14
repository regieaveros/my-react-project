import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    servicesLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
    },
    servicesLine: {
      backgroundColor: "#951484",
      width: "40px",
      height: "2px",
      display: "inline-block"
    },
    contentStyle: {
      fontFamily: "Roboto Black",
      fontWeight: "700",
      "& h2": {
        color: "#101010",
        margin: 0,
        paddingBottom: 2,
        [theme.breakpoints.down("xs")]: {
          fontSize: "calc( 1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)))",
          lineHeight: "calc( 1.4 * (1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20))))",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "calc( 1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)))",
          lineHeight: "calc( 1.4 * (1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20))))",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "3rem",
          lineHeight: "1.2",
        },
      },
      "& h3": {
        margin: 0,
        color: "#951484",
        lineHeight: "1.5",
        fontSize: "1rem",
      },
    },
    serviceButton: {
      position: "relative",
      marginTop: 20,
      padding: theme.spacing(1.3, 4.5),
      fontFamily: "Roboto Black",
      color: "#101010",
      fontSize: "1rem",
      textTransform: "none",
      transform: "perspective(1px) translateZ(0)",
      borderRadius: 0,
      border: "2px solid rgb(149, 20, 132)",
      "&:hover": {
        color: "rgb(255, 255, 255)",
      },
      "& .serviceButtonStyle": {
        zIndex: -1,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: 0,
        transition: "all 0.3s ease-in-out !important",
      },
      "&:hover .serviceButtonStyle": {
        background: "rgb(149, 20, 132)",
        width: "100%",
      },
    },
    servicesStyleLayout: {
      [theme.breakpoints.down("xs")]: {
        display: "block",
        justifyContent: "flex-start",
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
    postServiceLayout: {
      marginTop: theme.spacing(5),
    },
    postServiceButton: {
      position: "relative",
      backgroundColor: "#f3f3f3",
      width: "100%",
      height: 80,
      transition: "all 0.2s",
      "& .postServiceButtonLayout": {
        position: "absolute",
        left: 0,
        display: "flex",
        alignItems: "center",
        width: "100%",
        "& .postServiceButtonIcon1": {
          visibility: "hidden",
          opacity: 0,
          color: "#1f2732",
          fontSize: "3.5rem",
          marginTop: 12,
          transition: "all 0.2s",
          marginLeft: "-25px",
        },
        "& .postServiceButtonIcon2": {
          color: "#7e7e7e",
          fontSize: "1.8rem",
          transition: "all 0.2s",
        },
        "& .postServiceButtonName": {
          marginLeft: 0,
          textTransform: "none",
          color: "#101010",
          fontWeight: 800,
          fontFamily: "Roboto Black",
          transition: "all 0.2s",
          [theme.breakpoints.down("xs")]: {
            fontSize: "calc( 1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20)))",
            lineHeight: "calc( 1.4 * (1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20))))",
          },
          [theme.breakpoints.up("sm")]: {
            fontSize: "calc( 1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20)))",
            lineHeight: "calc( 1.4 * (1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20))))",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "1.5rem",
            lineHeight: 1.4,
          },
        },
      },
      "& span .postServiceButtonIcon2": {
        position: "absolute",
        right: 20,
      },
      "&:hover": {
        backgroundColor: "#951484",
      },
      "&:hover span .postServiceButtonIcon1": {
        visibility: "visible",
        opacity: 1,
        marginLeft: 10,
      },
      "&:hover span .postServiceButtonName": {
        color: "#ffffff",
        marginLeft: 10,
      },
      "&:hover span .postServiceButtonIcon2": {
        color: "#ffffff",
        position: "absolute",
        right: 10,
      },
    },
}));
