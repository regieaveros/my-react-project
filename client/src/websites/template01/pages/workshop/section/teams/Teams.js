import React from "react";
import { Grid, Container } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import useTeams from "../../../../../../actions/template1/teams/useTeams";
import Content from "./Content";

const Teams = () => {
  const classes = useStyles();

  const { data: teams, isLoading } = useTeams();

  return (
    <div className={classes.teamsLayout}>
      <Container maxWidth="xl">
        <Content name={`Title`} />
        <Content name={`Content`} />
        <Grid container direction="row" justify="center" alignItems="center">
          {isLoading ? (
            <>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <div className={classes.imageBoxContainer}>
                  <Skeleton className={classes.imageBox} variant="rect" />
                </div>
                <div className={classes.postContentLineContainer1}>
                  <Skeleton className={classes.postContentLine1} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.hrLineContainer}>
                  <Skeleton className={classes.hrLine} />
                </div>
                <div className={classes.descLineContainer1}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer2}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer3}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer4}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer5}>
                  <Skeleton className={classes.descLine} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <div className={classes.imageBoxContainer}>
                  <Skeleton className={classes.imageBox} variant="rect" />
                </div>
                <div className={classes.postContentLineContainer1}>
                  <Skeleton className={classes.postContentLine1} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.hrLineContainer}>
                  <Skeleton className={classes.hrLine} />
                </div>
                <div className={classes.descLineContainer1}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer2}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer3}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer4}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer5}>
                  <Skeleton className={classes.descLine} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <div className={classes.imageBoxContainer}>
                  <Skeleton className={classes.imageBox} variant="rect" />
                </div>
                <div className={classes.postContentLineContainer1}>
                  <Skeleton className={classes.postContentLine1} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.postContentLineContainer2}>
                  <Skeleton className={classes.postContentLine2} />
                </div>
                <div className={classes.hrLineContainer}>
                  <Skeleton className={classes.hrLine} />
                </div>
                <div className={classes.descLineContainer1}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer2}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer3}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer4}>
                  <Skeleton className={classes.descLine} />
                </div>
                <div className={classes.descLineContainer5}>
                  <Skeleton className={classes.descLine} />
                </div>
              </Grid>
            </>
          ) : (
            <>
              {teams.map((team) => (
                <Grid key={team._id} item xs={12} sm={6} md={4} lg={4}>
                  <div align="center">
                    <img
                      className={classes.postTeamImage}
                      src={team.image}
                      alt="WorkShop TeamPhoto"
                    />
                    <h3 className={classes.postTeamName}>{team.name}</h3>
                    <h4 className={classes.postTeamPosition}>
                      {team.position}
                    </h4>
                    <h4 className={classes.postTeamContact}>{team.contact}</h4>
                    <h4 className={classes.postTeamEmail}>{team.email}</h4>
                    <div className={classes.lineLayout} />
                    <div className={classes.postTeamDescription}>
                      {ReactHtmlParser(team.description)}
                    </div>
                  </div>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Teams;
