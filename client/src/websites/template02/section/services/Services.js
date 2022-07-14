import React from "react";
import { Container, Button } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import PostServices from "./PostServices";

const Services = () => {

  let dataHeading, dataContent;

  const classes = useStyles();
  const contents = useContents();

  const contentsData = contents.data;
  const contentsLoading = contents.isLoading;

  if(contentsLoading){
    console.log("");
  } else {
    const contentHeading = contentsData.filter(content => content._id === "62a2f39be81f3633306af301");
    const content = contentsData.filter(content => content._id === "62a2fc71e81f3633306af302");

    dataHeading = contentHeading[0].content;
    dataContent = content[0].content;
  }

  return (
    <div id="services" className={classes.servicesLayout}>
      <Container maxWidth="lg">
        <div className={classes.servicesStyleLayout}>
          <div>
            <div className={classes.servicesLine}>&nbsp;</div>
            <div className={classes.contentStyle}>
              {ReactHtmlParser(dataHeading)}
              {ReactHtmlParser(dataContent)}
            </div>
          </div>
          <div>
          <Button className={classes.serviceButton} disableRipple>
            View All
            <span className="serviceButtonStyle"></span>
          </Button>
          </div>
        </div>
        <PostServices />
      </Container>
    </div>
  );
};

export default Services;  
