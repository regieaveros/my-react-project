import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import useImages from "../../../../actions/cmsimage/useImages";
import Content from "./Content";
import PostFeatures from "./PostFeatures";

const Products = () => {
  let dataImage, dataTitle;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image = images.filter(image => image._id === "60cc89aa2c003b7a400d343e");

    dataImage = image[0].image;
    dataTitle = image[0].title;
  }

  return (
    <div id="materials" className={classes.productsLayout}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.productsContentContainer1}>
            <Content name={`Title`} />
            <Content name={`Content`} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.productsContentContainer2}>
            {isLoading ? (
              <Skeleton variant="rect" height={350} width="100%" />
            ) : (
              <img
                className={classes.productImage}
                src={dataImage}
                alt={dataTitle}
              />
            )}
            <PostFeatures />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
