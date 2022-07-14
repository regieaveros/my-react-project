import React from "react";
import { CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle/PageTitle";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Actions from "./action/Actions";
import useContents from "../../actions/cmscontent/useContents";

const Contents = () => {
  const classes = useStyles();

  const { data: contents, isLoading } = useContents();

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
    { name: "Title" },
    {
      name: "Content",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div className={classes.messageLayout}>{ReactHtmlParser(value)}</div>
        ),
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
        title="Contents"
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
        <Box align="center" component="div" m={20}>
          <CircularProgress />
        </Box>
      ) : (
        <Grow in={true}>
          <MUIDataTable
            title="All Contents"
            columns={columns}
            data={contents.map((content) => ({
              id: content._id,
              Title: content.title,
              Content: content.content,
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

export default Contents;
