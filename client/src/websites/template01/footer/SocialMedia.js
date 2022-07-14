import React from "react";
import { IconButton } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import useSocialMedia from "../../../actions/template1/socialmedia/useSocialMedia";

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
    <div className={classes.footerSocialMedia}>
      {isLoading ? (
        <div align="center">
          <Skeleton
            className={classes.footerSpacing}
            variant="circle"
            width={40}
            height={40}
          />
          <Skeleton
            className={classes.footerSpacing}
            variant="circle"
            width={40}
            height={40}
          />
          <Skeleton
            className={classes.footerSpacing}
            variant="circle"
            width={40}
            height={40}
          />
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          {socialMedia.map((list) => (
            <div
              key={list._id}
              className={classes.footerSpacing}
              align="center"
            >
              <IconButton
                href={list.link}
                className={classes.socialMediaLayout}
              >
                <Icons icon={list.icon} />
              </IconButton>
            </div>
          ))}
        </ThemeProvider>
      )}
      <div align="center">
        <div className={classes.footerLine} />
      </div>
    </div>
  );
};

export default SocialMedia;
