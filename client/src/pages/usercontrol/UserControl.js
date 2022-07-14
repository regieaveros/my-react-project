import React from "react";
import {
  Grid,
  CircularProgress,
  Box,
  Grow,
  Button,
  Chip,
  Typography,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import useStyles from "./styles";
import Icons from "../../global/Icons";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import useUserControls from "../../actions/usercontrol/useUserControls";
import Actions from "./action/Actions";

const UserControl = () => {
  const classes = useStyles();

  const { data: usercontrols, isLoading } = useUserControls();

  const columns = [
    {
      name: "id",
      options: {
        display: false,
        filter: false,
        viewColumns: false,
        download: false,
      },
    },
    { name: "Order" },
    { name: "Type" },
    { name: "Label" },
    {
      name: "Link",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          if (!!value) {
            return (
              <Button
                color="primary"
                href={`/#${value}`}
                style={{ textTransform: "none" }}
              >
                {value}
              </Button>
            );
          } else {
            return <></>;
          }
        },
      },
    },
    {
      name: "SideLink",
      label: "Side Link",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box component="div">
            {value.map((data) => {
              if (!!data) {
                return (
                  <Box key={data.label} component="div" m={1}>
                    <Typography
                      className={classes.sideLinkText}
                      variant="body2"
                    >
                      Label: {`${data.label}`}
                    </Typography>
                    <Typography
                      className={classes.sideLinkText}
                      variant="body2"
                    >
                      Link:
                      <Button
                        size="small"
                        color="primary"
                        href={`/#${data.link}`}
                        style={{ textTransform: "none" }}
                      >
                        {`${data.link}`}
                      </Button>
                    </Typography>
                  </Box>
                );
              } else {
                return <></>;
              }
            })}
          </Box>
        ),
      },
    },
    {
      name: "IconCode",
      label: "Icons",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className={classes.mdIconSize}>
              <Icons icon={`${value}`} />
            </div>
          );
        },
      },
    },
    {
      name: "AccessType",
      label: "Access Type",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Box component="ul" className={classes.root}>
            {value.map((data) => (
              <li key={data}>
                <Chip
                  variant="outlined"
                  size="small"
                  label={`${data}`}
                  className={classes.chip}
                />
              </li>
            ))}
          </Box>
        ),
      },
    },
    {
      name: "Actions",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <Actions switchMode={`Edit`} data={tableMeta.rowData} />
            &nbsp;
            <Actions switchMode={`Delete`} data={tableMeta.rowData} />
          </div>
        ),
      },
    },
  ];

  return (
    <>
      <ToastContainer />
      <PageTitle
        title="User Control"
        button={
          isLoading ? (
            <span>&nbsp;</span>
          ) : (
            <Grow in={true}>
              <Actions switchMode={`Create`} />
            </Grow>
          )
        }
      />
      {isLoading ? (
        <Grid align="center" item xs={12}>
          <Box component="div" m={20}>
            <CircularProgress />
          </Box>
        </Grid>
      ) : (
        <Grow in={true}>
          <MUIDataTable
            title="All Access"
            columns={columns}
            data={usercontrols.map((usercontrol) => ({
              id: usercontrol._id,
              Order: usercontrol.index,
              Type: usercontrol.type,
              Label: usercontrol.label,
              Link: usercontrol.link,
              IconCode: usercontrol.iconcode,
              AccessType: usercontrol.accesstype,
              SideLink: usercontrol.sidelink,
            }))}
            options={{
              filterType: "checkbox",
              responsive: "simple",
              selectableRows: "none",
              selectableRowsOnClick: false,
            }}
          />
        </Grow>
      )}
    </>
  );
};

export default UserControl;
