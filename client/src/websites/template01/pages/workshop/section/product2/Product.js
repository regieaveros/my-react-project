import React from "react";
import { Grid, Container } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import Content from "./Content";
import useImages from "../../../../../../actions/cmsimage/useImages";

const Product = () => {
  let dataImage1, 
      dataImage2, 
      dataImage3,
      dataTitle1,
      dataTitle2,
      dataTitle3;

  const classes = useStyles();

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image1 = images.filter(image => image._id === "60db392ae3eb5c7bfc48fb04");
    const image2 = images.filter(image => image._id === "60db395fe3eb5c7bfc48fb05");
    const image3 = images.filter(image => image._id === "60db3999e3eb5c7bfc48fb06");

    dataImage1 = image1[0].image;
    dataImage2 = image2[0].image;
    dataImage3 = image3[0].image;

    dataTitle1 = image1[0].title;
    dataTitle2 = image2[0].title;
    dataTitle3 = image3[0].title;
  }

  return (
    <div className={classes.productLayout}>
      <Container maxWidth="xl">
        <Grid direction="row" justify="center" alignItems="center" container>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className={classes.productContentsLayout}>
              <div align="center">
                {isLoading ? (
                  <Skeleton className={classes.roundIcon} variant="circle" />
                ) : (
                  <img
                    className={classes.productIcon}
                    src={dataImage1}
                    alt={dataTitle1}
                  />
                )}
              </div>
              <Content name={`Title 1`} />
              <Content name={`Content 1`} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className={classes.productContentsLayout}>
              <div align="center">
                {isLoading ? (
                  <Skeleton className={classes.roundIcon} variant="circle" />
                ) : (
                  <img
                    className={classes.productIcon}
                    src={dataImage2}
                    alt={dataTitle2}
                  />
                )}
              </div>
              <Content name={`Title 2`} />
              <Content name={`Content 2`} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className={classes.productContentsLayout}>
              <div align="center">
                {isLoading ? (
                  <Skeleton className={classes.roundIcon} variant="circle" />
                ) : (
                  <img
                    className={classes.productIcon}
                    src={dataImage3}
                    alt={dataTitle3}
                  />
                )}
              </div>
              <Content name={`Title 3`} />
              <Content name={`Content 3`} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
