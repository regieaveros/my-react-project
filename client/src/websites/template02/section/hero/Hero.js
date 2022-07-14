import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import classNames from "classnames";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import Icons from "../../../../global/Icons";
import useContents from "../../../../actions/cmscontent/useContents";
import useImages from "../../../../actions/cmsimage/useImages";

const Hero = () => {
  let dataHeading,
    dataTitle1,
    dataTitle2,
    dataTitle3,
    dataContent1,
    dataContent2,
    dataContent3,
    dataImage;

  const classes = useStyles();

  const contents = useContents();
  const images = useImages();

  const contentsLoading = contents.isLoading;
  const imagesLoading = images.isLoading;

  const contentsData = contents.data;
  const imagesData = images.data;

  if (contentsLoading) {
    console.log("");
  } else {
    const contentHeading = contentsData.filter(content => content._id === "610d33acc13ceb335cfb2cd7");

    const contentTitle1 = contentsData.filter(content => content._id === "610d340bc13ceb335cfb2cd8");
    const contentTitle2 = contentsData.filter(content => content._id === "610d345ac13ceb335cfb2cda");
    const contentTitle3 = contentsData.filter(content => content._id === "610d348ec13ceb335cfb2cdc");

    const content1 = contentsData.filter(content => content._id === "610d3440c13ceb335cfb2cd9");
    const content2 = contentsData.filter(content => content._id === "610d346ec13ceb335cfb2cdb");
    const content3 = contentsData.filter(content => content._id === "610d349fc13ceb335cfb2cdd");

    dataHeading = contentHeading[0].content;
    dataTitle1 = contentTitle1[0].content;
    dataContent1 = content1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataContent2 = content2[0].content;
    dataTitle3 = contentTitle3[0].content;
    dataContent3 = content3[0].content;
  }

  if (imagesLoading) {
    console.log("");
  } else {
    const image = imagesData.filter(image => image._id === "610d50a5c13ceb335cfb2cde");

    dataImage = image[0].image;
  }

  return (
    <div
      style={
        contentsLoading
          ? {
              backgroundColor: "rgb(214, 214, 216)",
            }
          : {
              backgroundImage: `url("${dataImage}")`,
            }
      }
      className={classes.heroLayout}
    >
      <Container maxWidth="lg">
        <div className={classes.heroLine}>&nbsp;</div>
        <div className={classes.heroHeading}>
          {ReactHtmlParser(dataHeading)}
        </div>
        <Button className={classes.heroButton} disableRipple>
          Get Started
          <span className="heroButtonStyle"></span>
        </Button>
        <div className={classes.heroContentLayout}>
          <Grid
            className={classes.heroContentCenter}
            container
            direction="row"
            alignItems="flex-end"
          >
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div
                className={classNames(
                  classes.heroContent1,
                  classes.heroContentItemLayout1,
                )}
              >
                <div className="heroContentIcon1">
                  <Icons icon={`DeveloperBoard`} />
                </div>
                <div className="heroTitle1">{ReactHtmlParser(dataTitle1)}</div>
                <div className="heroContentLine1" />
                <div className="heroDescription1">
                  {ReactHtmlParser(dataContent1)}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div
                className={classNames(
                  classes.heroContentDefault,
                  classes.heroContentItemLayout2,
                )}
              >
                <div className="heroContentIcon1">
                  <Icons icon={`HowToReg`} />
                </div>
                <div className="heroTitle1">{ReactHtmlParser(dataTitle2)}</div>
                <div className="heroContentLine1" />
                <div className="heroDescription1">
                  {ReactHtmlParser(dataContent2)}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <div className={classes.heroItemLayout}>
                <div
                  className={classNames(
                    classes.heroContentDefault,
                    classes.heroContentItemLayout3,
                  )}
                >
                  <div className="heroContentIcon1">
                    <Icons icon={`DynamicFeed`} />
                  </div>
                  <div className="heroTitle1">
                    {ReactHtmlParser(dataTitle3)}
                  </div>
                  <div className="heroContentLine1" />
                  <div className="heroDescription1">
                    {ReactHtmlParser(dataContent3)}
                  </div>
                  <div className="heroBlockStyle" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
