import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  FormControlLabel,
  Switch,
  Hidden,
} from "@material-ui/core";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { toast, Flip } from "react-toastify";
import useAccesses from "../../../actions/access/useAccesses";
import useCreate from "../../../actions/users/useCreate";
import useEdit from "../../../actions/users/useEdit";
import useDelete from "../../../actions/users/useDelete";
import Form from "../../../components/Modal/Form";

const Actions = ({ switchMode, data }) => {
  let errorCheck, errorHelper, isMode, formTitle, formWidth;

  isMode = switchMode;

  const classes = useStyles();

  formWidth = classes.formLayout;

  const { data: accesses, isSuccess } = useAccesses();

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [id, setId] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const createMutation = useCreate();
  const editMutation = useEdit(id);
  const deleteMutation = useDelete();

  const createLoading = createMutation.isLoading;
  const editLoading = editMutation.isLoading;
  const deleteLoading = deleteMutation.isLoading;

  if (isMode === "Create") {
    formTitle = "Create Users";
  } else if (isMode === "Edit") {
    formTitle = "Edit Users";
  } else {
    formTitle = "";
  }

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const clearInput = () => {
    setNameValue("");
    setEmailValue("");
    setTypeValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setPasswordValue("");
    setConfirmPasswordValue("");
    setShowPassword(false);
  };

  const handleOpen = (table) => {
    if (isMode === "Edit") {
      setId(table[0]);
      setNameValue(table[1]);
      setEmailValue(table[2]);
      setTypeValue(table[3]);
    }
    if (isMode === "Delete") {
      setId(table[0]);
    }
    setOpen(true);
    setChecked(false);
  };

  const handleClose = () => {
    setOpen(false);
    setChecked(false);
  };

  if (passwordCheck) {
    errorCheck = true;
    errorHelper = "Password Not Match.";
  }

  const onSubmit = (name, email, type, password, confirmPassword) => {
    if (isMode === "Create") {
      if (password !== confirmPassword) {
        setTimeout(() => {
          setOpen(false);
          toast.error("Password Not Macth!", {
            transition: Flip,
          });
          setPasswordCheck(true);
        }, 1000);
      } else if (password === "" && confirmPassword === "") {
        setTimeout(() => {
          setOpen(false);
          toast.error("Password Not Blank!", {
            transition: Flip,
          });
          setPasswordCheck(true);
        }, 1000);
      } else {
        createMutation.mutate(
          {
            name,
            email,
            type,
            password,
            confirmPassword,
          },
          {
            onSuccess: () => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Created Successfully!");
                setPasswordCheck(false);
                clearInput();
              }, 200);
            },
          },
        );
      }
    }
    if (isMode === "Edit") {
      if (password !== confirmPassword) {
        setTimeout(() => {
          setOpen(false);
          toast.error("Password Not Macth!", {
            transition: Flip,
          });
          setPasswordCheck(true);
        }, 1000);
      } else {
        editMutation.mutate(
          {
            name,
            email,
            type,
            password,
            confirmPassword,
            checked,
          },
          {
            onSuccess: () => {
              setTimeout(() => {
                setOpen(false);
                toast.success("Updated Successfully!");
                setPasswordCheck(false);
              }, 200);
            },
          },
        );
      }
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

  const globalForm = () => {
    if (isMode === "Create" || isMode === "Edit") {
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
            label="Full Name"
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
            label="Email Adress"
            type="email"
            fullWidth
          />
          <TextField
            id="type"
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={typeValue}
            onChange={(e) => setTypeValue(e.target.value)}
            margin="normal"
            select
            label="Access Type"
            fullWidth
          >
            {isSuccess ? (
              accesses.map((access) => (
                <MenuItem key={access._id} value={access.type}>
                  {access.type}
                </MenuItem>
              ))
            ) : (
              <MenuItem>Has an error....</MenuItem>
            )}
          </TextField>
          <FormControlLabel
            className={classes.formControlLabel}
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
                color="primary"
              />
            }
            labelPlacement="end"
            label="Enable Password"
          />
          <TextField
            id="password"
            error={errorCheck}
            helperText={errorHelper}
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPassword}
                    disabled={checked ? false : true}
                  >
                    {showPassword ? (
                      <Icons icon={`Visibility`} />
                    ) : (
                      <Icons icon={`VisibilityOff`} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            margin="normal"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            disabled={checked ? false : true}
          />
          <TextField
            id="confirmPassword"
            error={errorCheck}
            helperText={errorHelper}
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            margin="normal"
            label="Confirm Password"
            type="password"
            fullWidth
            disabled={checked ? false : true}
          />
          <div className={classes.buttonContainer}>
            <Button
              onClick={() =>
                onSubmit(
                  nameValue,
                  emailValue,
                  typeValue,
                  passwordValue,
                  confirmPasswordValue,
                  checked,
                )
              }
              disabled={
                checked
                  ? emailValue.length === 0 ||
                    nameValue.length === 0 ||
                    typeValue.length === 0 ||
                    passwordValue.length === 0 ||
                    confirmPasswordValue.length === 0 ||
                    createLoading ||
                    editLoading
                  : emailValue.length === 0 ||
                    nameValue.length === 0 ||
                    typeValue.length === 0 ||
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
                {isMode === "Create" ? "Create User" : "Update User"}
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
            <Icons icon={`PersonAdd`} />
          </div>
          <Hidden only="xs">&nbsp;Add User</Hidden>
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
