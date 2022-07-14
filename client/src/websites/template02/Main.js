import React from "react";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "./header/Header";
import Hero from "./section/hero/Hero";
import Services from "./section/services/Services";
import About from "./section/about/About";
import Story from "./section/story/Story";
import BestServices from "./section/bestservices/BestServices";
import WorkShowcase from "./section/workshowcase/WorkShowcase";
import LatestNews from "./section/news/LatestNews";
import Testimonials from "./section/testimonials/Testimonials";
import Teams from "./section/team/Teams";
import Contacts from "./section/contact/Contacts";
import Footer from "./footer/Footer";

//API
import useLogoIcon from "./../../actions/logoicon/useLogoIcon";
import useContents from "./../../actions/cmscontent/useContents";
import useImages from "./../../actions/cmsimage/useImages";

//Styles
const useStyles = makeStyles(() => ({
  loadingBackground: {
    backgroundColor: "#0f0422",
    height: "100vh",
  },
  loadingLayout: {
    position: "relative",
    top: 300,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  loadingStyle: {
    color: "#951484",
    height: "80px !important",
    width: "80px !important",
  },
}));

const Main = () => {

  const classes = useStyles();
  const logo = useLogoIcon();
  const contents = useContents();
  const images = useImages();
  const logoLoading = logo.isLoading;
  const contentsLoading = contents.isLoading;
  const imagesLoading = images.isLoading;

  return (
    <>
      {logoLoading || contentsLoading || imagesLoading ? (
        <div className={classes.loadingBackground}>
          <div className={classes.loadingLayout}>
            <CircularProgress className={classes.loadingStyle} />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Services />
          <About />
          <Story />
          <BestServices />
          <WorkShowcase />
          <LatestNews />
          <Testimonials />
          <Teams />
          <Contacts />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
