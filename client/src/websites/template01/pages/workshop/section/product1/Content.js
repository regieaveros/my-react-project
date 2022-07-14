import React from "react";
import { Button } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import Icons from "../../../../../../global/Icons";
import useContents from "../../../../../../actions/cmscontent/useContents";

const Content = ({ name }) => {
  let dataName, dataTitle, dataContent;

  dataName = name;

  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

  if (isLoading) {
    console.log("");
  } else {
    const contentTitle = contents.filter(content => content._id === "60d7f7c1fdea672bcc7ca026");
    const content = contents.filter(content => content._id === "60d7f7fefdea672bcc7ca027");

    dataTitle = contentTitle[0].content;
    dataContent = content[0].content;
  }

  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  return (
    <>
      {dataName === "Title" && (
        <>
          {isLoading ? (
            <div className={classes.lineLayout}>
              <div className={classes.titleLineContainer1}>
                <Skeleton className={classes.titleLine1} />
              </div>
              <div className={classes.titleLineContainer2}>
                <Skeleton className={classes.titleLine2} />
              </div>
            </div>
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
            <div className={classes.contentBoxLayout}>
              <div className={classes.contentBoxContainer}>
                <Skeleton className={classes.contentBox} variant="rect" />
              </div>
            </div>
          ) : (
            <div className={classes.contentLayout}>
              <div className={classes.productContent}>
                {ReactHtmlParser(dataContent)}
              </div>
              <MuiThemeProvider theme={theme}>
                <div align="center">
                  <Button className={classes.productButton}>
                    View More
                    <span className="iconButton">
                      <Icons icon={`ArrowForward`} />
                    </span>
                  </Button>
                </div>
              </MuiThemeProvider>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Content;
