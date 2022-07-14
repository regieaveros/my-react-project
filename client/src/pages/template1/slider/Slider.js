import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Moment from "react-moment";
import ReactHtmlParser from "react-html-parser";
import PageTitle from "../../../components/PageTitle/PageTitle";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";
import useStyles from "./styles";
import Actions from "./action/Actions";
import useSlider from "../../../actions/template1/slider/useSlider";

const Slider = () => {
  const classes = useStyles();

  const { data: tempSlider, isLoading } = useSlider();

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
      name: "Watermark",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <a href={`${value}`}>
                <img
                  src={value}
                  alt="CMS Template1 SliderWatermark"
                  width={120}
                />
              </a>
            </SRLWrapper>
          </SimpleReactLightbox>
        ),
      },
    },
    { name: "CreatedAt", label: "Created At" },
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
        title="Template 1 - Slider"
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
                  title="Template 1 Features"
                  columns={columns}
                  data={tempSlider.map((slider) => ({
                    id: slider._id,
                    Title: slider.title,
                    Content: slider.content,
                    Watermark: slider.watermark,
                    CreatedAt: <Moment format="LL">{slider.createdAt}</Moment>,
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

export default Slider;
