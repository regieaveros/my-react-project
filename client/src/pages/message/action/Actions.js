import React, { useState } from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { toast, Flip } from "react-toastify";
import Form from "../../../components/Modal/Form";
import useDelete from "../../../actions/message/useDelete";

const Actions = ({ switchMode, data }) => {
  let isMode;

  isMode = switchMode;

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const deleteMutation = useDelete();
  const deleteLoading = deleteMutation.isLoading;

  const handleOpen = (table) => {
    if (isMode === "Delete") {
      setId(table[0]);
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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

  return (
    <>
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
        isMode={isMode}
        onDelete={onDelete}
        isLoading={deleteLoading}
        id={id}
      />
    </>
  );
};

export default Actions;
