import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getMovieById } from '../helpers/getMovieById'
import { MovieCard } from './MovieCard';

export const MovieDetails = () => {

    const {movieId} = useParams();
    const [movie, setMovie] = useState();
    const {movies} = useSelector(state => state.movies)

    useEffect(() => {
        getMovieById(movieId)
        .then(res=> setMovie(res))
    }, [movieId])

    if(!movie){
        const movieById = movies.find(mov=> mov.id === movieId);
        if(movieById){
            setMovie(movieById)
        }
    }

    return (
        <>
            {movie&&
                <div className='d-flex justify-content-center'>
                    <MovieCard
                        {...movie}
                        key={movie.id}
                    />
                </div>
                
            }
        </>
        
    )
}
