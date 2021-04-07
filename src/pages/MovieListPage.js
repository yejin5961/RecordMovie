import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import Movie from "../components/movie/Movie";
import Header from "../components/common/Header";
import '../App.css';

const MovieListWrapper = styled.div`
  position: relative;
  width: 1120px;
  margin: 0 auto;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const ulStyle = {
    listStyle: "none",
    display: "inline-block",
}

const MovieListPage = () => {
    let [movieList, setMovieList] = useState([]);

    console.log('aaaa');

    async function getMovieList(props) {
        const pageNum = props ? props.target.getAttribute('pageNum') : "1";
        const apiUrl = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=c8238a7b0604ad7f7210522012b6d390&openStartDt=2021&curPage=" + pageNum;

        axios.get(apiUrl)
            .then(function (response) {
                const data = response.data.movieListResult.movieList;

                let movieList2 = [...movieList];
                movieList2 = data;
                setMovieList(movieList2);

                return movieList;
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
            <MovieListWrapper>
                <input type="text"/>
                <button>검색</button>

                <ul style={ulStyle}>
                {movieList.length > 0 ?
                    movieList.map((movie) => (
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