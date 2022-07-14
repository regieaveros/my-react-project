import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import useImages from "../../../../actions/cmsimage/useImages";
import Content from "./Content";

const Products = () => {
  let dataImage, dataTitle;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image = images.filter(image => image._id === "60ccd4822c003b7a400d3441");

    dataImage = image[0].image;
    dataTitle = image[0].title;
  }

  return (
    <div id="products" className={classes.productsLayout}>
      <Grid container direction="row" justify="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {isLoading ? (
            <div className={classes.productBoxSkeleton}>
              <Skeleton className={classes.boxSkeletonLayout} variant="rect" />
            </div>
          ) : (
            <img
              className={classes.productImage}
              src={dataImage}
              alt={dataTitle}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.productContents}>
            <Content name={`Title`} />
            <div className={classes.productContentContainer}>
              <Content name={`Content`} />
            </div>
            <Grid container direction="row" justify="center">
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Content name={`Description 1`} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Content name={`Description 2`} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
