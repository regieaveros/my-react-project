import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  Hidden,
} from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { toast, Flip } from "react-toastify";
import FileBase from "react-file-base64";
import useCreate from "../../../actions/cmsimage/useCreate";
import useEdit from "../../../actions/cmsimage/useEdit";
import useDelete from "../../../actions/cmsimage/useDelete";
import Form from "../../../components/Modal/Form";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  isMode = switchMode;

  const classes = useStyles();

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Image";
  } else if (isMode === "Edit") {
    formTitle = "Edit Image";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setTitleValue("");
    setImageValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setTitleValue(table[1]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (title, imageBase64) => {
    const image = imageBase64.base64;
    if (isMode === "Create") {
      createMutation.mutate(
        {
          title,
          image,
        },
        {
          onSuccess: () => {
            setTimeout(() => {
              setOpen(false);
              toast.success("Created Successfully!");

              clearInput();
            }, 200);
          },
        },
      );
    }

    if (isMode === "Edit") {
      editMutation.mutate(
        {
          title,
          image,
        },
        {
          onSuccess: () => {
            setTimeout(() => {
              setOpen(false);
              toast.success("Updated Successfully!");
            }, 200);
          },
        },
      );
    }
  };

  const onDelete = (id) => {
    try {
      deleteMutation.mutate(id, {
        onSuccess: () => {
          setTimeout(() => {
            setOpen(false);
            toast.error("Data Deleted!", {
              transition: Flip,
            });
          }, 1000);
        },
      });
    } catch (err) {}
  };

  const globalForm = () => {
    if (isMode === "Create" || isMode === "Edit") {
      return (
        <>
          <TextField
            id="title"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            margin="normal"
            label="Title"
            type="text"
            fullWidth
          />
          <div className={classes.fileInput}>
            <Typography variant="subtitle1">Image:</Typography>
            <FileBase
              type="file"
              multiple={false}
              onChange={(e) => setImageValue(e.target.value)}
              onDone={({ base64 }) => setImageValue({ base64 })}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              onClick={() => onSubmit(titleValue, imageValue)}
              disabled={createLoading || editLoading}
              size="large"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submitButton}
            >
              {createLoading || editLoading ? (
                <CircularProgress size={20} />
              ) : (
                <div className={classes.buttonIconSize}>
                  <Icons icon={`SaveAlt`} />
                </div>
              )}
              <Hidden only="xs">
                &nbsp;
                {isMode === "Create" ? "Create Image" : "Update Image"}
              </Hidden>
            </Button>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      {isMode === "Create" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
          className={classes.buttonSize}
        >
          <div className={classes.buttonIconSize}>
            <Icons icon={`AddPhotoAlternate`} />
          </div>
          <Hidden only="xs">&nbsp;Add Image</Hidden>
        </Button>
      )}

      {isMode === "Edit" && (
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => handleOpen(data)}
          className={classes.mdIconSize}
        >
          <Icons icon={`Edit`} />
        </Button>
      )}

      {isMode === "Delete" && (
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => handleOpen(data)}
          className={classes.mdIconSize}
        >
          <Icons icon={`Delete`} />
        </Button>
      )}

      <Form
        open={open}
        handleClose={handleClose}
        formTitle={formTitle}
        globalForm={globalForm}
        formWidth={formWidth}
        isMode={isMode}
        onDelete={onDelete}
        isLoading={deleteLoading}
        id={id}
      />
    </>
  );
};

export default Actions;
