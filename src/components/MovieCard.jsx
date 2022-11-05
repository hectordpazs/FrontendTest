import React from 'react'
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {startDeleteMovie, startSettingFavorite} from '../store/actions/movies'


export const MovieCard = ({id, title, url, date, favorite, overview}) => {

  const dispatch = useDispatch()
  
  const handleDelete = (id)=>{
    dispatch(startDeleteMovie(id))
  }

  const handleFavorite = (id)=>{
    dispatch(startSettingFavorite(id))
  }

  return (
    <div className='card col-xs-12 col-md-4 mb-1'> 
      <Link to={`/movie/${id}`}>
        {url&& !url.includes('https')
          ?<img style={{height: '200px'}} className='w-100' src={`https://image.tmdb.org/t/p/w500${url}`} alt="MovieImage" />
          :<img style={{height: '200px'}} className='w-100' src={`${url}`} alt="MovieImage" />
        }
      </Link>
      <div className='card-body row'>
        <h5 className='card-title col-12 text-black'>{title}</h5>
        <p className='card-text'>{date}</p>
        {
          overview && <p>{overview}</p> 
        }
          <button onClick={()=>handleDelete(id)} className='btn btn-danger w-50'>Delete</button>
          {favorite
            ? <button 
              onClick={()=>handleFavorite(id)} 
              className='btn btn-info w-50'
              >
                Remove from Favorites
              </button>
            : <button 
              onClick={()=>handleFavorite(id)} 
              className='btn btn-primary w-50'
              >
                Mark As Favorite
              </button>
          }
      </div>
    </div>
  )
}
