import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName,
    dataTitle1,
    dataTitle2,
    dataContent1,
    dataContent2,
    dataDescription;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
  } else {
    const contentTitle1 = contents.filter(content => content._id === "60ce06782721336d10dc3d02");
    const contentTitle2 = contents.filter(content => content._id === "60ce06e02721336d10dc3d04");
    const contentDescription = contents.filter(content => content._id === "60ce093a2721336d10dc3d05");
    const content1 = contents.filter(content => content._id === "60ce06ad2721336d10dc3d03");
    const content2 = contents.filter(content => content._id === "60ce098a2721336d10dc3d06");

    dataTitle1 = contentTitle1[0].content;
    dataContent1 = content1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataDescription = contentDescription[0].content;
    dataContent2 = content2[0].content;
  }

  return (
    <>
      {dataName === "Title 1" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.productTitle1Container1}>
                <Skeleton className={classes.productTitle1Line1} />
              </div>
              <div className={classes.productTitle1Container2}>
                <Skeleton className={classes.productTitle1Line2} />
              </div>
              <div className={classes.productTitle1Container3}>
                <Skeleton className={classes.productTitle1Line3} />
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
              <div className={classes.productContent1Container1}>
                <Skeleton className={classes.productContent1Line1} />
              </div>
              <div className={classes.productContent1Container2}>
                <Skeleton className={classes.productContent1Line2} />
              </div>
              <div className={classes.productContent1Container3}>
                <Skeleton className={classes.productContent1Line3} />
              </div>
              <div className={classes.productContent1Container4}>
                <Skeleton className={classes.productContent1Line4} />
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
            <div className={classes.productTitle2Container}>
              <Skeleton className={classes.productTitle2Line} />
            </div>
          ) : (
            <div className={classes.productTitle2}>
              {ReactHtmlParser(dataTitle2)}
            </div>
          )}
        </>
      )}
      {dataName === "Description" && (
        <>
          {isLoading ? (
            <div className={classes.productDescContainer}>
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
              <Skeleton className={classes.productDescLine} />
            </div>
          ) : (
            <div className={classes.productDescription}>
              {ReactHtmlParser(dataDescription)}
            </div>
          )}
        </>
      )}
      {dataName === "Content 2" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.productContent2Container1}>
                <Skeleton className={classes.productContent2Line1} />
              </div>
              <div className={classes.productContent2Container2}>
                <Skeleton className={classes.productContent2Line2} />
              </div>
              <div className={classes.productContent2Container3}>
                <Skeleton className={classes.productContent2Line3} />
              </div>
              <div className={classes.productContent2Container4}>
                <Skeleton className={classes.productContent2Line4} />
              </div>
            </>
          ) : (
            <div className={classes.productContent2}>
              {ReactHtmlParser(dataContent2)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
