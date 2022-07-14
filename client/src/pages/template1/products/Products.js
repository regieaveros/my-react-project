import React from "react";
import { Grid, CircularProgress, Box, Grow } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import ReactHtmlParser from "react-html-parser";
import PageTitle from "../../../components/PageTitle/PageTitle";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";
import useStyles from "./styles";
import Actions from "./action/Actions";
import useProducts from "../../../actions/template1/products/useProducts";

const Products = () => {
  const classes = useStyles();

  const { data: tempProducts, isLoading } = useProducts();

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
      name: "Image",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <a href={`${value}`}>
                <img src={value} alt="CMS Template1 FeatureImage" width={150} />
              </a>
            </SRLWrapper>
          </SimpleReactLightbox>
        ),
      },
    },
    {
      name: "Price",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>${value}</div>
        ),
      },
    },
    {
      name: "PricePercentage",
      label: "Price Percentage",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>{value}%</div>
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
            <div style={{ padding: 4 }} />
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
        title="Template 1 - Products"
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
                  title="Template 1 - Products"
                  columns={columns}
                  data={tempProducts.map((products) => ({
                    id: products._id,
                    Title: products.title,
                    Content: products.content,
                    Image: products.image,
                    Price: products.originalPrice,
                    PricePercentage: products.pricePercentage,
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

export default Products;
