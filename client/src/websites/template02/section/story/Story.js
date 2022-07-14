import React from "react";
import { Container, Grid } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useImages from "../../../../actions/cmsimage/useImages";

const Story = () => {

    let dataImage,
        dataImageTitle,
        dataTitle, 
        dataContent, 
        dataDescription, 
        dataSignature;

    const classes = useStyles();
    const contents = useContents();
    const images = useImages();

    const dataContents = contents.data;
    const contentsLoading = contents.isLoading;

    const dataImages = images.data;
    const imagesLoading = images.isLoading;

    if(contentsLoading) {
        console.log("");
    } else {
        const contentTitle = dataContents.filter(content => content._id === "62b08acd8851a126e06ca784");
        const content = dataContents.filter(content => content._id === "62b08c738851a126e06ca785");
        const contentDescription = dataContents.filter(content => content._id === "62b08cbf8851a126e06ca786");
        const contentSignature = dataContents.filter(content => content._id === "62b08cf58851a126e06ca787");

        dataTitle = contentTitle[0].content;
        dataContent = content[0].content;
        dataDescription = contentDescription[0].content;
        dataSignature = contentSignature[0].content;
    }

    if(imagesLoading) {
        console.log("");
    } else {
        const image = dataImages.filter(image => image._id === "62b089a68851a126e06ca783");

        dataImage = image[0].image;
        dataImageTitle = image[0].title;
    }

    return (
        <div id="story" className={classes.storyLayout}>
            <Container maxWidth="lg">
            <div className={classes.lineLayout}>
                <div className={classes.storyLine1}>&nbsp;</div>
            </div>
            <div className={classes.storyContainer}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <div className={classes.imageLayout}>
                            <img src={dataImage} alt={dataImageTitle} />
                        </div> 
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={7}>
                        <div className={classes.storyContents}>
                            <div className={classes.storyLine2}>&nbsp;</div>
                            {ReactHtmlParser(dataTitle)}
                            {ReactHtmlParser(dataContent)}
                            {ReactHtmlParser(dataDescription)}
                            <div className={classes.storySignature}>
                                {ReactHtmlParser(dataSignature)}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            </Container>
        </div>
    )
}

export default Story;