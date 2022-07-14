import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    contactsLayout: {
        backgroundColor: "#1b1b1b",
        padding: theme.spacing(0, 0, 3, 0),
    },
    mapLayout: {
        "& iframe": {
            width: "100%",
            height: 550,
            border: 0,
        },
    },
    contactsContent: {
        "& h1": {
            margin: theme.spacing(9, 0, 0),
            fontFamily: "Roboto Black",
            color: "#ffffff",
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
            margin: theme.spacing(3, 0, 0),
            fontFamily: "Roboto Black",
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: 700,
            color: "#951484",
        },
        "& p": {
            margin: theme.spacing(3, 0, 5, 0),
            color: "#acacac",
            fontSize: "1rem",
            lineHeight: 1.5,
        },
    },
    contactsContainer: {
        marginBottom: theme.spacing(8),
    },
    socialmediaButton: {
        transition: "all 0.2s",
        marginRight: theme.spacing(1.5),
        border: "2px solid #951484",
        color: "#ffffff",
        "&:hover": {
            transform: "translateY(-8px)",
            color: "#951484",
        },
    },
    formLayout: {
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(0, 0, 10, 0),
        },
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(0, 0, 10, 0),
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(1, 10, 10, 10),
        },
        [theme.breakpoints.up("lg")]: {
            padding: theme.spacing(1, 10, 10, 10),
        },
    },
    textFieldLayout: {
        "& .MuiFormLabel-root": {
            color: "#6E6E6E",
        },
    },
    textFieldUnderline: {
        "&:before": {
          borderBottomColor: "#951484",
        },
        "&:after": {
          borderBottomColor: "#951484",
        },
        "&:hover:before": {
          borderBottomColor: "#951484 !important",
        },
      },
      textField: {
        color: "#ffffff",
        borderBottomColor: "#951484",
      },
      buttonLayout: {
        transition: "all 0.2s",
        marginTop: theme.spacing(4),
        padding: theme.spacing(1, 8),
        textTransform: "none",
        backgroundColor: "#951484",
        color: "#ffffff",
        borderRadius: 0,
        "&:hover": {
            transform: "scale(0.95)",
            backgroundColor: "#951484",
        },
      },
      buttonIconSize: {
        fontSize: 20,
      },
      textContainer: {
        position: "relative",
      },
      successText: {
        position: "absolute",
        top: -15,
        fontFamily: "Roboto Black",
        fontSize: 13,
        color: "#20a720",
      },
}));

