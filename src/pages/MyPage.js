import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components';
import Movie from "../components/movie/Movie";
import Header from "../components/common/Header";
import Search from "../components/movie/Search";
import '../App.css';
import {kobisMoviesApi} from "../api";
import axios from 'axios';
import Pager from "../components/common/Pager";
import {LoginContext} from "../components/common/LoginContext";

const MyPageWrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 94px;
  padding-bottom: 48px;
  height: 854px;
`;


const MyPage = () => {


    return (
        <>
            <Header/>
            <MyPageWrapper>
                <p>본영화</p>
                <p>관심영화</p>
            </MyPageWrapper>
        </>
    );
}

export default MyPage;