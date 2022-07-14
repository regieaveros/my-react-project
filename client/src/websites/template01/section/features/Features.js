import React from "react";
import useStyles from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import { Typography } from "@material-ui/core";
import useContents from "../../../../actions/cmscontent/useContents";
import PostFeatures from "./PostFeatures";

const Features = () => {
  let dataTitle, dataContent;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle = contents.filter(content => content._id === "60ca30647598693404077f9e");
    const content = contents.filter(content => content._id === "60ca30887598693404077f9f");

    dataTitle = contentTitle[0].content;
    dataContent = content[0].content;
  }

  return (
    <div id="features" className={classes.featuresLayout}>
      <div align="center">
        {isLoading ? (
          <Typography className={classes.featureTitleSkeleton} variant="h2">
            <Skeleton />
          </Typography>
        ) : (
          <div className={classes.featureTitle}>
            {ReactHtmlParser(dataTitle)}
          </div>
        )}
        <div className={classes.featureInfoContainer}>
          {isLoading ? (
            <Typography variant="body1">
              <Skeleton width="80%" />
              <Skeleton width="70%" />
              <Skeleton width="60%" />
            </Typography>
          ) : (
            <div className={classes.featureInfo}>
              {ReactHtmlParser(dataContent)}
            </div>
          )}
        </div>
      </div>
      <PostFeatures />
    </div>
  );
};

export default Features;
