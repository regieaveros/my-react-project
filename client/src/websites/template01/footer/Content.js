import React from "react";
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataTitle1,
    dataTitle2,
    dataTitle3,
    dataContent1,
    dataContent2,
    dataContent3,
    dataCopyright,
    dataName;

  dataName = name;

  const { data: contents, isLoading } = useContents();

  if (isLoading) {

    console.log("");

  } else {

    const contentTitle1 = contents.filter(content => content._id === "60c7bfde1a4fad553ce27415");
    const contentTitle2 = contents.filter(content => content._id === "60c7c0261a4fad553ce27417");
    const contentTitle3 = contents.filter(content => content._id === "60c7c0a51a4fad553ce27419");

    const content1 = contents.filter(content => content._id === "60c7c0081a4fad553ce27416");
    const content2 = contents.filter(content => content._id === "60c7c0641a4fad553ce27418");
    const content3 = contents.filter(content => content._id === "60c7c0c41a4fad553ce2741a");

    const contentCopyright = contents.filter(content => content._id === "60c8576a0cf4001aa0b0f35b");

    dataTitle1 = contentTitle1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataTitle3 = contentTitle3[0].content;
    dataContent1 = content1[0].content;
    dataContent2 = content2[0].content;
    dataContent3 = content3[0].content;
    dataCopyright = contentCopyright[0].content;

  }

  const classes = useStyles();

  return (
    <>
      {dataName === "Title 1" && (
        <>
          {isLoading ? (
            <Typography style={{ width: 100 }} component="div" variant="h4">
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.footerInfoTitle}>
              {ReactHtmlParser(dataTitle1)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 2" && (
        <>
          {isLoading ? (
            <Typography style={{ width: 100 }} component="div" variant="h4">
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.footerInfoTitle}>
              {ReactHtmlParser(dataTitle2)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 3" && (
        <>
          {isLoading ? (
            <Typography style={{ width: 100 }} component="div" variant="h4">
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.footerInfoTitle}>
              {ReactHtmlParser(dataTitle3)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 1" && (
        <>
          {isLoading ? (
            <Typography style={{ width: 150 }} component="div" variant="body1">
              <Skeleton />
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.footerInfoText}>
              {ReactHtmlParser(dataContent1)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 2" && (
        <>
          {isLoading ? (
            <Typography style={{ width: 150 }} component="div" variant="body1">
              <Skeleton />
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.footerInfoText}>
              {ReactHtmlParser(dataContent2)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 3" && (
        <>
          {isLoading ? (
            <Typography style={{ width: 150 }} component="div" variant="body1">
              <Skeleton />
              <Skeleton />
            </Typography>
          ) : (
            <div className={classes.footerInfoText}>
              {ReactHtmlParser(dataContent3)}
            </div>
          )}
        </>
      )}
      {dataName === "Copyright" && (
        <>
          {isLoading ? (
            <div className={classes.footerCopyright}>
              <div style={{ padding: 19 }} align="center">
                <Typography
                  style={{ width: 600 }}
                  component="div"
                  variant="body1"
                >
                  <Skeleton />
                </Typography>
              </div>
            </div>
          ) : (
            <div className={classes.footerCopyright}>
              {ReactHtmlParser(dataCopyright)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
