import Swal from "sweetalert2";
import { types } from "../types/types";
import { getMovies } from "../../helpers/getMovies";
import { fileUpload } from "../../helpers/fileUpload";
import { v4 as uuidv4 } from 'uuid';

export const movieStartLoading = (page)=>{
    return async (dispatch)=>{
        try {
            const resp = await getMovies(page);
            if (resp){
                let movies = JSON.parse(localStorage.getItem('movies'));
                if (movies===null){
                    dispatch(moviesLoaded(resp))
                    localStorage.setItem('movies', JSON.stringify(resp))
                    localStorage.setItem('page', JSON.stringify(page))
                }else{
                    if(page!==JSON.parse(localStorage.getItem('page'))){
                        let movies2 = [...resp, ...movies]
                        const moviesMap = movies2.map(item=>{
                            return [item.id, item]
                        })
                        const moviesMapArr = new Map(moviesMap);
                        const uniqueMoviesArr = [...moviesMapArr.values()]

                        localStorage.setItem('movies', JSON.stringify(uniqueMoviesArr))
                        localStorage.setItem('page', JSON.stringify(page))
                        dispatch(moviesLoaded(uniqueMoviesArr))
                    }else{
                        dispatch(moviesLoaded(movies))
                    }
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const startDeleteMovie = (id)=>{
    return async(dispatch, getState)=>{
        dispatch(deleteMovie(id))
        let {movies} = getState().movies
        localStorage.setItem('movies', JSON.stringify(movies))
        Swal.fire('success', 'photo deleted', 'success')
    }
}

export const startSettingFavorite = (id)=>{
    return async(dispatch, getState)=>{
        dispatch(setFavorite(id))
        let {movies} = getState().movies;
        localStorage.setItem('movies', JSON.stringify(movies))
    }
}

export const startAddMovie = (movie)=>{
    return async (dispatch, getState)=>{
        
        movie = {...movie, id: uuidv4()}
        dispatch(addMovie(movie))
        let {movies} = getState().movies
        localStorage.setItem('movies', JSON.stringify(movies))
        Swal.fire('Saved', 'success', 'success')
    }
}

export const startUploading = (movie)=>{
    return async (dispatch, getState)=>{

        Swal.fire({
            title:'Uploading...',
            text: 'Please Wait',
            allowOutsideClick: false,
            onBeforeOpen: ()=>{
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(movie.url);
        console.log(fileUrl);
        movie= {...movie, url: fileUrl, id: uuidv4()}

        dispatch(startAddMovie(movie))
        
        Swal.close();

    }
}

export const deleteMovie = (id)=>({
    type: types.DeleteMovies,
    payload: id
})

const setFavorite = (id)=>({
    type: types.setFavorite,
    payload: id
})

const moviesLoaded = (movies)=>({
    type: types.LoadMovies,
    payload: movies
})

const addMovie = (movie)=>({
    type: types.AddMovies,
    payload: movie
})