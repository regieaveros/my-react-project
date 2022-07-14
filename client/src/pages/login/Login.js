import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { GoogleLogin } from "react-google-login";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";

// icon
import defaultIcon from "../../images/material_logo.ico";

// context
import {
  useUserDispatch,
  loginUser,
  createLoginUser,
  loadGoogleLogin,
} from "../../context/UserContext";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Moment from 'react-moment';
import moment from "moment";

const Login = (props) => {
  const classes = useStyles();

  // global
  const userDispatch = useUserDispatch();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const UserGreeting = `Good ${getGreetingTime(moment())}, User.`;

  // local
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [isTimeNow, setIsTimeNow] = useState(0);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      localStorage.setItem("profile", JSON.stringify({ result, token }));
      loadGoogleLogin(userDispatch, props.history);
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTimeNow(moment().format("LTS"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getGreetingTime(mode) {
    let day = null;

    if (!mode || !mode.isValid()) {
      return;
    }

    const split_afternoon = 12;
    const split_evening = 17;
    const currentHour = parseFloat(mode.format("HH"));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      day = "Afternoon";
    } else if (currentHour >= split_evening) {
      day = "Evening";
    } else {
      day = "Morning";
    }

    return day;
  }

  return (
    <Grid container className={classes.container}>
      <Helmet>
        <title>Material UI | Admin</title>
        <link rel="shortcut icon" href={defaultIcon} />
        <meta name="description" content="This login page was created in Material Ui" />
        <meta name="keywords" content="react admin, material ui admin," />
        <meta name="author" content="Material UI Team" />
      </Helmet>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Material Admin</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <ToastContainer />
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography
                align="center"
                className={classes.localTime}
                variant="h3"
              >
                {isTimeNow}
              </Typography>
              <Typography variant="h1" className={classes.greeting}>
                {UserGreeting}
              </Typography>
              <GoogleLogin
                clientId="755234947589-4s6kcohbb6bio0aj782ia95o0lmn88fi.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    size="large"
                    className={classes.googleButton}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      src={google}
                      alt="google"
                      className={classes.googleIcon}
                    />
                    &nbsp;Sign in with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <form noValidate autoComplete="off">
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
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
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
                />
              </form>
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      emailValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        emailValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>

              <form noValidate autoComplete="off">
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
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
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
                />
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
                />
              </form>
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() =>
                      createLoginUser(
                        userDispatch,
                        nameValue,
                        emailValue,
                        passwordValue,
                        confirmPasswordValue,
                        props.history,
                        setIsLoading,
                      )
                    }
                    disabled={
                      emailValue.length === 0 ||
                      passwordValue.length === 0 ||
                      nameValue.length === 0 ||
                      confirmPasswordValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default withRouter(Login);
