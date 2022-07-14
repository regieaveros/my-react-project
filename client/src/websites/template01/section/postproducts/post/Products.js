import React, { useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ReactHtmlParser from "react-html-parser";
import useStyles from "../styles";
import Icons from "../../../../../global/Icons";
import useProducts from "../../../../../actions/template1/products/useProducts";

const theme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: "rgb(232, 224, 213)",
      },
    },
  },
});

const Products = () => {
  const classes = useStyles();

  const { data: listProducts, isLoading } = useProducts();

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [origPrice, setOrigPrice] = useState("");
  const [pricePercent, setPricePercent] = useState("");

  const handleOpen = (data) => {
    setTitle(data.title);
    setContent(data.content);
    setImage(data.image);
    setPrice(data.price);
    setOrigPrice(data.originalPrice);
    setPricePercent(data.pricePercentage);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const ProductsContent = () => {
    return (
      <Fade in={show}>
        <div className={classes.paperLayout}>
          <Box display="flex" flexDirection="row-reverse">
            <IconButton
              className={classes.modalClose}
              onClick={handleClose}
              disableTouchRipple
            >
              <Icons icon={`Close`} />
            </IconButton>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div style={{ position: "relative", display: "block" }}>
                <img
                  className={classes.productImageModal}
                  src={image}
                  alt={title}
                />
                {pricePercent === "0" ? (
                  <></>
                ) : (
                  <Typography
                    className={classes.postProductsPricePercent}
                    component="span"
                  >
                    -{pricePercent}%
                  </Typography>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={classes.productContentModal}>
                <Typography
                  className={classes.postProductsTitle}
                  gutterBottom
                  variant="h4"
                >
                  {title}
                </Typography>
                <Typography
                  className={classes.postProductsPrice}
                  gutterBottom
                  component="span"
                >
                  ${price}
                </Typography>
                {origPrice === price ? (
                  <></>
                ) : (
                  <Typography
                    className={classes.postProductsOrigPrice}
                    gutterBottom
                    component="span"
                  >
                    ${origPrice}
                  </Typography>
                )}
                <hr className={classes.lineLayout} />
                <div className={classes.contentBody}>
                  {ReactHtmlParser(content)}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    );
  };

  return (
    <>
      <Grid
        className={classes.productImageContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {isLoading ? (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={classes.productsSkeletonLayout}>
                <Skeleton
                  className={classes.productsImageSkeleton}
                  variant="rect"
                />
                <Skeleton className={classes.productsTitleLine} />
                <Skeleton className={classes.productsPriceLine} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={classes.productsSkeletonLayout}>
                <Skeleton
                  className={classes.productsImageSkeleton}
                  variant="rect"
                />
                <Skeleton className={classes.productsTitleLine} />
                <Skeleton className={classes.productsPriceLine} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={classes.productsSkeletonLayout}>
                <Skeleton
                  className={classes.productsImageSkeleton}
                  variant="rect"
                />
                <Skeleton className={classes.productsTitleLine} />
                <Skeleton className={classes.productsPriceLine} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={classes.productsSkeletonLayout}>
                <Skeleton
                  className={classes.productsImageSkeleton}
                  variant="rect"
                />
                <Skeleton className={classes.productsTitleLine} />
                <Skeleton className={classes.productsPriceLine} />
              </div>
            </Grid>
          </>
        ) : (
          <>
            {listProducts.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                <ThemeProvider theme={theme}>
                  <Card className={classes.postProductsCard}>
                    <CardActionArea
                      className={classes.postProductsCardButton}
                      onClick={() => handleOpen(product)}
                    >
                      <CardMedia
                        component="img"
                        alt="Wooden Craft"
                        height="100%"
                        image={product.image}
                      />
                      {product.pricePercentage === "0" ? (
                        <></>
                      ) : (
                        <Typography
                          className={classes.postProductsPricePercent}
                          component="span"
                        >
                          -{product.pricePercentage}%
                        </Typography>
                      )}
                      <CardContent>
                        <Typography
                          className={classes.postProductsTitle}
                          gutterBottom
                          variant="h4"
                        >
                          {product.title}
                        </Typography>
                        <Typography
                          className={classes.postProductsPrice}
                          gutterBottom
                          component="span"
                        >
                          ${product.price}
                        </Typography>
                        {product.price === product.originalPrice ? (
                          <></>
                        ) : (
                          <Typography
                            className={classes.postProductsOrigPrice}
                            gutterBottom
                            component="span"
                          >
                            ${product.originalPrice}
                          </Typography>
                        )}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </ThemeProvider>
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Modal
        aria-labelledby="wood-product-title"
        aria-describedby="wood-product-content"
        className={classes.modalLayout}
        open={show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {ProductsContent()}
      </Modal>
    </>
  );
};

export default Products;
