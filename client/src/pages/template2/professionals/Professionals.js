import React from "react";
import { Grid, CircularProgress, Box, Grow, Button } from "@material-ui/core";
import useStyles from "./styles";
import MUIDataTable from "mui-datatables";
import Icons from "../../../global/Icons";
import PageTitle from "../../../components/PageTitle/PageTitle";
import Lightbox, { SRLWrapper } from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";
import Actions from "./action/Actions";
import useProfessionals from "../../../actions/template2/professionals/useProfessionals";

const Professionals = () => {
  const classes = useStyles();

  const { data: temp2Professionals, isLoading } = useProfessionals();

  if (isLoading) {
    console.log("");
  } else {
    console.log(temp2Professionals);
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
      name: "SocialMedia",
      label: "Social Media",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            {value.map((social_media) => (
              <div key={social_media.icontype}>
                Icon Type:
                <span className={classes.iconLayout}>
                  <Icons icon={social_media.icontype} />
                </span>
                <br />
                Link:
                <Button
                  size="small"
                  color="primary"
                  href={`${social_media.link}`}
                  target="_blank"
                  style={{ textTransform: "none" }}
                >
                  {`${social_media.link}`}
                </Button>
              </div>
            ))}
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
        title="Template 2 - Professionals"
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
                  title="Template 2 - Professionals"
                  columns={columns}
                  data={temp2Professionals.map((professional) => ({
                    id: professional._id,
                    Name: professional.name,
                    Position: professional.position,
                    Image: professional.image,
                    SocialMedia: professional.socialMedia,
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

export default Professionals;
