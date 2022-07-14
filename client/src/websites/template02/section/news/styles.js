import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    newsLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        padding: theme.spacing(5, 0),
    },
    newsContents: {
        [theme.breakpoints.down("xs")]: {
            textAlign: "left",
        },
        [theme.breakpoints.up("sm")]: {
            textAlign: "center",
        },
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
        marginBottom: theme.spacing(12),
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
        padding: 0,
        borderRadius: 0,
        backgroundColor: "#000",
        transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
        overflow: "hidden",
        "&:hover": {
            boxShadow: "0 1px 15px 1px rgb(0 0 0 / 20%)",
            backgroundColor: "#000",
        },
        "& img": {
            width: "100%",
            transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
            backgroundSize: "cover",
            filter: "brightness(100%) contrast(100%) saturate(0%) blur(0px) hue-rotate(0deg)",
            opacity: 0.5,
            background: "#000",
        },
        "&:hover img": {
            filter: "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)",
            opacity: 0.3,
            transform: "scale(1.1)",
        },
        "& .slidesLayout": {
            position: "absolute",
            transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
            textTransform: "none",
            textAlign: "center",
            color: "#ffffff",
            bottom: "-2rem",
            "& .newsTitle": {
                display: "block" ,
                marginTop: theme.spacing(2),
                fontSize: "1.5rem",
                lineHeight: 1.4,
                fontWeight: 700,
            },
            "& .newsTag": {
                fontSize: "0.9rem",
                lineHeight: 1.4,
            },
            "& .newsIcon": {
                transition: "700ms cubic-bezier(0.17, 0.67, 0, 1.01)",
                opacity: 0,
                fontSize: "2.3rem",
            },
        },
        "&:hover  .slidesLayout": {
            transform: "translateY(-40px)",
        },
        "&:hover .slidesLayout .newsIcon": {
            opacity: 1,
        },
    },
}));
