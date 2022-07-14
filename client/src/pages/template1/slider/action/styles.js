import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  formLayout: {
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      height: 600,
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
      height: 515,
    },
    [theme.breakpoints.up("md")]: {
      width: 800,
      height: 515,
    },
    [theme.breakpoints.up("lg")]: {
      width: 800,
      height: "auto",
    },
  },
  ButtonContainer: {
    marginTop: theme.spacing(1.5),
    paddingBottom: 8,
    height: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    height: 38,
    textTransform: "none",
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
  fileInput: {
    width: "97%",
    marginTop: 20,
    marginBottom: 20,
  },
  alignment: {
    marginTop: 20,
    marginBottom: 20,
  },
}));
