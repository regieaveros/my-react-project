import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    testimonialsLayout: {
        backgroundColor: "#1b1b1b",
        padding: theme.spacing(5, 0),
    },
    lineContainer: {
        position: "relative",
        textAlign: "center",
    },
    lineStyle: {
        position: "absolute",
        top: -130,
        backgroundColor: "#951484",
        width: "2px",
        height: "60px",
        display: "inline-block",
    },
    testimonialContainer: {
        marginTop: theme.spacing(8),
        textAlign: "center",
        fontFamily: "Roboto Black",
        fontWeight: 700,
        "& h3": {
            margin: 0,
            color: "#951484",
            fontSize: "1rem",
            lineHeight: 1.5,
        },
        "& h2": {
            marginTop: theme.spacing(3),
            margin: 0,
            color: "#ffffff",
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
    swiperContainer: {
        margin: theme.spacing(10, 0),
    },
    slidesContainer: {
        transition: "all 0.2s",
        background: "#181717",
        padding: theme.spacing(8, 5),
        "& p": {
            margin: theme.spacing(2.5, 0),
            fontSize: "1rem",
            lineHeight: 1.5,
            color: "#828282",
        },
        "&:hover": {
            border: "2px solid #951484",
        },
    },
    testimonialRating: {
        fontSize: 20,
    },
    emptyRating: {
        color: "#4A4A4A",
    },
    testimonialContent: {
        display: "flex",
        alignItems: "center",
        "& img": {
            width: 60,
            height: 60,
            borderRadius: "50%",
        },
        "& .testimonialInfo": {
            marginLeft: theme.spacing(2),
            fontFamily: "Roboto Black",
            "& .testimonialName": {
                color: "#ffffff",
                fontSize: "1rem",
                lineHeight: 1.5,
            },
            "& .testimonialPosition": {
                fontSize: "0.9rem",
                color: "#951484",
                lineHeight: 1.4,
                fontWeight: 500,
            },
        },
    },
}));
