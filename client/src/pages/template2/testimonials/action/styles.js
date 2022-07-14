import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  formLayout: {
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      height: 620,
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      height: 590,
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
      height: 590,
      width: 800,
    },
    [theme.breakpoints.up("lg")]: {
      height: "auto",
      width: 800,
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
      lineHeight: 2,
      width: "10%",
      height: 35,
      fontSize: 15,
    },
    [theme.breakpoints.up("sm")]: {
      lineHeight: 1.1,
      width: 230,
      height: 35,
      fontSize: 15,
    },
    [theme.breakpoints.up("md")]: {
      lineHeight: 2,
      width: 230,
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
  },
  alignment: {
    marginBottom: 20,
  },
  gridItemLayout: {
    marginBottom: 20,
  },
  gridTop: {
    marginTop: 10,
  },
}));
