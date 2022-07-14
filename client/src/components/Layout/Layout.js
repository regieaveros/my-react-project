import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// context
import { useLayoutState } from "../../context/LayoutContext";

// pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Profile from "../../pages/profile/Profile";
import Users from "../../pages/users/Users";
import AccessCategory from "../../pages/accesscategory/AccessCategory";
import UserControl from "../../pages/usercontrol/UserControl";
import Notes from "../../pages/notes/Notes";
import LogoIcon from "../../pages/logoicon/LogoIcon";
import Images from "../../pages/cmsimages/Images";
import Contents from "../../pages/cmscontents/Contents";
import Messages from "../../pages/message/Messages";

//Post Type - Template 1
import temp1Features from "../../pages/template1/features/Features";
import temp1Slider from "../../pages/template1/slider/Slider";
import temp1Products from "../../pages/template1/products/Products";
import temp1SocialMedia from "../../pages/template1/socialmedia/SocialMedia";
import temp1Teams from "../../pages/template1/teams/Teams";

//Post Type - Template 2
import temp2Services from "../../pages/template2/services/Services";
import temp2WorkShowcase from "../../pages/template2/work_showcase/WorkShowcase";
import temp2News from "../../pages/template2/news/News";
import temp2BestServices from "../../pages/template2/best_services/BestServices";
import temp2Testimonials from "../../pages/template2/testimonials/Testimonials";
import temp2Professionals from "../../pages/template2/professionals/Professionals";
import temp2SocialMedia from "../../pages/template2/socialmedia/SocialMedia";


function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <>
      <div className={classes.root}>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/profile" component={Profile} />
            <Route path="/app/users" component={Users} />
            <Route path="/app/access-category" component={AccessCategory} />
            <Route path="/app/user-control" component={UserControl} />
            <Route path="/app/notes" component={Notes} />
            <Route path="/app/logo-icon" component={LogoIcon} />
            <Route path="/app/images" component={Images} />
            <Route path="/app/contents" component={Contents} />
            <Route path="/app/messages" component={Messages} />
            <Route path="/app/wood-features" component={temp1Features} />
            <Route path="/app/wood-slider" component={temp1Slider} />
            <Route path="/app/wood-products" component={temp1Products} />
            <Route path="/app/wood-social-media" component={temp1SocialMedia} />
            <Route path="/app/wood-our-teams" component={temp1Teams} />
            <Route 
              path="/app/template2-services" 
              component={temp2Services}
            />
            <Route
              path="/app/template2-work-showcase"
              component={temp2WorkShowcase}
            />
            <Route path="/app/template2-news" component={temp2News} />
            <Route
              path="/app/template2-best-services"
              component={temp2BestServices}
            />
            <Route
              path="/app/template2-testimonials"
              component={temp2Testimonials}
            />
            <Route
              path="/app/template2-professionals"
              component={temp2Professionals}
            />
            <Route
              path="/app/template2-social-media"
              component={temp2SocialMedia}
            />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default withRouter(Layout);
