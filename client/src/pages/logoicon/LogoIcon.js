import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle/PageTitle";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";
import Actions from "./action/Actions";
import useLogoIcon from "../../actions/logoicon/useLogoIcon";

const LogoIcon = () => {
  const { data: logoicons, isLoading } = useLogoIcon();

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
    { name: "Name", label: "Website Name" },
    { name: "Tagline" },
    {
      name: "Logo",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <a href={`${value}`}>
                <img src={value} alt="CMSImage" width={120} />
              </a>
            </SRLWrapper>
          </SimpleReactLightbox>
        ),
      },
    },
    {
      name: "Icon",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <a href={`${value}`}>
                <img src={value} alt="CMSIcon" width={52} height={45} />
              </a>
            </SRLWrapper>
          </SimpleReactLightbox>
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
        title="Logo & Icon"
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
                  title="Logo & Icon"
                  columns={columns}
                  data={logoicons.map((logoicon) => ({
                    id: logoicon._id,
                    Name: logoicon.name,
                    Tagline: logoicon.tagline,
                    Logo: logoicon.image,
                    Icon: logoicon.icon,
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

export default LogoIcon;
