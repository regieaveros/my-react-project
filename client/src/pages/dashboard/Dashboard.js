import React, { useState } from "react";
import {
  Grid,
  Button,
  Grow,
  Box,
  CircularProgress,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Hidden,
} from "@material-ui/core";
import useStyles from "./styles";
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";
import PageTitle from "../../components/PageTitle";
import useNotes from "../../actions/note/useNotes";
import Form from "../../components/Modal/Form";
import Icons from "../../global/Icons";

const Dashboard = () => {
  let formWidth;

  var classes = useStyles();

  formWidth = classes.formLayout;

  const { data: notes, isLoading } = useNotes();
  const [open, setOpen] = useState(false);
  const [getNote, setGetNote] = useState([]);

  const handleOpen = (data) => {
    setGetNote(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const globalForm = () => {
    return (
      <>
        <Grid container spacing={2}>
          <img src={getNote.image} alt="DashboardNoteImage" width="100%" />
          <Grid item xs={12}>
            <Typography variant="h5">
              <b>{getNote.title}</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.dateLayout} variant="subtitle2">
              <Moment format="LL">{getNote.createdAt}</Moment>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.messageLayout} variant="body1">
              {ReactHtmlParser(getNote.message)}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <PageTitle
        title="Dashboard"
        button={
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            className={classes.buttonSize}
          >
            <div className={classes.buttonIconSize}>
              <Icons icon={`Assessment`} />
            </div>
            <Hidden only="xs">&nbsp;Google Analytics</Hidden>
          </Button>
        }
      />
      {isLoading ? (
        <Grid align="center" item xs={12}>
          <Box component="div" m={20}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <Grow in={true}>
          <Grid container spacing={2}>
            {notes.map((note) => {
              return (
                <Grid key={note._id} item xs={12} sm={4} md={4} lg={3}>
                  <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {note.title.charAt(0)}
                        </Avatar>
                      }
                      title={note.title}
                      subheader={<Moment format="LL">{note.createdAt}</Moment>}
                    />
                    <CardActionArea onClick={() => handleOpen(note)}>
                      <CardMedia
                        className={classes.media}
                        image={note.image}
                        title="Note Lists"
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {ReactHtmlParser(note.message)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grow>
      )}
      <Form
        open={open}
        handleClose={handleClose}
        globalForm={globalForm}
        formWidth={formWidth}
      />
    </>
  );
};

export default Dashboard;
