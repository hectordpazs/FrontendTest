import React from 'react'
import { useSelector } from 'react-redux';
import { MovieCard } from './MovieCard';

const MoviesList = () => {

    const movies = useSelector(state => state.movies.movies)

    return(
        <div className='container row'>
            {movies&&movies.map((movie)=> 
                <MovieCard
                    {...movie}
                    key={movie.id}
                />
            )}
        </div>
    )
}


export default MoviesList


