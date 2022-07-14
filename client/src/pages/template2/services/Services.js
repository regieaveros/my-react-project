import React from "react";
import {
  Grid,
  CircularProgress,
  Box,
  Grow,
  Typography,
  Link,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import useStyles from "./styles";
import Actions from "./action/Actions";
import Icons from "../../../global/Icons";
import useServices from "../../../actions/template2/services/useServices";

const Services = () => {
  const classes = useStyles();

  const { data: temp2Services, isLoading } = useServices();

  const columns = [
    {
      name: "id",
      options: {
        display: false,
        filter: false,
        sort: false,
        viewColumns: false,
        download: false,
      },
    },
    { name: "Name" },
    {
      name: "Link",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Typography variant="body1">
              <Link href={value}>{value}</Link>
            </Typography>
          );
        },
      },
    },
    {
      name: "Icon",
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
      name: "Actions",
      options: {
        filter: false,
        sort: false,
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
        title="Template 2 - Services"
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {isLoading ? (
            <Grid align="center" item xs={12}>
              <Box component="div" m={20}>
                <CircularProgress />
              </Box>
            </Grid>
          ) : (
            <Grow in={true}>
              <Grid item xs={12}>
                <MUIDataTable
                  title="Template 2 - Services"
                  columns={columns}
                  data={temp2Services.map((services) => ({
                    id: services._id,
                    Name: services.name,
                    Link: services.link,
                    Icon: services.icon,
                  }))}
                  options={{
                    filterType: "checkbox",
                    responsive: "simple",
                    selectableRows: "none",
                    selectableRowsOnClick: false,
                  }}
                />
              </Grid>
            </Grow>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
