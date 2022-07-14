import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle, dataContent;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle = contents.filter(content => content._id === "60e16ab54a0c186c68580a57");
    const content = contents.filter(content => content._id === "60e16b2a4a0c186c68580a58");

    dataTitle = contentTitle[0].content;
    dataContent = content[0].content;
  }

  return (
    <>
      {dataName === "Title" && (
        <>
          {isLoading ? (
            <div className={classes.titleLineContainer}>
              <Skeleton className={classes.titleLine} />
            </div>
          ) : (
            <div className={classes.teamTitle}>
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
                <Skeleton className={classes.contentLine} />
              </div>
              <div className={classes.contentLineContainer2}>
                <Skeleton className={classes.contentLine} />
              </div>
              <div className={classes.contentLineContainer3}>
                <Skeleton className={classes.contentLine} />
              </div>
              <div className={classes.contentLineContainer4}>
                <Skeleton className={classes.contentLine} />
              </div>
            </>
          ) : (
            <div className={classes.teamContent}>
              {ReactHtmlParser(dataContent)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
