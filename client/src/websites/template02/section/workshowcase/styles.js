import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    workShocaseLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        padding: theme.spacing(5, 0),
    },
    workShowcaseContent: {
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
            fontSize: "3rem",
            lineHeight: 1.2,
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
        "& p": {
            fontSize: "1rem",
            lineHeight: 1.5,
            [theme.breakpoints.down("xs")]: {
                padding: theme.spacing(0, 0),
            },
            [theme.breakpoints.up("sm")]: {
                padding: theme.spacing(0, 10),
            },
            [theme.breakpoints.up("md")]: {
                padding: theme.spacing(0, 25),
            },
            [theme.breakpoints.up("lg")]: {
                padding: theme.spacing(0, 42),
            },
        },
    },
    swiperContainer: {
        marginTop: theme.spacing(5),
    },
    swiperLayout: {
        "& .swiper-pagination-bullets": {
            bottom: "-5px",
        },
        "& .swiper-pagination-bullet": {
            width: "14px",
            height: "14px",
            background: "transparent",
            border: "1px solid #e0e0e0",
            opacity: 1,
        },
        "& .swiper-pagination-bullet-active": {
            background: "#951484",
        },
    },
    swiperSlide: {
        marginBottom: theme.spacing(2.5),
    },
    slidesContainer: {
        position: "relative",
        transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
        padding: 0,
        borderRadius: 0,
        "& img": {
            width: "100%",
            transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
            backgroundSize: "cover",
            filter: "brightness(100%) contrast(100%) saturate(0%) blur(0px) hue-rotate(0deg)",
        },
        "&:hover": {
            background: "#000",
            transform: "scale(0.95)",
        },
        "&:hover img": {
            filter: "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)",
            boxShadow: "0 1px 15px 1px rgb(0 0 0 / 20%)",
            opacity: 0.5,
        },
        "& .slidesLayout": {
            position: "absolute",
            textAlign: "center",
            textTransform: "none",
            transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
            opacity: 0,
            color: "#ffffff",
            padding: theme.spacing(0 ,4),
            marginRight: "30px",
            "& .workTitle": {
                fontSize: "1.3rem",
                fontWeight: 700,
            },
            "& .workTag": {
                display: "block",
                fontSize: "1rem",
            },
        },
        "&:hover .slidesLayout": {
            marginRight: 0,
            opacity: 1,
        },
    },
}));
