import React from "react";
import { Switch, Route, useRouteMatch, withRouter } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "./section/hero/Hero";
import Features from "./section/features/Features";
import Products1 from "./section/products1/Products";
import PostProducts from "./section/postproducts/PostProducts";
import Products2 from "./section/products2/Products";
import Products3 from "./section/products3/Products";
import Tree from "./section/tree/Tree";
import Contacts from "./section/contacts/Contacts";

//Pages
import WorkShop from "./pages/workshop/Main";

const Main = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Header />
          <Hero />
          <Features />
          <Products1 />
          <PostProducts />
          <Products2 />
          <Products3 />
          <Tree />
          <Contacts />
          <Footer />
        </Route>
        <Route path={`${path}/workshop`}>
          <Header />
          <WorkShop />
          <Footer />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(Main);
