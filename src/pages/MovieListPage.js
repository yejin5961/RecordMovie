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

const MovieListWrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 94px;
  padding-bottom: 48px;
  height: 854px;
`;

const ulStyle = {
    listStyle: "none",
    display: "inline-block",
}

const defaultPagerValue = {
    total: 0,
    buttonCount: 10,
    currentPage: 1,
    keyword: ''
}

const MovieListPage = () => {
    let [movies, setMovies] = useState([]);
    let [pagerState, setPagerState] = useState(defaultPagerValue );
    let result, totCnt, movieList;
    let movieListCopy;

    async function getMovieList(props) {
        try {
             console.log(pagerState)
            if (!props) {
                result = await kobisMoviesApi.list(1);
                totCnt = result.data.movieListResult.totCnt;

                setPagerState({
                    ...pagerState,
                    total: totCnt,
                    currentPage: 1,
                    keyword: ''
                })
            } else {
                if (pagerState.keyword) {
                    result = await kobisMoviesApi.search(pagerState.keyword, props);

                    setPagerState({
                        ...pagerState,
                        currentPage: props,
                        keyword: pagerState.keyword
                    })
                } else {
                    result = await kobisMoviesApi.list(props);
                }

            }

            movieList = result.data.movieListResult.movieList;

            movieListCopy = [...movieList];
            movieListCopy = movieList;
            setMovies(movieListCopy);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMovieList();
    }, []);

    /* Search 컴포넌트 (자식)에서 MovieListPage(부모)로
    *  검색 결과 리스트를 전달하기 위함
    * */
    const onSearchSubmit = (searchMovieList, total, keyword) => {
        let movieListCopy = [...movies];
        movieListCopy = searchMovieList;
        setMovies(movieListCopy);

        setPagerState({
            ...pagerState,
            total: total,
            currentPage: 1,
            keyword: keyword
        })
    };

    return (
        <>
            <Header/>
            <MovieListWrapper>
                <Search onSubmit={onSearchSubmit}/>
                <ul style={ulStyle}>
                {movies.length > 0 ?
                    movies.map((movie) => (
                            <Movie key={movie.movieCd} movie={movie}></Movie>
                        ))
                    :
                    "loading..."
                }
                </ul>
                <div className="button-wrapper">
                    <Pager onClick={getMovieList} state={pagerState}></Pager>
                </div>
            </MovieListWrapper>
        </>
    );
}

export default MovieListPage;