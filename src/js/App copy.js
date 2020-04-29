import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./intro/Main";
import Header from "./Header";
import Contact from "./Contact";
import Blogs from "./Blogs/Blogs";
import AddNewPost from "./Blogs/AddNewPost";
import Drafts from "./Blogs/Drafts";
import ViewPost from "./Blogs/ViewPost";
import projects from "./Projects/Projects";
import Notfound from "./notFound";

const routing = (
  <div className="main">
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/create" component={AddNewPost} />
            <Route exact path="/blogs/drafts" component={Drafts} />
            <Route path="/blogs/:id" component={ViewPost} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={projects} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </div>
      <hr className="footer" />
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));
