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
import FileBase from "react-file-base64";
import useCreate from "../../../../actions/template1/products/useCreate";
import useEdit from "../../../../actions/template1/products/useEdit";
import useDelete from "../../../../actions/template1/products/useDelete";
import FroalaEditorComponent from "react-froala-wysiwyg";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  const classes = useStyles();

  isMode = switchMode;

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [pricePercentageValue, setPricePercentageValue] = useState("");

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Template 1 - Products";
  } else if (isMode === "Edit") {
    formTitle = "Edit Template 1 - Products";
  } else {
    formTitle = "";
  }

  const clearInput = () => {
    setTitleValue("");
    setContentValue("");
    setImageValue("");
    setPriceValue("");
    setPricePercentageValue("");
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setTitleValue(table[1]);
      setContentValue(table[2]);
      setImageValue(table[3]);
      setPriceValue(table[4]);
      setPricePercentageValue(table[5]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const onSubmit = (title, content, imageBase64, price, pricePercentage) => {
    const computedPrice = (price / 100) * pricePercentage;
    const totalPrice = Math.round(price - computedPrice);
    const originalPrice = price;
    const image = imageBase64.base64;

    if (isMode === "Create") {
      if (!pricePercentage === 0) {
        createMutation.mutate(
          {
            title,
            content,
            image,
            originalPrice,
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
      } else {
        createMutation.mutate(
          {
            title,
            content,
            image,
            price: totalPrice,
            originalPrice,
            pricePercentage,
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
    }

    if (isMode === "Edit") {
      if (!imageBase64) {
        if (!pricePercentage === 0) {
          editMutation.mutate(
            {
              title,
              content,
              originalPrice,
              pricePercentage,
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
              content,
              price: totalPrice,
              originalPrice,
              pricePercentage,
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
      } else {
        if (!pricePercentage === 0) {
          editMutation.mutate(
            {
              title,
              content,
              image,
              originalPrice,
              pricePercentage,
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
              content,
              image,
              price: totalPrice,
              originalPrice,
              pricePercentage,
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
        <TextField
          id="price"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          margin="normal"
          label="Price"
          type="number"
          fullWidth
        />
        <TextField
          id="pricePercentage"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          value={pricePercentageValue}
          onChange={(e) => setPricePercentageValue(e.target.value)}
          margin="normal"
          label="Price Percentage"
          type="number"
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
                "insertHR",
                "formatOL",
                "formatUL",
                "html",
              ],
              quickInsertEnabled: false,
            }}
          />
        </div>
        <div className={classes.fileInput}>
          <Typography variant="subtitle1">Image:</Typography>
          {imageValue && (
            <div>
              <img
                src={imageValue.base64 ? imageValue.base64 : imageValue}
                height={120}
                width={200}
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
              onSubmit(
                titleValue,
                contentValue,
                imageValue,
                priceValue,
                pricePercentageValue,
              )
            }
            disabled={
              isMode === "Create"
                ? titleValue.length === 0 ||
                  contentValue.length === 0 ||
                  imageValue.length === 0 ||
                  createLoading
                : titleValue.length === 0 ||
                  contentValue.length === 0 ||
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
              {isMode === "Create" ? "Create Products" : "Update Products"}
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
          <Hidden only="xs">&nbsp;Add Products</Hidden>
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
