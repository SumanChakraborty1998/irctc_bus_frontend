import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginModel from "../Components/LoginModel/LoginModel";
import Navbar from "../Components/NAVBAR/Navbar";
import ReviewBooking from "../Components/ReviewBooking/ReviewBooking";
import Home from "../Pages/Home";
import SearchResult from "../Pages/SearchResult";
import SignUp from "../Components/SignUp/SignUp";
import PaymentPage from "../Components/PaymentPage/PaymentPage";

export const Routes = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Navbar openForm={handleOpen} />
      <LoginModel handleClose={handleClose} open={open} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/buses">
          <SearchResult />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/review">
          <ReviewBooking />
        </Route>
      </Switch>
    </div>
  );
};
