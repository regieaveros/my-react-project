import React from "react";
import { CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useImages from "../../actions/cmsimage/useImages";
import Actions from "./action/Actions";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Images = () => {
  const { data: imageLists, isLoading } = useImages();

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
    { name: "Title" },
    {
      name: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <a href={`${value}`}>
                  <img src={value} alt="CMSImage" width={200} />
                </a>
              </SRLWrapper>
            </SimpleReactLightbox>
          </>
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
        title="Images"
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
            title="All Images"
            columns={columns}
            data={imageLists.map((imageList) => ({
              id: imageList._id,
              Title: imageList.title,
              Image: imageList.image,
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

export default Images;
