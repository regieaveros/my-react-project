import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    bestServicesLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        padding: theme.spacing(5, 0),
    },
    bestServicesTitle: {
        [theme.breakpoints.down("xs")]: {
            textAlign: "left",
        },
        [theme.breakpoints.up("sm")]: {
            textAlign: "center",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
        },
        "& h2": {
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
    },
    contentsLayout: {
        marginTop: theme.spacing(8),
    },
    bestServicesContents: {
        transition: "all 0.2s",
        padding: theme.spacing(3, 4),
        [theme.breakpoints.down("xs")]: {
            textAlign: "left",
        },
        [theme.breakpoints.up("sm")]: {
            textAlign: "center",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
        },
        "& .bestServicesIcon": {
            transition: "all 0.2s",
            fontSize: "3rem",
            color: "#951484",
        },
        "& h4": {
            transition: "all 0.2s",
            margin: 0,
            fontFamily: "Roboto Black",
            fontWeight: 500,
            color: "#101010",
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
            transition: "all 0.2s",
            color: "#767676",
            fontSize: "1rem",
            lineHeight: 1.5,
        },
        "&:hover": {
            borderBottom: "3px solid #951484",
            boxShadow: "0px 30px 60px 0px rgb(0 0 0 / 12%)",
        },
        "&:hover .bestServicesIcon": {
            color: "#101010",
        },
        "&:hover h4": {
            color: "#951484",
        },
    },
}));