import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: -20,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: -40,
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: -40,
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: -40,
    },
  },
  modalTitle: {
    marginTop: -10,
    marginBottom: 0,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
  },
  paperSmall: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    margin: 23,
    [theme.breakpoints.up("xs")]: {
      height: 135,
      width: 275,
      paddingTop: 0,
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.up("sm")]: {
      height: 135,
      width: 350,
      padding: 10,
    },
  },
  lgIconSize: {
    fontSize: 35,
  },
  closeButton: {
    position: "relative",
    top: -32,
    right: -30,
    fontSize: 35,
  },
}));
