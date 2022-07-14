import React from "react";
import { IconButton } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useStyles from "./styles";
import Icons from "../../../../../../global/Icons";
import useSocialMedia from "../../../../../../actions/template1/socialmedia/useSocialMedia";

const theme = createMuiTheme({
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: "#b69b74",
      },
    },
  },
});

const SocialMedia = () => {
  const { data: socialMedia, isLoading } = useSocialMedia();

  const classes = useStyles();

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton className={classes.circleSpacing} variant="circle" />
          <Skeleton className={classes.circleSpacing} variant="circle" />
          <Skeleton className={classes.circleSpacing} variant="circle" />
          <Skeleton className={classes.circleSpacing} variant="circle" />
          <Skeleton className={classes.lineLayout} />
        </>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            {socialMedia.map((list) => (
              <IconButton
                key={list._id}
                href={list.link}
                className={classes.socialMediaLayout}
              >
                <Icons icon={list.icon} />
              </IconButton>
            ))}
          </ThemeProvider>
          <div className={classes.aboutUsLineContainer}>
            <div className={classes.aboutUsLine} />
          </div>
        </>
      )}
    </>
  );
};

export default SocialMedia;
