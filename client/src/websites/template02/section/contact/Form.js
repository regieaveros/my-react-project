import React, { useState } from "react";
import { Grid, Button, CircularProgress, TextField } from "@material-ui/core";
import Icons from "../../../../global/Icons";
import useStyles from "./styles";
import useCreate from "../../../../actions/message/useCreate";

const Form = () => {

  const classes = useStyles();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const createMutation = useCreate();
  const createSuccess = createMutation.isSuccess;
  const createLoading = createMutation.isLoading;

  const clearInput = () => {
    setFullname("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  const onSubmit = (fullname, email, subject, message) => {
    
    createMutation.mutate(
      {
        fullname,
        email,
        subject,
        message,
      },
      {
        onSuccess: () => {
          setTimeout(() => {
            clearInput();
          }, 1000);
        },
      },
    );

  }

  return (
    <div className={classes.formLayout}>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            id="fullname"
            className={classes.textFieldLayout}
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            margin="normal"
            label="Your Name"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextField
            id="email"
            className={classes.textFieldLayout}
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            label="Your Email"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="subject"
            className={classes.textFieldLayout}
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            margin="normal"
            label="Your Subject"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            className={classes.textFieldLayout}
            InputProps={{
              classes: {
                underline: classes.textFieldUnderline,
                input: classes.textField,
              },
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            multiline
            rows={7}
            label="Your Message"
            type="text"
            fullWidth
          />
          <div className={classes.textContainer}>
            {createSuccess ? (
              <h5 className={classes.successText}>
                Your Message Successfully Send!
              </h5>
            ) : (
              <></>
            )}
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.buttonLayout}
            onClick={() => onSubmit(fullname, email, subject, message)}
            disabled={
              fullname.length === 0 ||
              email.length === 0 ||
              subject.length === 0 ||
              message.length === 0 ||
              createLoading
            }
            size="large"
            disableRipple
          >
            {createLoading ? (
              <CircularProgress size={20} />
            ) : (
              <div className={classes.buttonIconSize}>
                {createSuccess ? (
                  <Icons icon={`Check`} />
                ) : (
                  <Icons icon={`Send`} />
                )}
              </div>
            )}
            &nbsp;
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Form;