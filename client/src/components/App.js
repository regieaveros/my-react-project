import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

//web templates
import Temp01 from '.././websites/template01/Main';
import Temp02 from '.././websites/template02/Main';
import Temp03 from '.././websites/template03/Main';
import Temp04 from '.././websites/template04/Main';
import Temp05 from '.././websites/template05/Main';
import Temp06 from '.././websites/template06/Main';
import Temp07 from '.././websites/template07/Main';
import Temp08 from '.././websites/template08/Main';
import Temp09 from '.././websites/template09/Main';
import Temp10 from '.././websites/template10/Main';

// pages
import Error from "../pages/error";
import Login from "../pages/login";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PublicRoute path="/template-1" component={Temp01} />
        <PublicRoute path="/template-2" component={Temp02} />
        <PublicRoute path="/template-3" component={Temp03} />
        <PublicRoute path="/template-4" component={Temp04} />
        <PublicRoute path="/template-5" component={Temp05} />
        <PublicRoute path="/template-6" component={Temp06} />
        <PublicRoute path="/template-7" component={Temp07} />
        <PublicRoute path="/template-8" component={Temp08} />
        <PublicRoute path="/template-9" component={Temp09} />
        <PublicRoute path="/template-10" component={Temp10} />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
