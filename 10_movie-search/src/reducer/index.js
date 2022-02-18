import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILED,
} from "./types"

export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state, //ovde kopiram sve ostalo iz objekta, a dole apdejtujemo samo ono sto treba da se apdejtuje
                loading: false,
                movies: action.payload,
            }
        case SEARCH_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }

        default:
            return state;
    }
};