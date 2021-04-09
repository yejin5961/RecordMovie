import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Movie from "../components/movie/Movie";
import Header from "../components/common/Header";
import Search from "../components/movie/Search";
import '../App.css';
import {kobisMoviesApi} from "../api";
import axios from 'axios';

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

const MovieListPage = () => {
    let [movies, setMovies] = useState([]);

    async function getMovieList(props) {
        const pageNum = props ? props.target.getAttribute('pageNum') : "1";

        try {
            const {
                data: {
                    movieListResult: {
                        movieList
                    }
                }
            }  = await kobisMoviesApi.list(pageNum);

            let movieListCopy = [...movies];
            movieListCopy = movieList;
            setMovies(movieListCopy);

            console.log(movieList);
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
    const onSearchSubmit = (searchMovieList) => {
        let movieListCopy = [...movies];
        movieListCopy = searchMovieList;
        setMovies(movieListCopy);
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
                    <button onClick={getMovieList} pageNum="1">1</button>
                    <button onClick={getMovieList} pageNum="2">2</button>
                    <button onClick={getMovieList} pageNum="3">3</button>
                </div>
            </MovieListWrapper>
        </>
    );
}

export default MovieListPage;