import React, { useRef } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import useStyles from "./styles";
import Icons from "../../../../global/Icons";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.scss";
import useSlider from "../../../../actions/template1/slider/useSlider";
import Products from "./post/Products";

SwiperCore.use([Navigation, Autoplay]);

const theme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: "rgb(232, 224, 213)",
      },
    },
  },
});

const PostProducts = () => {
  const classes = useStyles();
  const swiperRef = useRef(null);

  const { data: sliders, isLoading } = useSlider();

  return (
    <div className={classes.postProductsLayout}>
      <div align="center">
        {isLoading ? (
          <>
            <Skeleton className={classes.swiperBoxWatermark} variant="rect" />
            <Skeleton className={classes.swiperTitleLine} />
            <Skeleton className={classes.swiperContentLine1} />
            <Skeleton className={classes.swiperContentLine2} />
            <Skeleton className={classes.swiperContentLine3} />
            <Skeleton className={classes.swiperContentLine4} />
          </>
        ) : (
          <Swiper
            className={classes.swiperLayout}
            loop={true}
            ref={swiperRef}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {sliders.map((slider) => (
              <SwiperSlide key={slider._id}>
                <img
                  className={classes.watermarksImage}
                  src={slider.watermark}
                  alt={slider.title}
                />
                <Typography className={classes.carouselTitle} variant="h3">
                  {slider.title}
                </Typography>
                <div className={classes.carouselContent}>
                  {ReactHtmlParser(slider.content)}
                </div>
              </SwiperSlide>
            ))}
            <ThemeProvider theme={theme}>
              <Grid
                className={classes.swiperButtonContainer}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <IconButton
                    className={classNames(
                      classes.swiperButtonStyle,
                      classes.swiperButtonLeft,
                    )}
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                  >
                    <Icons icon={`ChevronLeft`} />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  <IconButton
                    className={classNames(
                      classes.swiperButtonStyle,
                      classes.swiperButtonRight,
                    )}
                    onClick={() => swiperRef.current.swiper.slideNext()}
                  >
                    <Icons icon={`ChevronRight`} />
                  </IconButton>
                </Grid>
              </Grid>
            </ThemeProvider>
          </Swiper>
        )}
      </div>
      <Products />
    </div>
  );
};

export default PostProducts;
