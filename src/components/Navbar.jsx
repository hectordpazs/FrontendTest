import React from 'react'
import {Link, NavLink} from 'react-router-dom';


export const Navbar = () => {

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link 
                to='/' 
                className='navbar-brand navitem'
            >
                The Movie app

            </Link>

            <div className="navbar-collapse">
               
                <NavLink 
                    className='nav-link navitem'
                    to='/home'
                >
                    Home
                </NavLink>

                <NavLink 
                    className='nav-link navitem'
                    to='/addnew'
                >
                    Add a movie
                </NavLink>
                
            </div>

        </nav>
        
    )
}
