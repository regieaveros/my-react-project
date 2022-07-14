import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import Content from "./Content";
import useImages from "../../../../../../actions/cmsimage/useImages";

const Product = () => {
  let dataImage, dataTitle;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image = images.filter(image => image._id === "60d7f760fdea672bcc7ca025");

    dataImage = image[0].image;
    dataTitle = image[0].title;
  }

  return (
    <div className={classes.productLayout}>
      <Grid direction="row" justify="flex-end" container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {isLoading ? (
            <div>
              <Skeleton className={classes.imageBox} variant="rect" />
            </div>
          ) : (
            <img
              className={classes.productImage}
              src={dataImage}
              alt={dataTitle}
            />
          )}
          <div className={classes.productContentLayout}>
            <Content name={`Title`} />
            <Content name={`Content`} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
