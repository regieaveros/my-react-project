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
import useCreate from "../../../actions/logoicon/useCreate";
import useEdit from "../../../actions/logoicon/useEdit";
import useDelete from "../../../actions/logoicon/useDelete";
import defaultImage from "../../../images/default.png";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  const classes = useStyles();

  isMode = switchMode;

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [taglineValue, setTaglineValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [iconValue, setIconValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Logo Icon";
  } else if (isMode === "Edit") {
    formTitle = "Edit Logo Icon";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setNameValue("");
    setTaglineValue("");
    setImageValue("");
    setIconValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setNameValue(table[1]);
      setTaglineValue(table[2]);
      setImageValue(table[3]);
      setIconValue(table[4]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (name, tagline, imageBase64, iconBase64) => {
    const image = imageBase64.base64;
    const icon = iconBase64.base64;

    if (isMode === "Create") {
      createMutation.mutate(
        {
          name,
          tagline,
          image,
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
      if (!imageBase64) {
        editMutation.mutate(
          {
            name,
            tagline,
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
      } else if (!iconBase64) {
        editMutation.mutate(
          {
            name,
            tagline,
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
      } else if (!imageBase64 && !iconBase64) {
        editMutation.mutate(
          {
            name,
            tagline,
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
            tagline,
            image,
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

  const globalForm = () => {
    return (
      <>
        <TextField
          id="websiteName"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          margin="normal"
          label="Website Name"
          type="text"
          fullWidth
        />
        <TextField
          id="tagline"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={taglineValue}
          onChange={(e) => setTaglineValue(e.target.value)}
          margin="normal"
          label="Tagline"
          type="text"
          fullWidth
        />
        <div className={classes.fileInput}>
          <Typography variant="subtitle1">Logo:</Typography>
          {imageValue ? (
            <div>
              <img
                src={imageValue.base64 ? imageValue.base64 : imageValue}
                width={150}
                alt="CMSImage"
              />
            </div>
          ) : (
            <div>
              <img src={defaultImage} width={150} alt="CMSImage" />
            </div>
          )}
          <FileBase
            type="file"
            multiple={false}
            onChange={(e) => setImageValue(e.target.value)}
            onDone={({ base64 }) => setImageValue({ base64 })}
          />
        </div>
        <div className={classes.fileInput}>
          <Typography variant="subtitle1">Icon:</Typography>
          {iconValue ? (
            <div>
              <img
                src={iconValue.base64 ? iconValue.base64 : iconValue}
                height={45}
                width={52}
                alt="CMSIcon"
              />
            </div>
          ) : (
            <div>
              <img src={defaultImage} width={52} height={45} alt="CMSIcon" />
            </div>
          )}
          <FileBase
            type="file"
            multiple={false}
            onChange={(e) => setIconValue(e.target.value)}
            onDone={({ base64 }) => setIconValue({ base64 })}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            onClick={() =>
              onSubmit(nameValue, taglineValue, imageValue, iconValue)
            }
            disabled={
              isMode === "Create"
                ? nameValue.length === 0 ||
                  taglineValue.length === 0 ||
                  imageValue.length === 0 ||
                  iconValue.length === 0 ||
                  createLoading
                : nameValue.length === 0 ||
                  taglineValue.length === 0 ||
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
