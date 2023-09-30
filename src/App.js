import React from "react";
import Home from "./Home";
import FilterSearch from "./FilterSearch/FilterSearch";
import Header from "./Header/Header";
import NotFound from "./NotFound/NotFound";
import RegionRoute from "./Region/RegionRoute";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./CountryDetails/CountryDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <FilterSearch></FilterSearch>
              <Home></Home>
              <CountryDetails></CountryDetails>
            </Route>
            <Route path="/country/:name">
              <CountryDetails></CountryDetails>
            </Route>
            <Route path="/country/:name">
              <FilterSearch></FilterSearch>
            </Route>
            <Route path="/region/:name">
            <FilterSearch></FilterSearch>
              <RegionRoute></RegionRoute>
            </Route>
            <Route path="*">
            <NotFound></NotFound>
          </Route>       
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
