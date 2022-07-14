import React from "react";
import { CircularProgress } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle1, dataTitle2, dataTitle3, dataFrame1, dataFrame2;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle1 = contents.filter(content => content._id === "60e5de2c98d2b631207d23f7");
    const contentTitle2 = contents.filter(content => content._id === "60e5de4c98d2b631207d23f8");
    const contentTitle3 = contents.filter(content => content._id === "60e5de8998d2b631207d23f9");

    const contentFrame1 = contents.filter(content => content._id === "60e5ded398d2b631207d23fa");
    const contentFrame2 = contents.filter(content => content._id === "60e5df0298d2b631207d23fb");

    dataTitle1 = contentTitle1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataTitle3 = contentTitle3[0].content;
    dataFrame1 = contentFrame1[0].content;
    dataFrame2 = contentFrame2[0].content;
  }

  return (
    <>
      {dataName === "Title 1" && (
        <>
          {isLoading ? (
            <div className={classes.titleLineContainer}>
              <Skeleton className={classes.titleLine} />
            </div>
          ) : (
            <div className={classes.videoTitle1}>
              {ReactHtmlParser(dataTitle1)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 2" && (
        <>
          {isLoading ? (
            ``
          ) : (
            <div className={classes.videoFrameTitle}>
              {ReactHtmlParser(dataTitle2)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 3" && (
        <>
          {isLoading ? (
            ``
          ) : (
            <div className={classes.videoFrameTitle}>
              {ReactHtmlParser(dataTitle3)}
            </div>
          )}
        </>
      )}
      {dataName === "Frame 1" && (
        <>
          {isLoading ? (
            <CircularProgress className={classes.videoLoading} />
          ) : (
            <div>{ReactHtmlParser(dataFrame1)}</div>
          )}
        </>
      )}
      {dataName === "Frame 2" && (
        <>
          {isLoading ? (
            <CircularProgress className={classes.videoLoading} />
          ) : (
            <div>{ReactHtmlParser(dataFrame2)}</div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
