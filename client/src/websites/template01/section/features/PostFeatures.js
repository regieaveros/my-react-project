import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Icons from "../../../../global/Icons";
import useStyles from "./styles";
import ReactHtmlParser from "react-html-parser";
import useFeatures from "../../../../actions/template1/features/useFeatures";

const PostFeatures = () => {
  const { data: features, isLoading } = useFeatures();

  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.featurePostLayout}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {isLoading ? (
          <>
            <Grid
              className={classes.featurePostContainer}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <Box p={0.5}>
                <Skeleton variant="rect" width="100%" height={200} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
            <Grid
              className={classes.featurePostContainer}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <Box p={0.5}>
                <Skeleton variant="rect" width="100%" height={200} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
            <Grid
              className={classes.featurePostContainer}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <Box p={0.5}>
                <Skeleton variant="rect" width="100%" height={200} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          </>
        ) : (
          <>
            {features.map((feature) => (
              <Grid
                key={feature._id}
                className={classes.featurePostContainer}
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
              >
                <div className={classes.featureImageContainer}>
                  <img
                    className="featurePostImage"
                    src={feature.image}
                    alt="FeaturePostImage"
                  />
                </div>
                <Typography className={classes.featureTitle} variant="h2">
                  {feature.title}
                </Typography>
                <div className={classes.featurePostInfo}>
                  {ReactHtmlParser(feature.content)}
                </div>
                <div className={classes.featureLink}>
                  <Button
                    className={classes.linkStyle}
                    disableRipple
                    size="large"
                  >
                    View More
                    <span className="featureButtonIcon">
                      <Icons icon={`ArrowForward`} />
                    </span>
                  </Button>
                </div>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default PostFeatures;
