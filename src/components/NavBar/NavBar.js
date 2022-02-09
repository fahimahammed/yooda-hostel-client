import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-primary">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light mb-5 text-success">
                    <a class="navbar-brand" href="#"><h3 className="text-white">Yooda Hostel</h3></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <h5 class="nav-item mx-2">
                            <Link class="nav-link text-white" to="/">Add Student</Link>
                        </h5>
                        <h5 class="nav-item mx-2">
                            <Link class="nav-link text-white" to="/students">Student List</Link>
                        </h5>
                        <h5 class="nav-item mx-2">
                            <Link class="nav-link text-white" to="/addFoodItem">Add Food Item</Link>
                        </h5>
                        <h5 class="nav-item mx-2">
                            <Link class="nav-link text-white" to="/foodItems">Food Items</Link>
                        </h5>
                        <h5 class="nav-item mx-2">
                            <Link class="nav-link text-white" to="/distributionForm">Distribution Form</Link>
                        </h5>
                        
                        </ul>
                        
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;