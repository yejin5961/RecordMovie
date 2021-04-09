import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import '../../style/movie.css';
import {naverMoviesApi} from '../../api';
import {Link} from 'react-router-dom';

/*
* 영화 목록 중 하나
 */
const MovieCard = styled.div`
  text-align: center;
  padding: 24px 0 26px 0;
`;

const MoviePosterWrapper = styled.div`
  width: 180px;
  height: 200px;
  right: 0;
  left: 0;
  display: inline-block
`;

const Movie = (props) => {
    let [poster, setPoster] = useState('');

    async function getSearchMovie() {
        const search = props.movie.movieNm;

        try {
            if (search === "") {
                // this.setState({movies: [], isLoading: false})
            } else {
                const {
                    data: {
                        items
                    }
                } = await naverMoviesApi.search(search);

                const movie = items.filter((item) => {
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
                <MovieCard>
                    <div>
                        <MoviePosterWrapper>
                            {
                                poster ?
                                    <Link to="/MovieDetail">
                                        <img className="poster-image" src={poster} />
                                    </Link> :
                                    <Link to="/MovieDetail">
                                        <span className="no-image">no image</span>
                                    </Link>
                            }
                        </MoviePosterWrapper>

                        <p className="movie-name">{props.movie.movieNm}</p>
                        <span className="movie-year">{props.movie.prdtYear}년도</span>
                        <span className="movie-genre">{props.movie.genreAlt}</span>
                    </div>
                </MovieCard>
            </li>
        </>
    );
};

export default Movie;
