import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import Content from "./Content";
import useImages from "../../../../../../actions/cmsimage/useImages";

const AboutUs = () => {
  let dataImage1, dataImage2, dataTitle1, dataTitle2;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image1 = images.filter(image => image._id === "60d5ab194ec7b46060ce9695");
    const image2 = images.filter(image => image._id === "60d5ab534ec7b46060ce9696");

    dataImage1 = image1[0].image;
    dataImage2 = image2[0].image;
    dataTitle1 = image1[0].title;
    dataTitle2 = image2[0].title;
  }

  return (
    <div className={classes.aboutUsLayout}>
      <Grid container>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div className={classes.contentLayout}>
            <Content name={`Title 1`} />
            <Content name={`Content`} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <div className={classes.contentPosition}>
            <div className={classes.title2ContentPosition}>
              <Content name={`Title 2`} />
            </div>
            {isLoading ? (
              <div className={classes.imageBoxContainer}>
                <Skeleton className={classes.imageBox} variant="rect" />
              </div>
            ) : (
              <>
                <img
                  className={classes.aboutUsImage1}
                  src={dataImage1}
                  alt={dataTitle1}
                />
                <img
                  className={classes.aboutUsImage2}
                  src={dataImage2}
                  alt={dataTitle2}
                />
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
