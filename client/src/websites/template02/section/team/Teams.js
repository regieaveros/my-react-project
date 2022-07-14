import React from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import Icons from "../../../../global/Icons";
import classNames from "classnames";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useProfessionals from "../../../../actions/template2/professionals/useProfessionals";

const Teams = () => {

    let dataTitle;

    const classes = useStyles();

    const { data: contents, isLoading: contentsLoading } = useContents();
    const { data: teams, isLoading: teamsLoading } = useProfessionals();

    if(contentsLoading) {
        console.log("");
    } else {
        const contentTitle = contents.filter(content => content._id === "62baadc168b3292e7c0f1502");

        dataTitle = contentTitle[0].content;
    }
    
    return (
        <div id="teams" className={classes.teamsLayout}>
            <Container maxWidth="lg">
                <div className={classes.teamsTitle}>
                    {ReactHtmlParser(dataTitle)}
                </div>
                {teamsLoading ? (
                    <div>&nbsp;</div>
                ) : (
                    <Grid 
                        className={classes.teamsContainer}
                        spacing={3}
                        container
                    >
                        {teams.map((team) => (
                            <Grid key={team._id} item xs={12} sm={6} md={4}>
                                <div className={classNames(classes.teamsStyle)}>
                                    <img src={team.image} alt={team.name} />
                                    <div className="teamsInfo">
                                        <div className="teamName">
                                            {ReactHtmlParser(team.name)}
                                        </div>
                                        <div className="teamPosition">
                                            {ReactHtmlParser(team.position)}
                                        </div>
                                        <div className="socialmediaLayout">
                                            {team.socialMedia.map((socialmedia) => (
                                                <IconButton 
                                                    className="socialmediaButton"
                                                    href={`${socialmedia.link}`}
                                                    target="_blank"
                                                    disableRipple
                                                >
                                                    <Icons icon={socialmedia.icontype} />
                                                </IconButton>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    )
}

export default Teams;