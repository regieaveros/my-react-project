import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName,
    dataTitle1,
    dataTitle2,
    dataTitle3,
    dataContent1,
    dataContent2,
    dataContent3;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle1 = contents.filter(content => content._id === "60db379ae3eb5c7bfc48fafe");
    const contentTitle2 = contents.filter(content => content._id === "60db3837e3eb5c7bfc48fb00");
    const contentTitle3 = contents.filter(content => content._id === "60db3873e3eb5c7bfc48fb02");

    const content1 = contents.filter(content => content._id === "60db37c6e3eb5c7bfc48faff");
    const content2 = contents.filter(content => content._id === "60db3851e3eb5c7bfc48fb01");
    const content3 = contents.filter(content => content._id === "60db38a4e3eb5c7bfc48fb03");

    dataTitle1 = contentTitle1[0].content;
    dataContent1 = content1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataContent2 = content2[0].content;
    dataTitle3 = contentTitle3[0].content;
    dataContent3 = content3[0].content;
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
            <div className={classes.productTitle}>
              {ReactHtmlParser(dataTitle1)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 1" && (
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
            </>
          ) : (
            <div className={classes.productContent}>
              {ReactHtmlParser(dataContent1)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 2" && (
        <>
          {isLoading ? (
            <div className={classes.titleLineContainer}>
              <Skeleton className={classes.titleLine} />
            </div>
          ) : (
            <div className={classes.productTitle}>
              {ReactHtmlParser(dataTitle2)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 2" && (
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
            </>
          ) : (
            <div className={classes.productContent}>
              {ReactHtmlParser(dataContent2)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 3" && (
        <>
          {isLoading ? (
            <div className={classes.titleLineContainer}>
              <Skeleton className={classes.titleLine} />
            </div>
          ) : (
            <div className={classes.productTitle}>
              {ReactHtmlParser(dataTitle3)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 3" && (
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
            </>
          ) : (
            <div className={classes.productContent}>
              {ReactHtmlParser(dataContent3)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
