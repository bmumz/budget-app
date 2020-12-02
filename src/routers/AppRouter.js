import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import AddExpense from "../Components/AddExpense";
import EditExpense from "../Components/EditExpense";
import Help from "../Components/Help";
import NotFound from "../Components/404";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
