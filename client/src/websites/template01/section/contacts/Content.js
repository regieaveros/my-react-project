import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle1, dataTitle2, dataContent, dataContactInfo;

  const classes = useStyles();

  dataName = name;

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle1 = contents.filter(content => content._id === "60cf72eef345c06e946bd6a5");
    const contentTitle2 = contents.filter(content => content._id === "60cf7314f345c06e946bd6a6");
    const content = contents.filter(content => content._id === "60cf732cf345c06e946bd6a7");
    const contentContactInfo = contents.filter(content => content._id === "60cf73a9f345c06e946bd6a8");

    dataTitle1 = contentTitle1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataContent = content[0].content;
    dataContactInfo = contentContactInfo[0].content;
  }

  return (
    <>
      {dataName === "Title 1" && (
        <>
          {isLoading ? (
            <div className={classes.titleLineContainer1}>
              <Skeleton className={classes.titleLine1} />
            </div>
          ) : (
            <div className={classes.contactTitle1}>
              {ReactHtmlParser(dataTitle1)}
            </div>
          )}
        </>
      )}
      {dataName === "Map" && (
        <>
          {isLoading ? (
            <Skeleton className={classes.imageBox} variant="rect" />
          ) : (
            <div className={classes.mapContainer}>
              <iframe
                className={classes.mapLayout}
                title="New York Place"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.626490630832!2d-73.98729598463392!3d40.74824357932792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1624206461255!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          )}
        </>
      )}
      {dataName === "Title 2" && (
        <>
          {isLoading ? (
            <div className={classes.titleLineContainer2}>
              <Skeleton className={classes.titleLine2} />
            </div>
          ) : (
            <div className={classes.contactTitle2}>
              {ReactHtmlParser(dataTitle2)}
            </div>
          )}
        </>
      )}
      {dataName === "Content" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.contentContainer1}>
                <Skeleton className={classes.contentLine1} />
              </div>
              <div className={classes.contentContainer2}>
                <Skeleton className={classes.contentLine2} />
              </div>
              <div className={classes.contentContainer3}>
                <Skeleton className={classes.contentLine3} />
              </div>
            </>
          ) : (
            <div className={classes.contactContent}>
              {ReactHtmlParser(dataContent)}
            </div>
          )}
        </>
      )}
      {dataName === "Contact Info" && (
        <>
          {isLoading ? (
            <>
              <div className={classes.infoLinesSpacing}>
                <div className={classes.infoContainer1}>
                  <Skeleton className={classes.infoLine1} />
                </div>
                <div className={classes.infoContainer2}>
                  <Skeleton className={classes.infoLine2} />
                </div>
              </div>
              <div className={classes.infoLinesSpacing}>
                <div className={classes.infoContainer1}>
                  <Skeleton className={classes.infoLine1} />
                </div>
                <div className={classes.infoContainer2}>
                  <Skeleton className={classes.infoLine2} />
                </div>
              </div>
              <div className={classes.infoLinesSpacing}>
                <div className={classes.infoContainer1}>
                  <Skeleton className={classes.infoLine1} />
                </div>
                <div className={classes.infoContainer2}>
                  <Skeleton className={classes.infoLine2} />
                </div>
              </div>
            </>
          ) : (
            <div className={classes.contactInfo}>
              {ReactHtmlParser(dataContactInfo)}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
