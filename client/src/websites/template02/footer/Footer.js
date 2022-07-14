import React from "react";
import { Grid, Link, Container } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import useStyles from "./styles";
import useContents from "../../../actions/cmscontent/useContents";
import useImages from "../../../actions/cmsimage/useImages";

const Footer = () => {
  let dataTitle1,
    dataTitle2,
    dataContact1,
    dataContact2,
    dataCopyright,
    dataImage1,
    dataImage2,
    dataImage3,
    dataImage4,
    dataImage5,
    dataImage6;

  const classes = useStyles();

  const contents = useContents();
  const contentsLoading = contents.isLoading;
  const contentData = contents.data;

  const images = useImages();
  const imagesLoading = images.isLoading;
  const imagesData = images.data;

  if (contentsLoading) {
    console.log("");
  } else {
    const contentTitle1 = contentData.filter(content => content._id === "610a6c11400a1f07f8d981dd");
    const contentTitle2 = contentData.filter(content => content._id === "610a6c6e400a1f07f8d981df");

    const contentContact1 = contentData.filter(content => content._id === "610a6c40400a1f07f8d981de");
    const contentContact2 = contentData.filter(content => content._id === "610a6d1c400a1f07f8d981e0");

    const contentCopyright = contentData.filter(content => content._id === "610a71e0400a1f07f8d981e7");

    dataTitle1 = contentTitle1[0].content;
    dataContact1 = contentContact1[0].content;
    dataTitle2 = contentTitle2[0].content;
    dataContact2 = contentContact2[0].content;
    dataCopyright = contentCopyright[0].content;
  }

  if (imagesLoading) {
    console.log("");
  } else {
    const image1 = imagesData.filter(image => image._id === "610a7071400a1f07f8d981e1");
    const image2 = imagesData.filter(image => image._id === "610a7087400a1f07f8d981e2");
    const image3 = imagesData.filter(image => image._id === "610a709e400a1f07f8d981e3");
    const image4 = imagesData.filter(image => image._id === "610a70b8400a1f07f8d981e4");
    const image5 = imagesData.filter(image => image._id === "610a70f2400a1f07f8d981e5");
    const image6 = imagesData.filter(image => image._id === "610a7108400a1f07f8d981e6");

    dataImage1 = image1[0].image;
    dataImage2 = image2[0].image;
    dataImage3 = image3[0].image;
    dataImage4 = image4[0].image;
    dataImage5 = image5[0].image;
    dataImage6 = image6[0].image;
  }

  return (
    <>
      <div className={classes.footerLayout1}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={classes.footerContentCenter} align="center">
                <div className={classes.footerContentLayout1}>
                  {ReactHtmlParser(dataTitle1)}
                  {ReactHtmlParser(dataContact1)}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className={classes.footerContentCenter} align="center">
                <div className={classes.footerContentLayout1}>
                  {ReactHtmlParser(dataTitle2)}
                  {ReactHtmlParser(dataContact2)}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footerLayout2}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <div className={classes.footerImageCenter}>
                <img
                  className={classes.footerImageWord}
                  src={dataImage1}
                  alt="FooterWordImage"
                />
              </div>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <div className={classes.footerImageCenter}>
                <img
                  className={classes.footerImageWord}
                  src={dataImage2}
                  alt="FooterWordImage"
                />
              </div>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <div className={classes.footerImageCenter}>
                <img
                  className={classes.footerImageWord}
                  src={dataImage3}
                  alt="FooterWordImage"
                />
              </div>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <div className={classes.footerImageCenter}>
                <img
                  className={classes.footerImageWord}
                  src={dataImage4}
                  alt="FooterWordImage"
                />
              </div>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <div className={classes.footerImageCenter}>
                <img
                  className={classes.footerImageWord}
                  src={dataImage5}
                  alt="FooterWordImage"
                />
              </div>
            </Grid>
            <Grid item xs={4} sm={2} md={2} lg={2}>
              <div className={classes.footerImageCenter}>
                <img
                  className={classes.footerImageWord}
                  src={dataImage6}
                  alt="FooterWordImage"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footerLayout3}>
        <Container maxWidth="lg">
          <Grid container direction="row" alignItems="center">
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <div className={classes.footerCopyright}>
                {ReactHtmlParser(dataCopyright)}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <ul className={classes.footerMenu}>
                <li className={classes.footerLinkLayout}>
                  <Link className={classes.footerLink} component="button">
                    About US
                  </Link>
                  <span className="footerLinkStyle">&nbsp;</span>
                </li>
                <li className={classes.footerLinkLayout}>
                  <Link className={classes.footerLink} component="button">
                    Privacy Policy
                  </Link>
                  <span className="footerLinkStyle">&nbsp;</span>
                </li>
                <li className={classes.footerLinkLayout}>
                  <Link className={classes.footerLink} component="button">
                    Cookie Policy
                  </Link>
                  <span className="footerLinkStyle">&nbsp;</span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Footer;
