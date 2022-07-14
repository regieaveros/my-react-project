import React from "react";
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle, dataContent;

  const classes = useStyles();

  dataName = name;

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle = contents.filter(content => content._id === "60c8efa2d33c9f242cbfd64d");
    const content = contents.filter(content => content._id === "60c8f0b9d33c9f242cbfd64e");
    
    dataTitle = contentTitle[0].content;
    dataContent = content[0].content;
  }

  return (
    <>
      {dataName === "Title" && (
        <>
          {isLoading ? (
            <Typography className={classes.skeletonTitleLine} variant="h1">
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.heroTitle}>
              {ReactHtmlParser(dataTitle)}
            </div>
          )}
        </>
      )}

      {dataName === "Content" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.skeletonContentLine1}>
                <Skeleton />
              </div>
              <div className={classes.skeletonContentLine2}>
                <Skeleton />
              </div>
              <div className={classes.skeletonContentLine3}>
                <Skeleton />
              </div>
              <div className={classes.skeletonContentLine4}>
                <Skeleton />
              </div>
            </>
          ) : (
            <div className={classes.heroTextInfo}>
              {ReactHtmlParser(dataContent)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
