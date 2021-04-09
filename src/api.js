import axios from 'axios';

/*
다수의 proxy 연결 시 http-proxy-middleware 모듈로 처리 가능하다
* */

/*영화진흥위원회 오픈 api*/
const KEY = 'c8238a7b0604ad7f7210522012b6d390';

const kobisApi = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export const kobisMoviesApi = {
    list:  page => kobisApi.get('/kobisopenapi/webservice/rest/movie/searchMovieList.json', {
        params: {
            key: KEY,
            openStartDt: 2021,
            curPage: page
        }
    }),
    search: keyword => kobisApi.get('/kobisopenapi/webservice/rest/movie/searchMovieList.json', {
        params: {
            key: KEY,
            movieNm: keyword
        }
    })
};

/*네이버 오픈 api*/
const ID_KEY = 'q3AZSvtoSWZLibliXFB2';
const SECRET_KEY = 'rAmQLWkZkB';

const naverApi = axios.create({
    headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
        'Access-Control-Allow-Origin': '*'
    }
});

export const naverMoviesApi = {
    search: word => naverApi.get('/v1/search/movie.json', {
        params: {
            query: word,
            display: 2
        }
    })
};