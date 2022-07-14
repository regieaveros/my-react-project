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
    const image = images.filter(image => image._id === "60ce34d02721336d10dc3d07");

    dataImage = image[0].image;
    dataTitle = image[0].title;
  }

  return (
    <div id="choose-us" className={classes.productsLayout}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Content name={`Title 1`} />
          {isLoading ? (
            <Skeleton className={classes.productImageSkeleton} variant="rect" />
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
            <Content name={`Content 1`} />
            <Content name={`Title 2`} />
            <Content name={`Description`} />
            <Content name={`Content 2`} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
