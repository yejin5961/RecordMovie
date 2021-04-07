import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import '../../style/movie.css';
import {naverMoviesApi} from '../../api';
// import noPosterImg from '/public/logo192.png';

/*
* 영화 목록 중 하나
 */
const Movie = styled.div`
  text-align: center;
`;

const MoviePoster = styled.div`
  width: 180px;
  height: 200px;
  right: 0;
  left: 0;
  display: inline-block
`;

const MovieCard = (props) => {
    let [poster, setPoster] = useState('');

    async function getSearchMovie() {
        console.log('search Movie');
        const search = props.movie.movieNm;

        try {
            if (search === "") {
                // this.setState({movies: [], isLoading: false})
            } else {
                const {data: {
                    items
                }} = await naverMoviesApi.search(search);

                const movie = items.filter((item)=> {
                    return item.image
                });


                setPoster(movie[0].image);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSearchMovie();
    }, []);


    return (
        <>
            <li className="movie-li">
                <Movie>
                    <div>
                        <MoviePoster>
                            {
                                poster ?   <img className="poster-image no-image" src={poster} /> : <span className="no-image">no image</span>
                            }
                        </MoviePoster>

                        <p className="movie-name">{props.movie.movieNm}</p>
                        <span className="movie-year">{props.movie.prdtYear}년도</span>
                        <span className="movie-genre">{props.movie.genreAlt}</span>
                    </div>
                </Movie>
            </li>
        </>
    );
};

export default MovieCard;
