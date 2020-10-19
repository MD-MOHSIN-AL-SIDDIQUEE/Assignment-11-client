import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Auth/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard';
import AddService from './Component/Dashboard/AddService/AddService';
import OrderList from './Component/Dashboard/OrderList/OrderList';

import ReviewInfo from './Component/Dashboard/Review/Review';
import MakeAdmin from './Component/Dashboard/MakeAdmin/MakeAdmin';
import ServiceList from './Component/Dashboard/ServiceList/ServiceList';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceList,setServiceList] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser,serviceList,setServiceList]}>
    <Router>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <PrivateRoute path="/dashboard/order/:_id">
         <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/addservice">
        <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/review">
        <ReviewInfo></ReviewInfo>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/orderlist">
        <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/servicelist">
        <ServiceList></ServiceList>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/makeadmin">
        <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
