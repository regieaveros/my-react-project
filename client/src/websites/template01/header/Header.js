import React, { useState, useEffect, useCallback } from "react";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
import {
  AppBar,
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
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import Icons from "../../../global/Icons";
import { HamburgerCollapse } from "react-animated-burgers";
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
  let logoIcon, dataList, dataTagline, dataIcon;

  const history = useHistory();
  const classes = useStyles();
  const [show, setShow] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [linkId, setLinkId] = useState("");

  const { data: logoIcons, isLoading, isSuccess } = useLogoIcon();

  //Page
  const workShopPage = (id) => {
    history.push("/template-1/workshop/");
    setLinkId(id);
  };

  //Mobile View
  const toggleWorkShopPage = (id) => {
    history.push("/template-1/workshop/");
    toggleButton();
    setLinkId(id);
  };

  //Desktop View
  const homeLink = (id) => {
    history.push("/template-1/");
    setLinkId(id);
  };

  //Mobile View
  const toggleMobileLink = (id) => {
    history.push("/template-1/");
    setLinkId(id);
    toggleButton();
  };

  if (isSuccess) {
    logoIcon = logoIcons.filter(iconList => iconList._id === "62a8af02240f8329a43c7647");
    dataList = logoIcon[0];
    dataTagline = dataList.tagline;
    dataIcon = dataList.icon;
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
    const yOffset = -70;
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
      name: `Features`,
      link: `#features`,
    },
    {
      id: 3,
      name: `Work Shop`,
      link: `#`,
    },
    {
      id: 4,
      name: `Products`,
      link: `#products`,
    },
    {
      id: 5,
      name: `Materials`,
      link: `#materials`,
    },
    {
      id: 6,
      name: `Choose Us`,
      link: `#choose-us`,
    },
    {
      id: 7,
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
      <AppBar className={classes.layout}>
        <Box
          className={classes.linkLayout}
          display="flex"
          justifyContent="center"
        >
          <Box flexGrow={1}>
            <Toolbar>
              {isLoading ? (
                <>
                  <Typography component="span">
                    <Skeleton variant="circle" width={50} height={50} />
                  </Typography>
                  <Typography className={classes.logoSkeleton} component="span">
                    <Skeleton width={130} height={30} />
                  </Typography>
                </>
              ) : (
                <Typography>
                  <HashLink
                    className={classes.linkLogo}
                    smooth
                    to="#"
                    onClick={homeLink}
                  >
                    <img
                      className={
                        show ? classes.logoLayoutScroll : classes.logoLayout
                      }
                      src={isSuccess ? dataList.image : ""}
                      alt="WoodenWorkShop"
                    />
                    {isSuccess ? dataList.name : ""}
                  </HashLink>
                </Typography>
              )}
            </Toolbar>
          </Box>
          <Box>
            <Hidden only={["xs", "sm", "md"]}>
              <Toolbar>
                {isLoading ? (
                  <>
                    <Typography
                      component="span"
                      className={classes.linkSkeleton}
                    >
                      <Skeleton />
                    </Typography>
                    <Typography
                      component="span"
                      className={classes.linkSkeleton}
                    >
                      <Skeleton />
                    </Typography>
                    <Typography
                      component="span"
                      className={classes.linkSkeleton}
                    >
                      <Skeleton />
                    </Typography>
                    <Typography
                      component="span"
                      className={classes.linkSkeleton}
                    >
                      <Skeleton />
                    </Typography>
                  </>
                ) : (
                  <Typography>
                    {links.map((listLink) => (
                      <span key={listLink.id} className={classes.linkStyle}>
                        <HashLink
                          className={
                            linkId === listLink.id
                              ? classNames(classes.link, classes.activeLink)
                              : classes.link
                          }
                          onClick={
                            listLink.id === 3
                              ? () => workShopPage(listLink.id)
                              : () => homeLink(listLink.id)
                          }
                          scroll={(el) => scrollWithOffset(el)}
                          to={listLink.link}
                        >
                          {listLink.name}
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
                  <Skeleton variant="rect" width={50} height={45} />
                ) : (
                  <HamburgerCollapse
                    className={classes.menuButton}
                    {...{ isActive, toggleButton }}
                    barColor="#b89d77"
                  />
                )}
                <Drawer anchor="top" open={isActive} onClose={toggleButton}>
                  <div className={classes.drawerLayout}>
                    {links.map((listLink) => (
                      <ListItem
                        key={listLink.id}
                        className={classes.listItemButton}
                        button
                      >
                        <ListItemText
                          className={
                            linkId === listLink.id
                              ? classNames(
                                  classes.listItemLayout,
                                  classes.activeListItemLayout,
                                )
                              : classes.listItemLayout
                          }
                        >
                          <HashLink
                            onClick={
                              listLink.id === 3
                                ? () => toggleWorkShopPage(listLink.id)
                                : () => toggleMobileLink(listLink.id)
                            }
                            scroll={(el) => scrollWithOffset(el)}
                            to={listLink.link}
                            className={classes.menuTextLayout}
                          >
                            {listLink.name}
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
