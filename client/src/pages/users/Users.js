import React from "react";
import { CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Moment from "react-moment";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUsers from "../../actions/users/useUsers";
import Actions from "./action/Actions";

const Users = () => {
  const { data: users, isLoading } = useUsers();

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
    { name: "Email" },
    { name: "AccessType", label: "Access Type" },
    { name: "CreatedAt", label: "Created At" },
    { name: "UpdatedAt", label: "Updated At" },
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
        title="Users"
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
            title="All Users"
            columns={columns}
            data={users.map((user) => ({
              id: user._id,
              Name: user.name,
              Email: user.email,
              AccessType: user.type,
              CreatedAt: (
                <Moment format="YYYY/MM/DD | hh:mm:ss">{user.createdAt}</Moment>
              ),
              UpdatedAt: (
                <Moment format="YYYY/MM/DD | hh:mm:ss">{user.updatedAt}</Moment>
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

export default Users;
