import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Lightbox, { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";
import Actions from "./action/Actions";
import useNews from "../../../actions/template2/news/useNews";

const News = () => {
  const { data: temp2News, isLoading } = useNews();

  if (isLoading) {
    console.log("");
  } else {
    console.log(temp2News);
  }

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
      name: "Tag",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => <>{value}</>,
      },
    },
    {
      name: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <Lightbox>
            <SRLWrapper options={options}>
              <a href={`${value}`}>
                <img src={value} alt="CMS Template1 FeatureImage" width={150} />
              </a>
            </SRLWrapper>
          </Lightbox>
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
        title="Template 2 - News"
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
                  title="Template 2 - News"
                  columns={columns}
                  data={temp2News.map((news) => ({
                    id: news._id,
                    Title: news.title,
                    Tag: news.tag,
                    Image: news.image,
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

export default News;
