import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
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
  formControl: {
    marginTop: 20,
    marginBottom: 20,
    minWidth: "100%",
    maxWidth: "100%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
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
  accordionLayout: {
    marginTop: 15,
  },
  accordionSummary: {
    backgroundColor: "rgb(242,242,242)",
    height: 25,
  },
  accordionSummaryLink: {
    backgroundColor: "rgb(236,236,236)",
  },
  accordionIcon: {
    fontSize: 24,
    marginTop: 10,
  },
  sideLinkContainer: {
    overflowY: "auto",
    height: 310,
    marginBottom: theme.spacing(1),
  },
  childLayout: {
    width: "100%",
  },
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
}));
