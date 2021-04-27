import {combineReducers} from "redux";
import movie from './movie';
import auth from "./auth";

const rootReducer = combineReducers({
    auth,
    movie
});

export default rootReducer;