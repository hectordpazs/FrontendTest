import React from 'react'
import { useDispatch } from 'react-redux'
import { movieStartLoading } from '../store/actions/movies'
import MoviesList from './MoviesList'

export const HomeScreen = () => {

  const dispatch = useDispatch()

  const handleLoad = ()=>{
    let page = JSON.parse(localStorage.getItem('page'));
    page++
    dispatch(movieStartLoading(page))
  }

  return (

    <>
      <button className='btn btn-primary p-2 m-5' onClick={handleLoad}>Load More</button>
      <MoviesList/>
    </>
    
  )
}
