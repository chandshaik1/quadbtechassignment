// app.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";
import ApplyJob from "./components/ApplyJob";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/jobs" component={JobList} />
        <Route path="/job/:id" component={JobDetail} />
        <Route path="/apply/:id" component={ApplyJob} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </div>
  );
}

export default App;
