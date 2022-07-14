import React from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import Icons from "../../../../global/Icons";
import useStyles from "./styles";
import Form from "./Form";
import useContents from "../../../../actions/cmscontent/useContents";
import useSocialMedia from "../../../../actions/template2/social_media/useSocialMedia";

const Contacts = () => {

    let dataTitle, dataSubtitle, dataDescription;

    const classes = useStyles();
    const { data: contents, isLoading: contentsLoading } = useContents();
    const { data: socialmedias, isLoading: socialmediasLoading } = useSocialMedia();

    if(contentsLoading) {
        console.log("");
    } else {
        const contentTitle = contents.filter(content => content._id === "62bc1305020f7c4084eb18c1");
        const contentSubtitle = contents.filter(content => content._id === "62bc13b7020f7c4084eb18c2");
        const contentDescription = contents.filter(content => content._id === "62bc13e0020f7c4084eb18c3");

        dataTitle = contentTitle[0].content;
        dataSubtitle = contentSubtitle[0].content;
        dataDescription = contentDescription[0].content;
    }

    return (
        <div id="contact-us" className={classes.contactsLayout}>
            <div className={classes.mapLayout}>
                <iframe
                    title="New York Place"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3022.626471509773!2d-73.98510700000001!3d40.748244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5ac2c!2s350%205th%20Ave%2C%20New%20York%2C%20NY%2010118!5e0!3m2!1sen!2sus!4v1656762841504!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className={classes.contactsContent}>
                            {ReactHtmlParser(dataTitle)}
                            {ReactHtmlParser(dataSubtitle)}
                            {ReactHtmlParser(dataDescription)}
                        </div>
                        <div className={classes.contactsContainer}>
                            {socialmediasLoading ? (
                                <></>
                            ) : (
                                <>
                                    {socialmedias.map((socialmedia) => (
                                        <IconButton 
                                            className={classes.socialmediaButton}
                                            key={socialmedia._id}
                                            href={`${socialmedia.link}`}
                                            target="_blank"
                                            disableRipple
                                        >
                                            <Icons icon={socialmedia.icon} />
                                        </IconButton>
                                    ))}
                                </>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contacts;