import React from "react";
import { Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import SocialMedia from "./SocialMedia";
import useContents from "../../../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle1, dataTitle2, dataContent;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle1 = contents.filter(content => content._id === "60d5aa3c4ec7b46060ce9692");
    const contentTitle2 = contents.filter(content => content._id === "60d5aac44ec7b46060ce9694");
    const content = contents.filter(content => content._id === "60d5aa7f4ec7b46060ce9693");

    dataTitle1 = contentTitle1[0].content;
    dataContent = content[0].content;
    dataTitle2 = contentTitle2[0].content;
  }

  return (
    <>
      {dataName === "Title 1" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.title1LineContainer1}>
                <Skeleton className={classes.title1Line1} />
              </div>
              <div className={classes.title1LineContainer2}>
                <Skeleton className={classes.title1Line2} />
              </div>
            </>
          ) : (
            <div className={classes.aboutUsTitle1}>
              {ReactHtmlParser(dataTitle1)}
            </div>
          )}
        </>
      )}
      {dataName === "Content" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.contentLineContainer1}>
                <Skeleton className={classes.contentLine1} />
              </div>
              <div className={classes.contentLineContainer2}>
                <Skeleton className={classes.contentLine2} />
              </div>
              <div className={classes.contentLineContainer3}>
                <Skeleton className={classes.contentLine3} />
              </div>
              <div className={classes.contentLineContainer4}>
                <Skeleton className={classes.contentLine4} />
              </div>
              <div className={classes.buttonBoxContainer}>
                <Skeleton variant="rect" className={classes.buttonBox} />
              </div>
            </>
          ) : (
            <>
              <div className={classes.aboutUsContent}>
                {ReactHtmlParser(dataContent)}
              </div>
              <div className={classes.buttonContainer}>
                <Button className={classes.aboutUsButton}>READ MORE</Button>
              </div>
            </>
          )}
        </>
      )}
      {dataName === "Title 2" && (
        <>
          {isLoading ? (
            <>
              <SocialMedia />
              <div className={classes.title2LineContainer}>
                <Skeleton className={classes.title2Line} />
              </div>
            </>
          ) : (
            <>
              <SocialMedia />
              <div className={classes.title2Container}>
                <div className={classes.aboutUsTitle2}>
                  {ReactHtmlParser(dataTitle2)}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Content;
