import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle, dataContent, dataDescription1, dataDescription2;

  const classes = useStyles();

  dataName = name;

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle = contents.filter(content => content._id === "60cad7116eacf763a03f4629");
    const content = contents.filter(content => content._id === "60cad74a6eacf763a03f462a");
    const contentDescription1 = contents.filter(content => content._id === "60cad8196eacf763a03f462b");
    const contentDescription2 = contents.filter(content => content._id === "60cad84f6eacf763a03f462c");

    dataTitle = contentTitle[0].content;
    dataContent = content[0].content;
    dataDescription1 = contentDescription1[0].content;
    dataDescription2 = contentDescription2[0].content;
  }

  return (
    <>
      {dataName === "Title" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.productsTitleSkeleton1}>
                <Skeleton width="100%" height={40} />
              </div>
              <div className={classes.productsTitleSkeleton2}>
                <Skeleton width="100%" height={40} />
              </div>
            </>
          ) : (
            <div className={classes.productTitle}>
              {ReactHtmlParser(dataTitle)}
            </div>
          )}
        </>
      )}
      {dataName === "Content" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.productsContentSkeleton1}>
                <Skeleton width="100%" height={25} />
              </div>
              <div className={classes.productsContentSkeleton2}>
                <Skeleton width="100%" height={25} />
              </div>
              <div className={classes.productsContentSkeleton3}>
                <Skeleton width="100%" height={25} />
              </div>
            </>
          ) : (
            <div className={classes.productsContent}>
              {ReactHtmlParser(dataContent)}
            </div>
          )}
        </>
      )}
      {dataName === "Description 1" && (
        <>
          {isLoading ? (
            <div className={classes.productsDescSkeleton1}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <div className={classes.productInfoList01}>
              {ReactHtmlParser(dataDescription1)}
            </div>
          )}
        </>
      )}
      {dataName === "Description 2" && (
        <>
          {isLoading ? (
            <div className={classes.productsDescSkeleton2}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <div className={classes.productInfoList02}>
              {ReactHtmlParser(dataDescription2)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
