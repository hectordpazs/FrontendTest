import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { AddMovies } from '../components/AddMovies';

import { HomeScreen } from '../components/HomeScreen';
import { MovieDetails } from '../components/MovieDetails';
import { Navbar } from '../components/Navbar';
import { movieStartLoading } from '../store/actions/movies';

export const AppRouter = () => {

    const dispatch = useDispatch();
    let page = JSON.parse(localStorage.getItem('page'))||1

    useEffect(() => {
        dispatch(movieStartLoading(page))
    },[dispatch])

    return (
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/movie/:movieId" element={<MovieDetails/>}/>
                <Route path="/addnew" element={<AddMovies/>}/>
                <Route path="*" element={<HomeScreen/>}/>
            </Routes>
        </Router>
        </>
        
    )
}
