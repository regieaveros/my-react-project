import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  buttonContainer: {
    marginTop: theme.spacing(2.5),
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    height: 46,
    textTransform: "none",
  },
  buttonSize: {
    [theme.breakpoints.up("xs")]: {
      width: "10%",
      height: 35,
      fontSize: 15,
    },
    [theme.breakpoints.up("sm")]: {
      width: 190,
      height: 35,
      fontSize: 15,
    },
  },
  buttonIconSize: {
    fontSize: 24,
    marginTop: 8,
  },
  mdIconSize: {
    fontSize: 24,
  },
  formLayout: {
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 350,
    },
    [theme.breakpoints.up("md")]: {
      width: 400,
    },
  },
}));
