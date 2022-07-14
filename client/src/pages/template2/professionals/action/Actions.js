import React, { useState } from "react";
import {
  Button,
  Hidden,
  CircularProgress,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../../global/Icons";
import { toast, Flip } from "react-toastify";
import Form from "../../../../components/Modal/Form";
import FileBase from "react-file-base64";
import useCreate from "../../../../actions/template2/professionals/useCreate";
import useEdit from "../../../../actions/template2/professionals/useEdit";
import useDelete from "../../../../actions/template2/professionals/useDelete";

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
  const [socialMediaValue, setSocialMediaValue] = useState([]);

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Template 2 - Professionals";
  } else if (isMode === "Edit") {
    formTitle = "Edit Template 2 - Professionals";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setNameValue("");
    setPositionValue("");
    setImageValue("");
    setSocialMediaValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setNameValue(table[1]);
      setPositionValue(table[2]);
      setImageValue(table[3]);
      setSocialMediaValue(table[4]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (name, position, imageBase64, socialMedia) => {
    const image = imageBase64.base64;

    if (isMode === "Create") {
      createMutation.mutate(
        {
          name,
          position,
          image,
          socialMedia,
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
            socialMedia,
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
            socialMedia,
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

  //Social Media List
  const handleInputChange = (listValue, index) => {
    const { name, value } = listValue.target;
    const list = [...socialMediaValue];
    list[index][name] = value;
    setSocialMediaValue(list);
  };

  const handleAddClick = () => {
    setSocialMediaValue([...socialMediaValue, { icontype: "", link: "" }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...socialMediaValue];
    list.splice(index, 1);
    setSocialMediaValue(list);
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
        <fieldset className={classes.fieldsetLayout}>
          <legend>Social Media List:</legend>
          <Button
            className={classes.buttonSize2}
            size="small"
            variant="contained"
            onClick={handleAddClick}
          >
            <span className={classes.buttonIconSize2}>
              <Icons icon={`Add`} />
            </span>
            Add
          </Button>
          <Grid className={classes.gridLayout} container>
            {socialMediaValue && (
              <>
                {socialMediaValue.map((socialmedia, id) => {
                  return (
                    <div className={classes.fsTextfieldContainer} key={id}>
                      <Grid item xs={5}>
                        <div className={classes.fsTextfieldLayout}>
                          <TextField
                            name="icontype"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={socialmedia.icontype}
                            onChange={(e) => handleInputChange(e, id)}
                            margin="normal"
                            label="Icon Type"
                            type="text"
                            fullWidth
                          />
                        </div>
                      </Grid>
                      <Grid item xs={5}>
                        <div className={classes.fsTextfieldLayout}>
                          <TextField
                            name="link"
                            InputProps={{
                              classes: {
                                underline: classes.textFieldUnderline,
                                input: classes.textField,
                              },
                            }}
                            value={socialmedia.link}
                            onChange={(e) => handleInputChange(e, id)}
                            margin="normal"
                            label="Link"
                            type="text"
                            fullWidth
                          />
                        </div>
                      </Grid>
                      <Grid item xs={2}>
                        {socialMediaValue.length !== 0 && (
                          <div className={classes.fsTextfieldLayout}>
                            <Button
                              size="small"
                              variant="contained"
                              color="secondary"
                              className={classes.buttonIconSize3}
                              onClick={() => handleRemoveClick(id)}
                            >
                              <Icons icon={`Remove`} />
                            </Button>
                          </div>
                        )}
                      </Grid>
                    </div>
                  );
                })}
              </>
            )}
          </Grid>
        </fieldset>
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
        <div className={classes.buttonContainer}>
          <Button
            onClick={() =>
              onSubmit(nameValue, positionValue, imageValue, socialMediaValue)
            }
            disabled={
              isMode === "Create"
                ? nameValue.length === 0 ||
                  positionValue.length === 0 ||
                  imageValue.length === 0 ||
                  socialMediaValue.length === 0 ||
                  createLoading
                : nameValue.length === 0 ||
                  positionValue.length === 0 ||
                  socialMediaValue.length === 0 ||
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
                ? "Create Professionals"
                : "Update Professionals"}
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
          <Hidden only="xs">&nbsp;Add Professionals</Hidden>
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
