import React from "react";
import { CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Moment from "react-moment";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Actions from "./action/Actions";
import useMessages from "../../actions/message/useMessages";

const Messages = () => {
  const { data: messages, isLoading } = useMessages();

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
    { name: "Fullname" },
    { name: "Email" },
    { name: "Subject" },
    { name: "Message" },
    { name: "CreatedAt", label: "Created At" },
    {
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <Actions switchMode={`Delete`} data={tableMeta.rowData} />
          </div>
        ),
      },
    },
  ];

  return (
    <>
      <ToastContainer />
      <PageTitle title="Messages" />
      {isLoading ? (
        <Box align="center" component="div" m={20}>
          <CircularProgress />
        </Box>
      ) : (
        <Grow in={true}>
          <MUIDataTable
            title="All Messages"
            columns={columns}
            data={messages.map((message) => ({
              id: message._id,
              Fullname: message.fullname,
              Email: message.email,
              Subject: message.subject,
              Message: message.message,
              CreatedAt: (
                <Moment format="YYYY/MM/DD | hh:mm:ss">
                  {message.createdAt}
                </Moment>
              ),
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

export default Messages;
