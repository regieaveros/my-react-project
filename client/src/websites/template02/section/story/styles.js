import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    storyLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        paddingBottom: theme.spacing(5),
    },
    lineLayout: {
        textAlign: "center",
        paddingBottom: theme.spacing(5),
    },
    storyLine1: {
        backgroundColor: "#951484",
        width: "2px",
        height: "60px",
        display: "inline-block",
    },
    storyContainer: {
        padding: theme.spacing(5, 0),
    },
    storyLine2: {
        backgroundColor: "#951484",
        width: "40px",
        height: "2px",
        display: "inline-block",
    },
    imageLayout: {
        position: "relative",
        alignSelf: "center",
        height: "100%",
        width: "100%",
        objectFit: "cover",
        zIndex: 1,
        "& img": {
            transition: "all 0.2s",
            width: "100%",
        },
        "&::after": {
            content: '""',
            height: "100px",
            width: "100px",
            position: "absolute",
            bottom: "-15px",
            right: "-20px",
            backgroundColor: "#951484",
            zIndex: -1,
        },
    },
    storyContents: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(0),
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: theme.spacing(3.5),
        },
        "& h2": {
            marginBottom: theme.spacing(1),
            margin: 0,
            fontFamily: "Roboto Black",
            fontWeight: 700,
            color: "#101010",
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
            fontFamily: "Roboto Black",
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: 700,
            color: "#951484",
        },
        "& p": {
            marginTop: theme.spacing(10),
            margin: 0,
            color: "#747474",
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
                lineHeight: 1.5,
            },
        },
    },
    storySignature: {
        marginTop: theme.spacing(8),
        "& h3": {
            margin: 0,
            fontSize: "1rem",
            lineHeight: 1.5,
            color: "#101010",
        },
    },
}));
