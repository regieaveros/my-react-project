import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import ReactHtmlParser from "react-html-parser";
import Lightbox, { SRLWrapper } from "simple-react-lightbox";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import Actions from "./action/Actions";
import useTeams from "../../../actions/template1/teams/useTeams";
import DefaultPhoto from "../../../images/photo.png";

const Teams = () => {
  const { data: teams, isLoading } = useTeams();

  const options = {
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    caption: {
      showCaption: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

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
      name: "Photo",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            {!value ? (
              <Lightbox>
                <SRLWrapper options={options}>
                  <a href={`${DefaultPhoto}`}>
                    <img
                      src={DefaultPhoto}
                      alt="TeamPhoto"
                      height={100}
                      width={120}
                    />
                  </a>
                </SRLWrapper>
              </Lightbox>
            ) : (
              <Lightbox>
                <SRLWrapper options={options}>
                  <a href={`${value}`}>
                    <img src={value} alt="TeamPhoto" height={120} width={120} />
                  </a>
                </SRLWrapper>
              </Lightbox>
            )}
          </>
        ),
      },
    },
    { name: "Position" },
    { name: "Contact" },
    { name: "Email" },
    {
      name: "Description",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>{ReactHtmlParser(value)}</>
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
            <br />
            <br />
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
        title="Template 1 - Our Teams"
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
                  title="Template 1 Our Teams"
                  columns={columns}
                  data={teams.map((team) => ({
                    id: team._id,
                    Name: team.name,
                    Position: team.position,
                    Contact: team.contact,
                    Email: team.email,
                    Description: team.description,
                    Photo: team.image,
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

export default Teams;
