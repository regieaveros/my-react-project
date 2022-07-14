import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import Icons from '../../global/Icons';
import useUserControls from "../../actions/usercontrol/useUserControls";

function Sidebar({ location }) {

  let userLogin, structure;

  const user = JSON.parse(localStorage.getItem('profile'));
  
  const classes = useStyles();
  const theme = useTheme();

  const { data: usercontrols, isSuccess } = useUserControls();

  const { isSidebarOpened } = useLayoutState();
  const layoutDispatch = useLayoutDispatch();

  const [isPermanent, setPermanent] = useState(true);

  if(isSuccess) {

      userLogin = user.result.type;
      structure = usercontrols.filter(user => user.accesstype.includes(userLogin)).map(result => {
          if(result.sidelink.length) {
              return {
                  id: result.index,
                  type: result.type,
                  label: result.label,
                  link: result.link,
                  icon: <div className={classes.iconSize}><Icons icon={`${result.iconcode}`} /></div>,
                  children: result.sidelink,
              }
          } else {
              return {
                  id: result.index,
                  type: result.type,
                  label: result.label,
                  link: result.link,
                  icon: <div className={classes.iconSize}><Icons icon={`${result.iconcode}`} /></div>,
              }
          }   
      });
      
  }
  
  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {isSuccess ?
            structure.map(link => (
                <SidebarLink
                    key={link.id}
                    location={location}
                    isSidebarOpened={isSidebarOpened}
                    {...link}
                />
            ))
        :
            <div>&nbsp;</div>
        }
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
