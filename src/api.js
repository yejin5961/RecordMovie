import axios from 'axios';

const ID_KEY = 'q3AZSvtoSWZLibliXFB2';
const SECRET_KEY = 'rAmQLWkZkB';

const api = axios.create({
    headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
        'Access-Control-Allow-Origin': '*'
    }
});

export const naverMoviesApi = {
    search: word => api.get('/v1/search/movie.json', {
        params: {
            query: word,
            display: 2
        }
    })
};