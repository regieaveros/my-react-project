import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle, dataContent;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log();
  } else {
    const contentTitle = contents.filter(content => content._id === "60ccd3d92c003b7a400d343f");
    const content = contents.filter(content => content._id === "60ccd4012c003b7a400d3440");

    dataTitle = contentTitle[0].content;
    dataContent = content[0].content;
  }

  return (
    <>
      {dataName === "Title" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.titleLineContainer1}>
                <Skeleton className={classes.titleLine1} />
              </div>
              <div className={classes.titleLineContainer2}>
                <Skeleton className={classes.titleLine2} />
              </div>
            </>
          ) : (
            <div className={classes.productsTitle}>
              {ReactHtmlParser(dataTitle)}
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
            </>
          ) : (
            <div className={classes.productsContent}>
              {ReactHtmlParser(dataContent)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
