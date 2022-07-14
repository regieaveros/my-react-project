import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  layout: {
    padding: 20,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "69%",
    },
    [theme.breakpoints.up("md")]: {
      height: "53%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "60%",
    },
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light,
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main,
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`,
    },
  },
  textField: {
    borderBottomColor: theme.palette.background.light,
  },
  textFieldLayout: {
    margin: 5,
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createUsertButton: {
    height: 40,
    textTransform: "none",
  },
  mdIconSize: {
    fontSize: 24,
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
}));
