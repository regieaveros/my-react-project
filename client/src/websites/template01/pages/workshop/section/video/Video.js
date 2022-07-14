import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  IconButton,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import Content from "./Content";
import Icons from "../../../../../../global/Icons";
import useImages from "../../../../../../actions/cmsimage/useImages";

const Video = () => {
  let dataImage1, dataImage2;

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [dataVideoFrame, setDataVideoFrame] = useState("");

  const handleOpen = (data) => {
    setOpen(true);
    setDataVideoFrame(data.videoFrame);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { data: images, isLoading } = useImages();

  if (isLoading) {
    console.log("");
  } else {
    const image1 = images.filter(image => image._id === "60e94bef272de12f7cda3df0");
    const image2 = images.filter(image => image._id === "60e94c49272de12f7cda3df1");

    dataImage1 = image1[0].image;
    dataImage2 = image2[0].image;
  }

  const dataVideos = [
    {
      id: 1,
      background: dataImage1,
      title: <Content name={`Title 2`} />,
      videoFrame: <Content name={`Frame 1`} />,
    },
    {
      id: 2,
      background: dataImage2,
      title: <Content name={`Title 3`} />,
      videoFrame: <Content name={`Frame 2`} />,
    },
  ];

  return (
    <div className={classes.videoLayout}>
      <Container maxWidth="xl">
        <Content name={`Title 1`} />
        <Grid container>
          {dataVideos ? (
            <>
              {dataVideos.map((frame) => (
                <Grid key={frame.id} item xs={12} sm={6} md={6} lg={6}>
                  <div className={classes.frameLayout}>
                    <div
                      style={{ backgroundImage: `url(${frame.background})` }}
                      className={classes.videoFrame}
                    >
                      <div className="imageOverlay" />
                      <IconButton
                        className={classes.videoButton}
                        onClick={() => handleOpen(frame)}
                      >
                        <Icons icon={`PlayCircleOutline`} />
                      </IconButton>
                    </div>
                    <div className={classes.contentLayout}>
                      {frame.title}
                      <div className={classes.buttonLayout}>
                        <Button disableRipple className={classes.linkButton}>
                          View More
                          <span className="linkButtonIcon">
                            <Icons icon={`ArrowForward`} />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              ))}
            </>
          ) : (
            <>
              <Grid
                className={classes.videoFrameBox}
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
              >
                <Skeleton variant="rect" className={classes.videoBox} />
                <div className={classes.titleVideoLineContainer}>
                  <Skeleton className={classes.titleVideoLine} />
                </div>
                <div className={classes.linkBoxContainer}>
                  <Skeleton variant="rect" className={classes.linkBox} />
                </div>
              </Grid>
              <Grid
                className={classes.videoFrameBox}
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
              >
                <Skeleton variant="rect" className={classes.videoBox} />
                <div className={classes.titleVideoLineContainer}>
                  <Skeleton className={classes.titleVideoLine} />
                </div>
                <div className={classes.linkBoxContainer}>
                  <Skeleton variant="rect" className={classes.linkBox} />
                </div>
              </Grid>
            </>
          )}
        </Grid>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.overlay}>
              <IconButton className={classes.modalClose} onClick={handleClose}>
                <Icons icon={`Close`} />
              </IconButton>
              {dataVideoFrame ? <>{dataVideoFrame}</> : ``}
            </div>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
};

export default Video;
