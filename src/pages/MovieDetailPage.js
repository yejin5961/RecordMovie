import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import Movie from "../components/movie/Movie";
import Header from "../components/common/Header";
import Search from "../components/movie/Search";
import '../App.css';

const MovieListWrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 94px;
  padding-bottom: 48px;
`;

const ulStyle = {
    listStyle: "none",
    display: "inline-block",
}

const MovieDetailPage = () => {
    let [movie, setMovieList] = useState([]);

    async function getMovieList(props) {

        axios.get('')
            .then(function (response) {

            }).catch(function (error) {
            // 오류발생시 실행
        });
    }
    useEffect(() => {
        getMovieList();
    }, []);


    return (
        <>
            <Header/>

        </>
    );
}

export default MovieDetailPage;