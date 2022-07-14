import React, { useState } from "react";
import { Button, CircularProgress, TextField, Hidden } from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { toast, Flip } from "react-toastify";
import useCreate from "../../../actions/access/useCreate";
import useEdit from "../../../actions/access/useEdit";
import useDelete from "../../../actions/access/useDelete";
import Form from "../../../components/Modal/Form";

const Actions = ({ switchMode, data }) => {
  let isMode, formTitle, formWidth;

  isMode = switchMode;

  const classes = useStyles();

  formWidth = classes.formLayout;

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const handleOpen = (data) => {
    if (isMode === "Edit") {
      setId(data._id);
      setTypeValue(data.type);
    }
    if (isMode === "Delete") {
      setId(data._id);
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  if (isMode === "Create") {
    formTitle = "Create Category";
  } else if (isMode === "Edit") {
    formTitle = "Edit Category";
  } else {
    formTitle = "";
  }

  const onSubmit = (value) => {
    setIsLoading(true);
    try {
      if (isMode === "Create") {
        createMutation.mutate(
          { value },
          {
            onSuccess: () => {
              setTimeout(() => {
                toast.success("Created Successfully!");
                setIsLoading(false);
                setOpen(false);
                setTypeValue("");
              }, 200);
            },
          },
        );
      }

      if (isMode === "Edit") {
        editMutation.mutate(
          { value },
          {
            onSuccess: () => {
              setTimeout(() => {
                toast.success("Updated Successfully!");
                setIsLoading(false);
                setOpen(false);
              }, 200);
            },
          },
        );
      }
    } catch (error) {}
  };

  const onDelete = (id) => {
    setIsLoading(true);
    try {
      deleteMutation.mutate(id, {
        onSuccess: () => {
          setTimeout(() => {
            setIsLoading(false);
            setOpen(false);
            toast.error("Data Deleted!", {
              transition: Flip,
            });
          }, 200);
        },
      });
    } catch (err) {}
  };

  const globalForm = () => {
    if (isMode === "Create" || isMode === "Edit") {
      return (
        <>
          <TextField
            id="name"
            value={typeValue}
            onChange={(e) => setTypeValue(e.target.value)}
            margin="normal"
            label="User Access"
            type="text"
            variant="outlined"
            fullWidth
          />
          <div className={classes.buttonContainer}>
            {isLoading ? (
              <CircularProgress size={26} />
            ) : (
              <Button
                onClick={() => onSubmit(typeValue)}
                disabled={typeValue.length === 0}
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submitButton}
              >
                <div className={classes.buttonIconSize}>
                  <Icons icon={`SaveAlt`} />
                  &nbsp;
                </div>
                <Hidden only="xs">
                  &nbsp;
                  {isMode === "Create"
                    ? "Create User Access"
                    : "Update User Access"}
                </Hidden>
              </Button>
            )}
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      {switchMode === "Create" && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
          className={classes.buttonSize}
        >
          <div className={classes.buttonIconSize}>
            <Icons icon={`FormatListNumbered`} />
          </div>
          <Hidden only="xs">&nbsp;Add Category</Hidden>
        </Button>
      )}

      {switchMode === "Edit" && (
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

      {switchMode === "Delete" && (
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
        isLoading={isLoading}
        id={id}
      />
    </>
  );
};

export default Actions;
