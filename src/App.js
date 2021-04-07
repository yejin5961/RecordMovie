import React from "react";
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostListPage from "./pages/PostListPage";
import MovieListPage from "./pages/MovieListPage";

const App = () => {
 return (
     <>
         <Route component={PostListPage} path={["/@:username", "/"]} exact/>
         <Route component={LoginPage} path="/login"/>
         <Route component={RegisterPage} path="/register"/>
         <Route component={MovieListPage} path="/movie"/>
     </>
 );
};

export default App;
