import React from 'react';
import { Container, Grid } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useImages from "../../../../actions/cmsimage/useImages";

const About = () => {

  let dataHeading, 
      dataContent, 
      dataDescription, 
      imageTeamwork, 
      imagePhilosophy, 
      imageOffice,
      dataTeamworkTitle,
      dataTeamworkDesc,
      dataPhilosophyTitle,
      dataPhilosophyDesc,
      dataOfficeTitle,
      dataOfficeDesc,
      dataWhoWeAreTitle,
      dataWhoWeAreDesc,
      dataOurPhilosophyTitle,
      dataOurPhilosophyDesc,
      dataHowWeWorkTitle,
      dataHowWeWorkDesc;

  const classes = useStyles();
  const contents = useContents();
  const images = useImages();

  const contentsData = contents.data;
  const contentsLoading = contents.isLoading;

  const imagesData = images.data;
  const imagesLoading = images.loading;

  if(contentsLoading){
    console.log("");
  } else {
    const contentHeading = contentsData.filter(content => content._id === "62ac790ae6e7282f28471363");
    const content = contentsData.filter(content => content._id === "62ac795be6e7282f28471364");
    const contentDescription = contentsData.filter(content => content._id === "62ac79a0e6e7282f28471365");
    const contentTeamworkTitle = contentsData.filter(content => content._id === "62adb16d4e987b0cf4baa937");
    const contentTeamworkDesc = contentsData.filter(content => content._id === "62adb1ab4e987b0cf4baa938");
    const contentPhilosophyTitle = contentsData.filter(content => content._id === "62adb2324e987b0cf4baa939");
    const contentPhilosophyDesc = contentsData.filter(content => content._id === "62adb2484e987b0cf4baa93a");
    const contentOfficeTitle = contentsData.filter(content => content._id === "62adb28a4e987b0cf4baa93b");
    const contentOfficeDesc = contentsData.filter(content => content._id === "62adb2af4e987b0cf4baa93c");
    const contentWhoWeAreTitle = contentsData.filter(content => content._id === "62add3a998db4223b8035b1c");
    const contentWhoWeAreDesc = contentsData.filter(content => content._id === "62add41298db4223b8035b1d");
    const contentOurPhilosophyTitle = contentsData.filter(content => content._id === "62add4b298db4223b8035b1e");
    const contentOurPhilosophyDesc = contentsData.filter(content => content._id === "62add4db98db4223b8035b1f");
    const contentHowWeWorkTitle = contentsData.filter(content => content._id === "62add53798db4223b8035b20");
    const contentHowWeWorkDesc = contentsData.filter(content => content._id === "62add57598db4223b8035b21");

    dataHeading = contentHeading[0].content;
    dataContent = content[0].content;
    dataDescription = contentDescription[0].content;
    dataTeamworkTitle = contentTeamworkTitle[0].content;
    dataTeamworkDesc = contentTeamworkDesc[0].content;
    dataPhilosophyTitle = contentPhilosophyTitle[0].content;
    dataPhilosophyDesc = contentPhilosophyDesc[0].content;
    dataOfficeTitle = contentOfficeTitle[0].content;
    dataOfficeDesc = contentOfficeDesc[0].content;
    dataWhoWeAreTitle = contentWhoWeAreTitle[0].content;
    dataWhoWeAreDesc = contentWhoWeAreDesc[0].content;
    dataOurPhilosophyTitle = contentOurPhilosophyTitle[0].content;
    dataOurPhilosophyDesc = contentOurPhilosophyDesc[0].content;
    dataHowWeWorkTitle = contentHowWeWorkTitle[0].content;
    dataHowWeWorkDesc = contentHowWeWorkDesc[0].content;
  }

  if(imagesLoading) {
    console.log("");
  } else {
    const image1 = imagesData.filter(image => image._id === "62adad404e987b0cf4baa934");
    const image2 = imagesData.filter(image => image._id === "62adad8f4e987b0cf4baa935");
    const image3 = imagesData.filter(image => image._id === "62adadf44e987b0cf4baa936");

    imageTeamwork = image1[0].image;
    imagePhilosophy = image2[0].image;
    imageOffice = image3[0].image;
  }

  return (
    <div id="about-us" className={classes.aboutLayout}>
      <Container  maxWidth="lg">
        <div className={classes.line1Layout}>
          <div className={classes.aboutLine1}>&nbsp;</div>
        </div>
        <div className={classes.aboutLine2}>&nbsp;</div>
        <Grid container>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className={classes.contentStyle1}>
              {ReactHtmlParser(dataHeading)}
              {ReactHtmlParser(dataContent)}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <div className={classes.contentStyle2}>
              {ReactHtmlParser(dataDescription)}
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.imageContainer} container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <div className={classes.imageLayout}>
              <img src={imageTeamwork} alt="About Images" />
              <div className={classes.contentLayout1}>
                {ReactHtmlParser(dataTeamworkTitle)}
                {ReactHtmlParser(dataTeamworkDesc)}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={classNames(classes.imageLayout,
              classes.imageSmallLayout)}>
              <img src={imagePhilosophy} alt="About Images" />
              <div className={classes.contentLayout1}>
                {ReactHtmlParser(dataPhilosophyTitle)}
                {ReactHtmlParser(dataPhilosophyDesc)}
              </div>
            </div>
            <div className={classNames(classes.imageLayout,
              classes.imageSmallLayout)}>
              <img src={imageOffice} alt="About Images" />
              <div className={classes.contentLayout1}>
                {ReactHtmlParser(dataOfficeTitle)}
                {ReactHtmlParser(dataOfficeDesc)}
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={classes.contentContainer}>
          <Grid className={classes.contentStyle} container spacing={5}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className={classes.contentLayout2}>
                {ReactHtmlParser(dataWhoWeAreTitle)}
                {ReactHtmlParser(dataWhoWeAreDesc)}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className={classes.contentLayout2}>
                {ReactHtmlParser(dataOurPhilosophyTitle)}
                {ReactHtmlParser(dataOurPhilosophyDesc)}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className={classes.contentLayout2}>
                {ReactHtmlParser(dataHowWeWorkTitle)}
                {ReactHtmlParser(dataHowWeWorkDesc)}
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default About;