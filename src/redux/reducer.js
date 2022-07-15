import { combineReducers } from "redux";

const ApiAddress = {
    url: 'http://localhost:8000/api/'
}
const ApiReducer = (state = ApiAddress , action) => {
    return state;
}

const ApiHeader = {
    key: 'ini-kunci-api'
}
const HeaderReducer = (state = ApiHeader , action) => {
    return state;
}

const waLink = {
    link: 'https://wa.me/+62'
}
const WaReducer = (state = waLink , action) => {
    return state;
}

const GoogleClientId = {
    key: '775653269738-kgca1679rq3o8gn26aif4dj81tvdufao.apps.googleusercontent.com'
}
const GoogleReducer = (state = GoogleClientId , action) => {
    return state;
}

const AllReducer = combineReducers({
    ApiReducer,
    GoogleReducer,
    HeaderReducer,
    WaReducer,
});

export default AllReducer;