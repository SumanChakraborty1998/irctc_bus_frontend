import React,{useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginModel from '../Components/LoginModel/LoginModel'
import Navbar from '../Components/NAVBAR/Navbar'
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
            <LoginModel handleClose={handleClose} open={open}  />
            <Switch>
                  <Route exact  path="/">
                        <Home />
                  </Route>
                  <Route path="/buses">
                        <SearchResult />
                  </Route>
            </Switch>
        </div>
    )
}