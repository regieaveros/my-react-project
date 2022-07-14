import React, { useState } from "react";
import {
  Button,
  Hidden,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../../global/Icons";
import { toast, Flip } from "react-toastify";
import Form from "../../../../components/Modal/Form";
import useCreate from "../../../../actions/template2/best_services/useCreate";
import useEdit from "../../../../actions/template2/best_services/useEdit";
import useDelete from "../../../../actions/template2/best_services/useDelete";
import FroalaEditorComponent from "react-froala-wysiwyg";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  const classes = useStyles();

  isMode = switchMode;

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [iconValue, setIconValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Template 2 - Services";
  } else if (isMode === "Edit") {
    formTitle = "Edit Template 2 - Services";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setNameValue("");
    setContentValue("");
    setIconValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setNameValue(table[1]);
      setContentValue(table[2]);
      setIconValue(table[3]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (name, content, icon) => {
    if (isMode === "Create") {
      createMutation.mutate(
        {
          name,
          content,
          icon,
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
      editMutation.mutate(
        {
          name,
          content,
          icon,
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

  const froalaContent = (editor) => {
    setContentValue(editor);
  };

  const globalForm = () => {
    return (
      <>
        <TextField
          id="name"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          margin="normal"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          id="icon"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={iconValue}
          onChange={(e) => setIconValue(e.target.value)}
          margin="normal"
          label="Icon Code"
          type="text"
          fullWidth
        />
        <div className={classes.alignment}>
          <Typography variant="subtitle1">Content:</Typography>
          <FroalaEditorComponent
            tag="textarea"
            model={contentValue}
            onModelChange={froalaContent}
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
        <div className={classes.buttonContainer}>
          <Button
            onClick={() => onSubmit(nameValue, contentValue, iconValue)}
            disabled={
              nameValue.length === 0 ||
              contentValue.length === 0 ||
              iconValue.length === 0 ||
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
              {isMode === "Create" ? "Create Services" : "Update Services"}
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
          <Hidden only="xs">&nbsp;Add Services</Hidden>
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
