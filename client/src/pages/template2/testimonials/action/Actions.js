import React, { useState } from "react";
import {
  Button,
  Hidden,
  CircularProgress,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
import Icons from "../../../../global/Icons";
import { toast, Flip } from "react-toastify";
import Form from "../../../../components/Modal/Form";
import FileBase from "react-file-base64";
import useCreate from "../../../../actions/template2/testimonials/useCreate";
import useEdit from "../../../../actions/template2/testimonials/useEdit";
import useDelete from "../../../../actions/template2/testimonials/useDelete";
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
  const [imageValue, setImageValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Template 1 - Testimonials";
  } else if (isMode === "Edit") {
    formTitle = "Edit Template 1 - Testimonials";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setNameValue("");
    setPositionValue("");
    setImageValue("");
    setDescriptionValue("");
    setRatingValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setNameValue(table[1]);
      setPositionValue(table[2]);
      setImageValue(table[3]);
      setDescriptionValue(table[4]);
      setRatingValue(table[5]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (name, position, imageBase64, description, rating) => {
    const image = imageBase64.base64;

    if (isMode === "Create") {
      createMutation.mutate(
        {
          name,
          position,
          image,
          description,
          rating,
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
            description,
            rating,
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
            image,
            description,
            rating,
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
        <Grid className={classes.gridTop} container>
          <Grid item xs={12} sm={6}>
            <div className={classes.gridItemLayout}>
              <div className={classes.fileInput}>
                <Typography variant="subtitle1">Image:</Typography>
                {imageValue && (
                  <div>
                    <img
                      src={imageValue.base64 ? imageValue.base64 : imageValue}
                      height={90}
                      width={90}
                      alt="Digital MarketingImage"
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
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.gridItemLayout}>
              <Typography variant="subtitle1">Rating:</Typography>
              <Rating
                name="rating"
                value={parseInt(ratingValue)}
                onChange={(e) => setRatingValue(e.target.value)}
              />
            </div>
          </Grid>
        </Grid>
        <div className={classes.alignment}>
          <Typography variant="subtitle1">Content:</Typography>
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
        <div className={classes.buttonContainer}>
          <Button
            onClick={() =>
              onSubmit(
                nameValue,
                positionValue,
                imageValue,
                descriptionValue,
                ratingValue,
              )
            }
            disabled={
              isMode === "Create"
                ? nameValue.length === 0 ||
                  positionValue.length === 0 ||
                  imageValue.length === 0 ||
                  descriptionValue.length === 0 ||
                  ratingValue.length === 0 ||
                  createLoading
                : nameValue.length === 0 ||
                  positionValue.length === 0 ||
                  descriptionValue.length === 0 ||
                  ratingValue.length === 0 ||
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
              {isMode === "Create"
                ? "Create Testimonials"
                : "Update Testimonials"}
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
          <Hidden only="xs">&nbsp;Add Testimonials</Hidden>
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
