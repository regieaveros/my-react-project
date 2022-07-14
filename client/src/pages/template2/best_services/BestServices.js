import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import useStyles from "./styles";
import Actions from "./action/Actions";
import Icons from "../../../global/Icons";
import useBestServices from "../../../actions/template2/best_services/useBestServices";

const BestServices = () => {
  const classes = useStyles();

  const { data: temp2BestServices, isLoading } = useBestServices();

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
      name: "Content",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div className={classes.contentLayout}>{ReactHtmlParser(value)}</div>
        ),
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
        title="Template 2 - Best Services"
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
                  title="Template 2 - Best Services"
                  columns={columns}
                  data={temp2BestServices.map((bestService) => ({
                    id: bestService._id,
                    Name: bestService.name,
                    Content: bestService.content,
                    Icon: bestService.icon,
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

export default BestServices;
