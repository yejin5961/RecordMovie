import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import '../../style/movie.css';
import {naverMoviesApi} from '../../api';
import {Link} from 'react-router-dom';

import { like } from "../../redux/modules/movie";
import { connect } from "react-redux";

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
    let [likeState, setLikeState] = useState(false);

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

                // setPoster(movie[0].image);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSearchMovie();
    }, []);


    function clickLike (e) {
        if (likeState) {
            e.target.classList.remove('like');
            setLikeState(false);
        } else {
            e.target.classList.add('like');
            setLikeState(true);
        }
    }

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

                        {/*<p className="movie-name">{props.movie.movieNm}</p>*/}
                        <p className="movie-name">영화 제목</p>
                        <span className="movie-year">{props.movie.prdtYear}년도</span>
                        <span className="movie-genre">{props.movie.genreAlt}</span>
                        <span className="like">
                            <div className="like-button"  onClick={props.onLike}/>

                            <span>{props.like}</span>
                        </span>
                    </div>
                </MovieCard>
            </li>
        </>
    );
};

// export default Movie;


const mapStateToProps = state => ({
    like: state.movie.like
});

const mapDispatchToProps = dispatch => ({
    onLike: () => dispatch(like())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movie);


