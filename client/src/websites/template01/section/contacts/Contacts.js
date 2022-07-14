import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Content from "./Content";

const Contacts = () => {
  const classes = useStyles();

  return (
    <div id="contact-us" className={classes.contactsLayout}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Content name={`Title 1`} />
          <Content name={`Map`} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Content name={`Title 2`} />
          <Content name={`Content`} />
          <Content name={`Contact Info`} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contacts;
