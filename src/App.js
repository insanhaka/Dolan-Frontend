import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

import './assets/css/navbar.css';



// Pages Import
import Home from './resource/home/Home';
import Category from './resource/category/Category';
// Auth Page
import Login from './resource/auth/Signin';
import Signup from './resource/auth/Signup';
// Private Page
import Dashboard from './resource/dashboard/Dashboard';
import Profile from './resource/profile/Profile';

const PrivateRoute = () => {
  const token = localStorage.getItem('passport');

  // if (authorization.isAuth) {
  if (token !== null) {
    return <Outlet />
  }else {
    return <Navigate to="/masuk"/>
  }

}

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/category" element={<Category/>} />

            <Route path="/masuk" element={<Login/>} />
            <Route path="/daftar" element={<Signup/>} />

            <Route path='/dashboard' element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>

            <Route path='/akun' element={<PrivateRoute/>}>
              <Route path="/akun" element={<Profile/>}/>
            </Route>

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}