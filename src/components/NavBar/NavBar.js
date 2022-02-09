import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <h6 class="nav-item">
                <Link class="nav-link" to="/c">AddStudent</Link>
            </h6>
            <h6 class="nav-item">
                <Link class="nav-link" to="/students">Student List</Link>
            </h6>
            <h6 class="nav-item">
                <Link class="nav-link" to="/">Add Food Item</Link>
            </h6>
            <h6 class="nav-item">
                <Link class="nav-link" to="/a">ShowFoodItems</Link>
            </h6>
            <h6 class="nav-item">
                <Link class="nav-link" to="/d">Distribution</Link>
            </h6>
            
            </ul>
            
        </div>
        </nav>
    );
};

export default NavBar;