import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  teamsLayout: {
    background: "rgb(241, 238, 234)",
    padding: theme.spacing(5),
    paddingLeft: 30,
    paddingRight: 30,
  },
  teamTitle: {
    marginBottom: theme.spacing(1),
    color: "rgb(182, 155, 116)",
    textAlign: "center",
    fontFamily: `"Reem Kufi", sans-serif`,
    [theme.breakpoints.down("xs")]: {
      "& h2": {
        fontSize:
          "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      "& h2": {
        fontSize: "2.4rem",
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      "& h2": {
        fontSize: "2.4rem",
        fontWeight: 700,
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      "& h2": {
        fontSize: "2.4rem",
        fontWeight: 700,
        margin: 0,
      },
    },
  },
  teamContent: {
    marginBottom: theme.spacing(9.5),
    margin: "auto",
    width: "100%",
    maxWidth: 781,
    color: "rgb(52, 52, 52)",
    textAlign: "center",
    fontFamily: `"Muli", sans-serif`,
    "& h3": {
      fontSize: "1.2rem",
      lineHeight: 1.3,
      fontWeight: 400,
      margin: 0,
    },
  },
  postTeamImage: {
    margin: "auto",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      maxHeight: 380,
    },
    [theme.breakpoints.up("md")]: {
      maxHeight: 380,
    },
    [theme.breakpoints.up("lg")]: {
      maxHeight: 380,
    },
    [theme.breakpoints.up("xl")]: {
      maxHeight: 480,
    },
  },
  postTeamName: {
    fontFamily: `"Reem Kufi", sans-serif`,
    fontWeight: 700,
    color: "rgb(52, 52, 52)",
    marginTop: theme.spacing(5),
    marginBottom: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc( 1.49rem + (2.4 - 1.49) * ((100vw - 20rem) / (48 - 20)))",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.4rem",
    },
  },
  postTeamPosition: {
    color: "rgb(182, 155, 116)",
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    fontWeight: 700,
    margin: 3,
  },
  postTeamContact: {
    color: "rgb(52 52 52)",
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    fontWeight: 400,
    margin: 3,
  },
  postTeamEmail: {
    color: "rgb(52 52 52)",
    fontFamily: `"Muli", sans-serif`,
    fontSize: "1.2rem",
    fontWeight: 400,
    margin: 3,
  },
  lineLayout: {
    marginTop: 50,
    marginBottom: 50,
    width: 50,
    borderBottom: "3px solid rgb(182, 155, 116)",
    transform: "rotate(90deg)",
  },
  postTeamDescription: {
    marginBottom: theme.spacing(8),
    fontFamily: `"Muli", sans-serif`,
    color: "rgb(52, 52, 52)",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      "& p": {
        fontWeight: 400,
        fontSize: "calc( 1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20)))",
        margin: 0,
      },
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 2),
      "& p": {
        fontWeight: 400,
        fontSize: "1rem",
        margin: 0,
      },
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 2),
      "& p": {
        fontWeight: 400,
        fontSize: "1rem",
        margin: 0,
      },
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0, 2),
      "& p": {
        fontWeight: 400,
        fontSize: "1rem",
        margin: 0,
      },
    },
  },
  titleLineContainer: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "35%",
      paddingRight: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "35%",
      paddingRight: "35%",
    },
  },
  titleLine: {
    height: 40,
    width: "100%",
  },
  contentLineContainer1: {
    marginTop: 25,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
  },
  contentLineContainer2: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
  },
  contentLineContainer3: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "27%",
      paddingRight: "27%",
    },
  },
  contentLineContainer4: {
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "35%",
      paddingRight: "35%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "35%",
      paddingRight: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "35%",
      paddingRight: "35%",
    },
  },
  contentLine: {
    height: 25,
    width: "100%",
  },
  imageBoxContainer: {
    padding: 5,
  },
  imageBox: {
    height: 280,
    width: "100%",
  },
  postContentLineContainer1: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    paddingLeft: "25%",
    paddingRight: "25%",
  },
  postContentLine1: {
    height: 30,
  },
  postContentLineContainer2: {
    paddingLeft: "30%",
    paddingRight: "30%",
  },
  postContentLine2: {
    height: 25,
  },
  hrLineContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(11),
    marginLeft: 80,
  },
  hrLine: {
    height: 5,
    width: 70,
    transform: "rotate(90deg)",
    margin: "auto",
  },
  descLineContainer1: {
    paddingLeft: "25%",
    paddingRight: "25%",
  },
  descLineContainer2: {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  descLineContainer3: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  descLineContainer4: {
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  descLineContainer5: {
    paddingLeft: "30%",
    paddingRight: "30%",
    marginBottom: 25,
  },
  descLine: {
    height: 20,
    width: "100%",
  },
}));
