const LIKE = 'movie/FAVORITE';

export const like = () => ({type: LIKE});

const initialState = {
    like: 0
};

// 리듀서
function movie(state = initialState, action) {
    switch (action.type) {
        case LIKE:
            return {
                ...state,
                like: state.like + 1
            };
        default:
            return state
    }
}

export default movie;