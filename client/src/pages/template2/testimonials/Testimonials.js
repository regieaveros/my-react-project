import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import MUIDataTable from "mui-datatables";
import ReactHtmlParser from "react-html-parser";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Lightbox, { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";
import useStyles from "./styles";
import Actions from "./action/Actions";
import useTestimonials from "../../../actions/template2/testimonials/useTestimonials";

const Testimonials = () => {
  const classes = useStyles();

  const { data: temp2Testimonials, isLoading } = useTestimonials();

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
    { name: "Position" },
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
      name: "Description",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div className={classes.contentLayout}>{ReactHtmlParser(value)}</div>
        ),
      },
    },
    {
      name: "Rating",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            <Rating value={parseInt(value)} readOnly />
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
        title="Template 2 - Testimonials"
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
                  title="Template 2 - Testimonials"
                  columns={columns}
                  data={temp2Testimonials.map((testimonial) => ({
                    id: testimonial._id,
                    Name: testimonial.name,
                    Position: testimonial.position,
                    Image: testimonial.image,
                    Description: testimonial.description,
                    Rating: testimonial.rating,
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

export default Testimonials;
