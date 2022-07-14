import React from 'react';
import { Container, Grid } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import classNames from "classnames";
import Icons from "../../../../global/Icons";
import useStyles from "./styles";
import useContents from "../../../../actions/cmscontent/useContents";
import useBestServices from "../../../../actions/template2/best_services/useBestServices";

const BestServices = () => {

  let dataTitle;

  const classes = useStyles();

  const contents = useContents().data;
  const contentsLoading = useContents().isLoading;
  const bestServices = useBestServices().data;
  const bestServicesLoading = useBestServices().isLoading;

  if(contentsLoading) {
    console.log("");
  } else {
    const contentTitle = contents.filter(content => content._id === "62b29ff25ef7b326409f798b");
    
    dataTitle = contentTitle[0].content;
  }


  return (
    <div id="best-services" className={classes.bestServicesLayout}>
      <Container maxWidth="lg">
        <div className={classes.bestServicesTitle}>
          {ReactHtmlParser(dataTitle)}
        </div>
        <div className={classes.contentsLayout}>
          <Grid container spacing={3}>
            {bestServicesLoading ? (
                <></>
              ) : (
                <>
                  {bestServices.map((bestService) => (
                    <Grid key={bestService._id} item xs={12} sm={6} md={3} lg={3}>
                      <div className={classNames(classes.bestServicesContents)}>
                        <div className="bestServicesIcon">
                          <Icons icon={bestService.icon} />
                        </div>
                        <h4>
                          {ReactHtmlParser(bestService.name)}
                        </h4>
                        {ReactHtmlParser(bestService.content)}
                      </div>
                    </Grid>
                  ))}
                </>
              )
            }
          </Grid>
        </div>
      </Container> 
    </div>
  )
}

export default BestServices;