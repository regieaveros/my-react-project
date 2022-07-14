import { makeStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  buttonIconSize: {
    fontSize: 24,
    marginTop: 8,
  },
  buttonSize: {
    [theme.breakpoints.up("xs")]: {
      width: "10%",
      height: 35,
      fontSize: 15,
    },
    [theme.breakpoints.up("sm")]: {
      width: 223,
      height: 35,
      fontSize: 15,
    },
  },
  formLayout: {
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 450,
    },
    [theme.breakpoints.up("md")]: {
      width: 450,
    },
  },
  dateLayout: {
    marginTop: -17,
  },
  messageLayout: {
    overflowY: "auto",
    height: 200,
    textAlign: "justify",
    padding: 5,
    marginTop: -12,
  },
}));
