import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import User from "./User";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <About name="About" />}></Route>
          <Route
            exact
            path="/contact"
            render={() => <Contact name="Contact" />}
          ></Route>
          <Route
            exact
            path="/user/:fname/:lname"
            render={() => <User name="User" />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Main;

/*
React-Router helps you to create a Single Page Application (SPA) , so instead of having multiple pages 
you can have a single page and you can have small companents that can be called conditionally without 
refreshing or redering the whole page ,we dont need to request for the page every time we can just render
the particular component that we require.

Use 'component' attribute with <Route> if you dont want to pass props else use 'render'.
'component' attribute calls the whole component every time called if content is updated or not,
but 'render' attribute calls component only when it is updated and only the part which is updated.
Otherwise performance wise both are same.
*/
