import React from 'react';
import { Grid, Button } from "@material-ui/core";
import classNames from "classnames";
import Icons from "../../../../global/Icons";
import useStyles from "./styles";
import ReactHtmlParser from "react-html-parser";
import useServices from "../../../../actions/template2/services/useServices";

const PostServices = () => {

const classes = useStyles();

const { data: services, isLoading } = useServices();

  return (
    <div className={classes.postServiceLayout}>
    <Grid container spacing={3}>
        {isLoading ? (
            <></>
        ) : (
            <>
                {services.map((service) => (
                    <Grid
                        item
                        key={service._id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                    >
                        <Button className={classNames(classes.postServiceButton)} disableRipple>
                            <span className="postServiceButtonLayout">
                                <span className="postServiceButtonIcon1">
                                    <Icons icon={service.icon} />
                                </span>
                                <span className="postServiceButtonName">
                                    {ReactHtmlParser(service.name)}
                                </span>   
                                <span className="postServiceButtonIcon2">
                                    <span>
                                        <Icons icon={`ArrowForward`} />
                                    </span>
                                </span>
                            </span>
                        </Button>
                    </Grid>
                ))}
            </>
        )
        }
    </Grid>
    </div>
  )
}

export default PostServices