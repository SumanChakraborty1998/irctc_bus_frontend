import React,{useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginModel from '../Components/LoginModel/LoginModel'
import { Signup } from '../Components/LoginModel/Signup'
import Navbar from '../Components/NAVBAR/Navbar'
import ReviewBooking from '../Components/ReviewBooking/ReviewBooking'
import Home from '../Pages/Home'
import SearchResult from '../Pages/SearchResult'

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
          <Signup />
        </Route>
        <Route path="/review">
          <ReviewBooking />
        </Route>
      </Switch>
    </div>
  );
}
