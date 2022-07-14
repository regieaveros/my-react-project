import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Content from "./Content";
import useImages from "../../../../actions/cmsimage/useImages";

const Hero = () => {
  let dataImage;

  const classes = useStyles();

  const { data: images, isSuccess } = useImages();

  if (isSuccess) {
    const image = images.filter(image => image._id === "60c7af162e09367e3c9f31d7");

    dataImage = image[0].image;
  }

  return (
    <div id="home" className={classes.heroContainer}>
      <div
        style={
          isSuccess
            ? {
                backgroundImage: `url("${dataImage}")`,
              }
            : {
                backgroundColor: "rgb(214, 214, 216)",
              }
        }
        className={classes.heroLayout}
      >
        <div className={classes.heroOverlay}></div>
        <Grid className={classes.heroContent} container>
          <Grid item xs={12} sm={12} md={12} lg={6}></Grid>
          <Grid
            className={classes.frontContent}
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <Content name={`Title`} />
            <Content name={`Content`} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
