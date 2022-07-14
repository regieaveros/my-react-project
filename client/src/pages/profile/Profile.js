import React, { useState } from "react";
import {
  Grid,
  Box,
  CircularProgress,
  Button,
  TextField,
  Grow,
  InputAdornment,
  IconButton,
  Switch,
  FormGroup,
  FormControlLabel,
  Paper,
  Hidden,
} from "@material-ui/core";
import Icons from "../../global/Icons";
import { withRouter } from "react-router-dom";
import { useUserDispatch, updateData } from "../../context/UserContext";
import useStyles from "./styles";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";

const Profile = (props) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const currentId = user.result._id;

  const classes = useStyles();
  const userDispatch = useUserDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameValue, setNameValue] = useState(user.result.name);
  const [emailValue, setEmailValue] = useState(user.result.email);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setPasswordValue("");
    setConfirmPasswordValue("");
  };

  return (
    <>
      <ToastContainer />
      <PageTitle title="Profile" />
      <Grow in={true}>
        <Grid component={Paper} container className={classes.layout}>
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
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
            </FormGroup>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box mx={2}>
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
                label="Fullname"
                type="text"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box mx={2}>
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
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box mx={2}>
              <TextField
                id="password"
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
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box mx={2}>
              <TextField
                id="confirmPassword"
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
            </Box>
          </Grid>
          <Grid item md={4} lg={3} xs={12}>
            <Box
              component="div"
              ml={2}
              className={classes.creatingButtonContainer}
            >
              <Button
                onClick={() =>
                  updateData(
                    userDispatch,
                    props.history,
                    currentId,
                    nameValue,
                    emailValue,
                    passwordValue,
                    confirmPasswordValue,
                    checked,
                    setIsLoading,
                  )
                }
                disabled={
                  emailValue.length === 0 || nameValue.length === 0 || isLoading
                }
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.createUsertButton}
              >
                {isLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  <div className={classes.buttonIconSize}>
                    <Icons icon={`SaveAlt`} />
                  </div>
                )}
                <Hidden only="xs">&nbsp;Update Account</Hidden>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default withRouter(Profile);
