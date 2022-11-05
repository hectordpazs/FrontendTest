import { types } from "../types/types";

const initialState = {
    movies: [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LoadMovies:
            return {
                ...state,
                movies: [...action.payload]
            }
        case types.DeleteMovies:
            return {
                ...state,
                movies: state.movies.filter(
                    movie=> movie.id!==action.payload
                ),
            }
        case types.AddMovies:
            return{
                ...state,
                movies: [action.payload, ...state.movies]
            }
        case types.setFavorite:
            return{
                ...state,
                movies: state.movies.map(
                    movie=> movie.id===action.payload 
                    ? {...movie, favorite: !movie.favorite}
                    : movie
                )
            }
        default:
            return state
    }
}

