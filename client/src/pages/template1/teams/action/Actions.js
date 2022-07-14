import React, { useState } from "react";
import {
  Grid,
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
import FileBase from "react-file-base64";
import useCreate from "../../../../actions/template1/teams/useCreate";
import useEdit from "../../../../actions/template1/teams/useEdit";
import useDelete from "../../../../actions/template1/teams/useDelete";
import FroalaEditorComponent from "react-froala-wysiwyg";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  const classes = useStyles();

  isMode = switchMode;

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [positionValue, setPositionValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Template 1 - Our Teams";
  } else if (isMode === "Edit") {
    formTitle = "Edit Template 1 - Our Teams";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setNameValue("");
    setPositionValue("");
    setContactValue("");
    setEmailValue("");
    setDescriptionValue("");
    setImageValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setNameValue(table[1]);
      setImageValue(table[2]);
      setPositionValue(table[3]);
      setContactValue(table[4]);
      setEmailValue(table[5]);
      setDescriptionValue(table[6]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (
    name,
    position,
    contact,
    email,
    description,
    imageBase64,
  ) => {
    const image = imageBase64.base64;

    if (isMode === "Create") {
      createMutation.mutate(
        {
          name,
          position,
          contact,
          email,
          description,
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
            name,
            position,
            contact,
            email,
            description,
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
            name,
            position,
            contact,
            email,
            description,
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

  const froalaContent = (editor) => {
    setDescriptionValue(editor);
  };

  const globalForm = () => {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
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
              id="position"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={positionValue}
              onChange={(e) => setPositionValue(e.target.value)}
              margin="normal"
              label="Position"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              id="contact"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              margin="normal"
              label="Contact Number"
              type="text"
              fullWidth
            />
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              margin="normal"
              label="Email"
              type="text"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <div className={classes.alignment}>
              <Typography variant="subtitle1">Description:</Typography>
              <FroalaEditorComponent
                tag="textarea"
                model={descriptionValue}
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
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <div className={classes.fileInput}>
              <Typography variant="subtitle1">Image:</Typography>
              {imageValue && (
                <div>
                  <img
                    src={imageValue.base64 ? imageValue.base64 : imageValue}
                    height={120}
                    width={120}
                    alt="Wooden FeatureImage"
                  />
                </div>
              )}
              <FileBase
                type="file"
                multiple={false}
                onChange={(e) => setImageValue(e.target.value)}
                onDone={({ base64 }) => setImageValue({ base64 })}
              />
            </div>
          </Grid>
        </Grid>
        <div className={classes.buttonContainer}>
          <Button
            onClick={() =>
              onSubmit(
                nameValue,
                positionValue,
                contactValue,
                emailValue,
                descriptionValue,
                imageValue,
              )
            }
            disabled={
              isMode === "Create"
                ? nameValue.length === 0 ||
                  positionValue.length === 0 ||
                  contactValue.length === 0 ||
                  emailValue.length === 0 ||
                  descriptionValue.length === 0 ||
                  createLoading
                : nameValue.length === 0 ||
                  positionValue.length === 0 ||
                  contactValue.length === 0 ||
                  emailValue.length === 0 ||
                  descriptionValue.length === 0 ||
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
              {isMode === "Create" ? "Create Teams" : "Update Teams"}
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
          <Hidden only="xs">&nbsp;Add Teams</Hidden>
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
