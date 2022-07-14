import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  formLayout: {
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.up("md")]: {
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
      lineHeight: 1,
      width: 190,
      height: 35,
      fontSize: 15,
    },
    [theme.breakpoints.up("md")]: {
      lineHeight: 2,
      width: 235,
      height: 35,
      fontSize: 15,
    },
  },
  buttonIconSize: {
    paddingRight: 5,
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
  buttonSize2: {
    padding: 2,
    fontSize: 14,
  },
  buttonIconSize2: {
    fontSize: 20,
    marginTop: 4.5,
    lineHeight: 1,
  },
  buttonIconSize3: {
    fontSize: 25,
    padding: 0,
    margin: 0,
    marginTop: 40,
  },
  gridLayout: {
    marginTop: 15,
  },
  fieldsetLayout: {
    overflowY: "auto",
    height: 200,
    marginTop: 10,
    padding: theme.spacing(1.5),
    borderColor: "rgba(0, 122, 255, 0.54)",
  },
  fsTextfieldContainer: {
    display: "inherit",
    marginTop: -15,
  },
  fsTextfieldLayout: {
    marginRight: theme.spacing(1.5),
  },
}));
