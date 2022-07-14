import {
  Grid,
  Box,
  Modal,
  Backdrop,
  IconButton,
  Fade,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import classNames from "classnames";
import Icons from "../../global/Icons";
import React from "react";

const Form = ({
  open,
  handleClose,
  formTitle,
  globalForm,
  formWidth,
  isMode,
  onDelete,
  isLoading,
  id,
}) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
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
          {isMode === "Delete" ? (
            <div className={classes.paperSmall}>
              <h3 align="center" id="transition-modal-title">
                Do you want to remove this data?
              </h3>
              <Grid container>
                <Grid align="center" item xs={6}>
                  {isLoading ? (
                    <CircularProgress size={26} />
                  ) : (
                    <IconButton
                      onClick={() => onDelete(id)}
                      variant="contained"
                      color="primary"
                      className={classes.lgIconSize}
                    >
                      <Icons icon={`Done`} />
                    </IconButton>
                  )}
                </Grid>
                <Grid align="center" item xs={6}>
                  <IconButton
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                    className={classes.lgIconSize}
                  >
                    <Icons icon={`Close`} />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div className={classNames(classes.paper, formWidth)}>
              <Box className={classes.layout} display="flex">
                <Box flexGrow={1}>
                  <h2
                    className={classes.modalTitle}
                    id="transition-modal-title"
                  >
                    {formTitle}
                  </h2>
                </Box>
                <Box>
                  <IconButton
                    color="secondary"
                    onClick={() => handleClose()}
                    className={classes.closeButton}
                  >
                    <Icons icon={`Close`} />
                  </IconButton>
                </Box>
              </Box>
              {globalForm()}
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
};

export default Form;
