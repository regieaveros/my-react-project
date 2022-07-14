import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    teamsLayout: {
        backgroundColor: "rgba(255, 255, 255)",
        padding: theme.spacing(5, 0, 12, 0),
    },
    teamsTitle: {
        marginBottom: theme.spacing(8),
        "& h2": {
            color: "#101010",
            fontFamily: "Roboto Black",
            fontWeight: 700,
            [theme.breakpoints.down("xs")]: {
                fontSize: "calc( 1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)))",
                lineHeight: "calc( 1.4 * (1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20))))",
                textAlign: "left",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "calc( 1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)))",
                lineHeight: "calc( 1.4 * (1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20))))",
                textAlign: "center",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "3rem",
                lineHeight: 1.2,
                textAlign: "center",
            },
        },
    },
    teamsContainer: {
        justifyContent: "center",
    },
    teamsStyle: {
        position: "relative",
        transition: "0.2s ease-out",
        height: "99%",
        "&:hover": {
            backgroundColor: "#951484",
        },
        "& img": {
            width: "100%",
            transition: "0.2s ease-out",
        },
        "&:hover img": {
            opacity: 0.1,
        },
        "& .teamsInfo": {
            position: "absolute",
            padding: theme.spacing(1),
            color: "#ffffff",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#9514849c",
            opacity: 0,
            "& .socialmediaLayout": {
                marginTop: theme.spacing(1),
                "& .socialmediaButton": {
                    padding: 5,
                    color: "#ffffff",
                    fontSize: "25px",
                    transition: "all 0.2s",
                    "&:hover": {
                        background: "none",
                        transform: "scale(1.3)",
                    },
                },
            },
            "& .teamName": {
                fontFamily: "Roboto Black",
                fontSize: "1.5rem",
                lineHeight: 1.4,
                fontWeight: 500,
            },
            "& .teamPosition": {
                fontSize: "1rem",
                lineHeight: 1.5,
                fontWeight: 400,
            },
        },
        "&:hover .teamsInfo": {
            opacity: 1,
        },
    },
}));
