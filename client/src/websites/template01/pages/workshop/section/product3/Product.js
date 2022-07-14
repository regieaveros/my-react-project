import React from "react";
import { Grid, Container } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import useImages from "../../../../../../actions/cmsimage/useImages";
import Content from "./Content";
import PostFeatures from "./PostFeatures";

const Product = () => {
  let dataImage, dataTitle;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image = images.filter(image => image._id === "60dd85d9861d5d0f30329b19");

    dataImage = image[0].image;
    dataTitle = image[0].title;
  }

  return (
    <div className={classes.productLayout}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={classes.contentContainer1}>
              <Content name={`Title 1`} />
              <Content name={`Content 1`} />
              {isLoading ? (
                <Skeleton variant="rect" className={classes.imageBox} />
              ) : (
                <img
                  className={classes.productImage}
                  src={dataImage}
                  alt={dataTitle}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={classes.contentContainer2}>
              <Content name={`Title 2`} />
              <Content name={`Content 2`} />
              <Content name={`Title 3`} />
              <Content name={`Content 3`} />
              <PostFeatures />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
