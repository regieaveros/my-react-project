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
import useCreate from "../../../actions/cmscontent/useCreate";
import useEdit from "../../../actions/cmscontent/useEdit";
import useDelete from "../../../actions/cmscontent/useDelete";
import Form from "../../../components/Modal/Form";
import FroalaEditorComponent from "react-froala-wysiwyg";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  isMode = switchMode;

  const classes = useStyles();

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Content";
  } else if (isMode === "Edit") {
    formTitle = "Edit Content";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setTitleValue("");
    setContentValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setTitleValue(table[1]);
      setContentValue(table[2]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (title, content) => {
    if (isMode === "Create") {
      createMutation.mutate(
        {
          title,
          content,
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
          content,
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

  const froalaContent = (editor) => {
    setContentValue(editor);
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
          <div className={classes.alignment}>
            <Typography variant="subtitle1">Message:</Typography>
            <FroalaEditorComponent
              tag="textarea"
              model={contentValue}
              onModelChange={froalaContent}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              onClick={() => onSubmit(titleValue, contentValue)}
              disabled={
                titleValue.length === 0 ||
                contentValue.length === 0 ||
                createLoading ||
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
                {isMode === "Create" ? "Create Content" : "Update Content"}
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
            <Icons icon={`PostAdd`} />
          </div>
          <Hidden only="xs">&nbsp;Add Content</Hidden>
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
