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
    const contentTitle1 = contents.filter(content => content._id === "60dd842f861d5d0f30329b13");
    const contentTitle2 = contents.filter(content => content._id === "60dd8496861d5d0f30329b15");
    const contentTitle3 = contents.filter(content => content._id === "60dd84d0861d5d0f30329b17");

    const content1 = contents.filter(content => content._id === "60dd8466861d5d0f30329b14");
    const content2 = contents.filter(content => content._id === "60dd84ae861d5d0f30329b16");
    const content3 = contents.filter(content => content._id === "60dd84e4861d5d0f30329b18");

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
            <>
              <div className={classes.title1Container1}>
                <Skeleton className={classes.title1Line1} />
              </div>
              <div className={classes.title1Container2}>
                <Skeleton className={classes.title1Line2} />
              </div>
            </>
          ) : (
            <div className={classes.productTitle1}>
              {ReactHtmlParser(dataTitle1)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 1" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.content1Container1}>
                <Skeleton className={classes.content1Line1} />
              </div>
              <div className={classes.content1Container2}>
                <Skeleton className={classes.content1Line2} />
              </div>
            </>
          ) : (
            <div className={classes.productContent1}>
              {ReactHtmlParser(dataContent1)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 2" && (
        <>
          {isLoading ? (
            <div className={classes.titleLayoutContainer}>
              <Skeleton className={classes.titleLayoutLine} />
            </div>
          ) : (
            <div className={classes.productTitle2}>
              {ReactHtmlParser(dataTitle2)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 2" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.contentLayoutContainer1}>
                <Skeleton className={classes.contentLayoutLine1} />
              </div>
              <div className={classes.contentLayoutContainer2}>
                <Skeleton className={classes.contentLayoutLine2} />
              </div>
              <div className={classes.contentLayoutContainer3}>
                <Skeleton className={classes.contentLayoutLine3} />
              </div>
              <div className={classes.contentLayoutContainer4}>
                <Skeleton className={classes.contentLayoutLine4} />
              </div>
              <div className={classes.contentLayoutContainer5}>
                <Skeleton className={classes.contentLayoutLine5} />
              </div>
            </>
          ) : (
            <div className={classes.productContent2}>
              {ReactHtmlParser(dataContent2)}
            </div>
          )}
        </>
      )}
      {dataName === "Title 3" && (
        <>
          {isLoading ? (
            <div className={classes.titleLayoutContainer}>
              <Skeleton className={classes.titleLayoutLine} />
            </div>
          ) : (
            <div className={classes.productTitle3}>
              {ReactHtmlParser(dataTitle3)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 3" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.contentLayoutContainer1}>
                <Skeleton className={classes.contentLayoutLine1} />
              </div>
              <div className={classes.contentLayoutContainer2}>
                <Skeleton className={classes.contentLayoutLine2} />
              </div>
              <div className={classes.contentLayoutContainer3}>
                <Skeleton className={classes.contentLayoutLine3} />
              </div>
              <div className={classes.contentLayoutContainer4}>
                <Skeleton className={classes.contentLayoutLine4} />
              </div>
              <div className={classes.contentLayoutContainer5}>
                <Skeleton className={classes.contentLayoutLine5} />
              </div>
            </>
          ) : (
            <div className={classes.productContent3}>
              {ReactHtmlParser(dataContent3)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
