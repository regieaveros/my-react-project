import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  sideLinkText: {
    margin: -7,
  },
  mdIconSize: {
    fontSize: 24,
  },
}));
