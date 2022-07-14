import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    aboutLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(5),
    },
    line1Layout: {
        textAlign: "center",
        paddingBottom: theme.spacing(5.5),
    },
    aboutLine1: {
        backgroundColor: "#951484",
        width: "2px",
        height: "60px",
        display: "inline-block",
    },
    aboutLine2: {
        backgroundColor: "#951484",
        width: "40px",
        height: "2px",
        display: "inline-block",
    },
    contentStyle1: {
        transition: "all 0.2s",
        "& h2": {
            margin: 0,
            color: "#101010",
            fontFamily: "Roboto Black",
            fontWeight: 700,
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
                lineHeight: 1.2,
            },
        },
        "& h3": {
            margin: 0,
            color: "#951484",
            lineHeight: "1.5",
            fontSize: "1rem",
        },
    },
    contentStyle2: {
        transition: "all 0.2s",
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(0.8),
        },
        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(0.8),
        },
        [theme.breakpoints.up("md")]: {
            marginTop: theme.spacing(0),
        },
        "& p": {
            margin: 0,
            fontSize: "1rem",
            lineHeight: 1.5,
        },
    },
    imageContainer: {
       marginTop: theme.spacing(5.5),
    },
    imageLayout: {
        position: "relative",
        transition: "all 0.2s",
        backgroundColor: "#000",
        width: "100%",
        filter: "brightness(100%) contrast(100%) saturate(0%) blur(0px) hue-rotate(0deg)",
        "& img": {
            width: "100%",
            verticalAlign: "middle",
            borderStyle: "none",
            transition: "all 0.2s",
            opacity: 0.5,
        },
        "&:hover": {
            filter: "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)",
        },
    },
    imageSmallLayout: {
        marginBottom: "24px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
            width: "100%",
        },
        [theme.breakpoints.up("md")]: {
            width: "98.1%",
        },
        [theme.breakpoints.up("lg")]: {
            width: "98.5%",
        },
    },
    contentLayout1: {
        position: "absolute",
        left: 33,
        bottom: 35,
        "& h3": {
            margin: 0,
            fontFamily: "Roboto Black",
            fontWeight: 700,
            color: "#ffffff",
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
            [theme.breakpoints.up("lg")]: {
                fontSize: "1.5rem",
                lineHeight: 1.4,
            },
        },
        "& p": {
            margin: 0,
            fontSize: "1rem",
            lineHeight: 1.5,
            color: "#ffffff",
        },
    },
    contentContainer: {
        margin: theme.spacing(4, 0),
    },
    contentStyle: {
        justifyContent: "center",
    },
    contentLayout2: {
        [theme.breakpoints.down("xs")]: {
            paddingRight: theme.spacing(0),
        },
        [theme.breakpoints.up("sm")]: {
            paddingRight: theme.spacing(0),
        },
        [theme.breakpoints.up("md")]: {
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
            paddingRight: theme.spacing(5),
        },
        "& h3": {
            margin: 0,
            fontFamily: "Roboto Black",
            color: "#101010",
            fontWeight: 700,
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
        "& p": {
            margin: 0,
            marginTop: theme.spacing(2.5),
            color: "#767676",
            fontSize: "1rem",
            lineHeight: 1.5,
        },
    },
}));
