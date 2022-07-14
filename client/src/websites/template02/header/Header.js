import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
  Fab,
  Zoom,
  Box,
  Hidden,
  Drawer,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import classNames from "classnames";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { HamburgerSpring } from "react-animated-burgers";
import useLogoIcon from "../../../actions/logoicon/useLogoIcon";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 110,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top",
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick}>{children}</div>
    </Zoom>
  );
}

const Header = () => {
  let dataList, dataTagline, dataIcon;

  const classes = useStyles();

  const history = useHistory();

  const [show, setShow] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [linkId, setLinkId] = useState("");

  const { data: logoicon, isLoading, isSuccess } = useLogoIcon();

  //Page
  const digitalMarketPage = (id) => {
    history.push("/template-2/");
    setLinkId(id);
  };

  //Mobile View
  const toggleDigitalMarketPage = (id) => {
    history.push("/template-2/");
    toggleButton();
    setLinkId(id);
  };

  //Desktop View
  const homeLink = (id) => {
    history.push("/template-2/");
    setLinkId(id);
  };

  //Mobile View
  const toggleMobileLink = (id) => {
    history.push("/template-2/");
    setLinkId(id);
    toggleButton();
  };

  if (isSuccess) {
    dataList = logoicon.filter(iconList => iconList._id === "62a8af68240f8329a43c7648");
    dataTagline = dataList[0].tagline;
    dataIcon = dataList[0].icon;
  } else {
    dataTagline = "Loading....";
  }

  const navbarControl = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => window.removeEventListener("scroll", navbarControl);
  }, []);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    [],
  );

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -94;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const links = [
    {
      id: 1,
      name: `Home`,
      link: `#`,
    },
    {
      id: 2,
      name: `Services`,
      link: `#services`,
    },
    {
      id: 3,
      name: `About Us`,
      link: `#about-us`,
    },
    {
      id: 4,
      name: `Story`,
      link: `#story`,
    },
    {
      id: 5,
      name: `Work Showcase`,
      link: `#work-showcase`,
    },
    {
      id: 6,
      name: `News`,
      link: `#news`,
    },
    {
      id: 7,
      name: `Testimonials`,
      link: `#testimonials`,
    },
    {
      id: 8,
      name: `Teams`,
      link: `#teams`,
    },
    {
      id: 9,
      name: `Contact Us`,
      link: `#contact-us`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{ReactHtmlParser(dataTagline)}</title>
        <link rel="shortcut icon" href={dataIcon} />
      </Helmet>
      <AppBar
        className={
          isActive
            ? classNames(classes.headerLayout, classes.activeBackground)
            : classNames(
                classes.headerLayout,
                show ? classes.scrollBackground : classes.defaultBackground,
              )
        }
      >
        <Container maxWidth="lg">
          <Box
            className={
              show ? classes.headerScrollLayout : classes.hederLinkLayout
            }
            display="flex"
            justifyContent="center"
          >
            <Box className={classes.linkLogoLayout} flexGrow={1}>
              <Toolbar>
                {isLoading ? (
                  <></>
                ) : (
                  <Typography>
                    <HashLink
                      className={classes.linkLogo}
                      smooth
                      to="#"
                      onClick={homeLink}
                    >
                      <img
                        className={classes.logoLayout}
                        src={dataList[0].image}
                        alt="DigitalStudioImage"
                      />
                      {isSuccess ? dataList[0].name : ""}
                    </HashLink>
                  </Typography>
                )}
              </Toolbar>
            </Box>
            <Box>
              <Hidden only={["xs", "sm", "md"]}>
                <Toolbar>
                  {isLoading ? (
                    <></>
                  ) : (
                    <Typography>
                      {links.map((listLink) => (
                        <span key={listLink.id}>
                          <HashLink
                            className={
                              linkId === listLink.id
                                ? classNames(classes.link, classes.activeLink)
                                : classes.link
                            }
                            onClick={
                              listLink.id === 3
                                ? () => digitalMarketPage(listLink.id)
                                : () => homeLink(listLink.id)
                            }
                            scroll={(el) => scrollWithOffset(el)}
                            to={listLink.link}
                          >
                            {listLink.name}
                            <span
                              className={
                                linkId === listLink.id
                                  ? classNames(`linkStyle`, `activeLink`)
                                  : `linkStyle`
                              }
                            >
                              &nbsp;
                            </span>
                          </HashLink>
                        </span>
                      ))}
                    </Typography>
                  )}
                </Toolbar>
              </Hidden>
              <Hidden only={["lg", "xl"]}>
                <Toolbar>
                  {isLoading ? (
                    <></>
                  ) : (
                    <HamburgerSpring
                      {...{ isActive, toggleButton }}
                      barColor="#fafafa"
                    />
                  )}
                  <Drawer anchor="top" open={isActive} onClose={toggleButton}>
                    <div
                      className={
                        show
                          ? classNames(
                              classes.drawerLayout,
                              classes.drawerLayoutScroll,
                            )
                          : classNames(
                              classes.drawerLayout,
                              classes.drawerLayoutTop,
                            )
                      }
                    >
                      {links.map((listLink) => (
                        <ListItem
                          key={listLink.id}
                          className={classes.listItemButton}
                        >
                          <ListItemText>
                            <HashLink
                              onClick={
                                listLink.id === 3
                                  ? () => toggleDigitalMarketPage(listLink.id)
                                  : () => toggleMobileLink(listLink.id)
                              }
                              scroll={(el) => scrollWithOffset(el)}
                              to={listLink.link}
                              className={classes.menuTextLayout}
                            >
                              {listLink.name}
                              <span
                                className={
                                  linkId === listLink.id
                                    ? classNames(
                                        `mobileLinkStyle`,
                                        `mobileActiveLink`,
                                      )
                                    : `mobileLinkStyle`
                                }
                              >
                                &nbsp;
                              </span>
                            </HashLink>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </div>
                  </Drawer>
                </Toolbar>
              </Hidden>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top" />
      <div className={classes.root}>
        <ScrollTop>
          <Fab
            className={classes.iconLayout}
            size="small"
            aria-label="scroll back to top"
          >
            <Icons icon={`KeyboardArrowUp`} />
          </Fab>
        </ScrollTop>
      </div>
    </>
  );
};

export default Header;
