import React, { useState } from "react";
import {
  Button,
  Hidden,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { toast, Flip } from "react-toastify";
import Form from "../../../components/Modal/Form";
import FileBase from "react-file-base64";
import useCreate from "../../../actions/note/useCreate";
import useEdit from "../../../actions/note/useEdit";
import useDelete from "../../../actions/note/useDelete";
import FroalaEditorComponent from "react-froala-wysiwyg";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  const classes = useStyles();

  isMode = switchMode;

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Note";
  } else if (isMode === "Edit") {
    formTitle = "Edit Note";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setTitleValue("");
    setMessageValue("");
    setImageValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setTitleValue(table[1]);
      setMessageValue(table[2]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (title, message, imageBase64) => {
    const image = imageBase64.base64;

    if (isMode === "Create") {
      createMutation.mutate(
        {
          title,
          message,
          image,
        },
        {
          onSuccess: () => {
            setTimeout(() => {
              setOpen(false);
              toast.success("Created Successfully!");
              clearInput();
            }, 1000);
          },
        },
      );
    }

    if (isMode === "Edit") {
      if (!imageBase64) {
        editMutation.mutate(
          {
            title,
            message,
          },
          {
            onSuccess: () => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Updated Successfully!");
              }, 1000);
            },
          },
        );
      } else {
        editMutation.mutate(
          {
            title,
            message,
            image,
          },
          {
            onSuccess: () => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Updated Successfully!");
              }, 1000);
            },
          },
        );
      }
    }
  };

  const onDelete = (id) => {
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
  };

  const froalaMessage = (editor) => {
    setMessageValue(editor);
  };

  const globalForm = () => {
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

        <div className={classes.alignment}>
          <Typography variant="subtitle1">Message:</Typography>
          <FroalaEditorComponent
            tag="textarea"
            model={messageValue}
            onModelChange={froalaMessage}
            config={{
              toolbarButtons: [
                "bold",
                "italic",
                "underline",
                "fontSize",
                "textColor",
                "backgroundColor",
                "insertLink",
              ],
              quickInsertButtons: ["ul", "ol", "hr"],
            }}
          />
        </div>
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
            onClick={() => onSubmit(titleValue, messageValue, imageValue)}
            disabled={
              isMode === "Create"
                ? titleValue.length === 0 ||
                  messageValue.length === 0 ||
                  imageValue.length === 0 ||
                  createLoading
                : titleValue.length === 0 ||
                  messageValue.length === 0 ||
                  editLoading
            }
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
              {isMode === "Create" ? "Create Note" : "Update Note"}
            </Hidden>
          </Button>
        </div>
      </>
    );
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
            <Icons icon={`NoteAdd`} />
          </div>
          <Hidden only="xs">&nbsp;Add Notes</Hidden>
        </Button>
      )}

      {isMode === "Edit" && (
        <Button
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
