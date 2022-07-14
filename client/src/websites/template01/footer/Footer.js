import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import SocialMedia from "./SocialMedia";
import Content from "./Content";
import useImages from "../../../actions/cmsimage/useImages";

const Footer = () => {
  let image, dataImage, dataTitle;

  const { data: images, isLoading, isSuccess } = useImages();

  if (isSuccess) {

    image = images.filter(imageList => imageList._id === "60c7c2b11a4fad553ce2741d");
    dataImage = image[0].image;
    dataTitle = image[0].title;

  } else {

    console.log("");
    
  }

  const classes = useStyles();

  return (
    <>
      <div className={classes.footerLayout}>
        {isLoading ? (
          <div align="center" className={classes.footerImg}>
            <Skeleton variant="circle" width={150} height={150} />
          </div>
        ) : (
          <div align="center" className={classes.footerImg}>
            <img src={dataImage} alt={dataTitle} />
          </div>
        )}
        <Grid
          className={classes.footerInfoLayout}
          align="center"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            className={classes.textSpacing}
            item
            lg={4}
            md={6}
            sm={6}
            xs={12}
          >
            <Content name={`Title 1`} />
            <Content name={`Content 1`} />
          </Grid>
          <Grid
            className={classes.textSpacing}
            item
            lg={4}
            md={6}
            sm={6}
            xs={12}
          >
            <Content name={`Title 2`} />
            <Content name={`Content 2`} />
          </Grid>
          <Grid
            className={classes.textSpacing}
            item
            lg={4}
            md={12}
            sm={12}
            xs={12}
          >
            <Content name={`Title 3`} />
            <Content name={`Content 3`} />
          </Grid>
        </Grid>
        <SocialMedia />
        <Content name={`Copyright`} />
      </div>
    </>
  );
};

export default Footer;
