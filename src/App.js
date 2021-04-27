import React from "react";
import {Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import RegisterPage from "./pages/RegisterPage";
import PostListPage from "./pages/PostListPage";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import {UserProvider, useUserState} from "./components/common/LoginContext";

const App = () => {
 return (
     <UserProvider>
         <Route component={MovieListPage} path={["/movie", "/"]} exact />
         <Route component={PostListPage} path="/@:username"/>
         <Route component={LoginPage} path="/login"/>
         <Route component={MyPage} path="/mypage"/>
         <Route component={RegisterPage} path="/register"/>
         <Route component={MovieDetailPage} path="/MovieDetail"/>
     </UserProvider>
 );
};

export default App;
