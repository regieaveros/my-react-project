import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grow,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAccesses from "../../actions/access/useAccesses";
import Actions from "./action/Actions";

const AccessCategory = () => {
  const classes = useStyles();

  const { data: access, isLoading } = useAccesses();

  return (
    <>
      <ToastContainer />
      <PageTitle
        title="Access Category"
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
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Access Table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ width: 1000 }}>
                    Access Type
                  </TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {access.map((list) => (
                  <TableRow key={list._id}>
                    <TableCell>{list.type}</TableCell>
                    <TableCell>
                      <Actions switchMode={`Edit`} data={list} />
                      &nbsp;
                      <Actions switchMode={`Delete`} data={list} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grow>
      )}
    </>
  );
};

export default AccessCategory;
