import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import Icons from "../../../../../../global/Icons";
import useFeatures from "../../../../../../actions/template1/features/useFeatures";

const PostFeatures = () => {
  const classes = useStyles();

  const { data: features, isLoading } = useFeatures();

  const theme = createMuiTheme({
    overrides: {
      MuiAccordionSummary: {
        expandIcon: {
          transition: "all 0.3s",
          "&$expanded": {
            transform: "rotate(45deg)",
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiIconButton: {
        root: {
          fontSize: 40,
          color: "rgb(182, 155, 116)",
        },
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  return (
    <>
      {isLoading ? (
        <div className={classes.accordionLineContainer}>
          <Skeleton className={classes.accordionLine} />
          <Skeleton className={classes.accordionLine} />
          <Skeleton className={classes.accordionLine} />
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          {features.map((feature) => (
            <Accordion key={feature._id} className={classes.accordionLayout}>
              <AccordionSummary
                className={classes.accordionSummaryLayout}
                expandIcon={<Icons className="accordionIcon" icon={`Add`} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.accordionTitle} variant="h4">
                  {feature.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionContent}>
                {ReactHtmlParser(feature.content)}
              </AccordionDetails>
            </Accordion>
          ))}
        </ThemeProvider>
      )}
    </>
  );
};

export default PostFeatures;
