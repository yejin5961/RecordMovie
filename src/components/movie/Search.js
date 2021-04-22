import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import Button from "../common/Button";
import axios from "axios";
import {kobisMoviesApi} from "../../api";

const SearchWrapper = styled.div`
  margin: 0 auto;
  float: right;
  display: inline-block;
  margin-right: 14px;
`;

const SearchInput = styled.input`
  width: 170px;
  height: 19px;
`;

const ButtonStyle = {
    marginLeft: "10px"
}

const Search = (props) => {
    let inputValue = React.createRef();
    let [keyword, setKeyword] = useState('');
    let [searchResult, setSearchResult] = useState([]);
    let result, totCnt, movieList, text;

    async function searchMovie() {
        try {
            text = inputValue.current.value;
            setKeyword(text !== null ? text : '');

            if (text) {
                // const {
                //     data: {
                //         movieListResult: {
                //             totCnt,
                //             movieList
                //         }
                //     }
                // }  = await kobisMoviesApi.search(inputValue.current.value);
                result = await kobisMoviesApi.search(text, 1);
            } else {
                result = await kobisMoviesApi.list(1);
            }

            totCnt = result.data.movieListResult.totCnt;
            movieList = result.data.movieListResult.movieList;

            let movieList2 = [...searchResult];
            movieList2 = movieList;
            setSearchResult(movieList2);

            props.onSubmit(movieList2, totCnt, text); // 부모로 검색 결과 리스트 전달
        } catch (error) {
            console.log(error);
        }
    }

    const enter = (e) => {
        if (e.key === 'Enter') {
            searchMovie()
        }
    }

    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder="제목으로 검색해보세요.." ref={inputValue} onKeyDown={(e) => enter(e)}/>
            <Button style={ButtonStyle} onClick={searchMovie}>검색</Button>
        </SearchWrapper>
    )
}

export default Search;