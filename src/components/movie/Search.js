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

    async function searchMovie() {
        setKeyword(inputValue.current.value);

        try {
            const {
                data: {
                    movieListResult: {
                        movieList
                    }
                }
            }  = await kobisMoviesApi.search(inputValue.current.value);


            let movieList2 = [...searchResult];
            movieList2 = movieList;
            setSearchResult(movieList2);

            props.onSubmit(movieList2); // 부모로 검색 결과 리스트 전달
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