import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg pt-3">
            <div class="container">

                <a class="navbar-brand text-success fw-bolder " href="#" >Plant House</a>

                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-ul ms-lg-5 ps-lg-5 me-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Contact-US</a>
                        </li>
                    </ul>

                    <form class="d-flex position-relative" role="search">
                        <input class="form-control me-2 ps-5" type="search" placeholder="Search plants..." aria-label="Search"/>
                        <i class="fa-solid fa-magnifying-glass position-absolute mt-2 ms-3 top-0 start-25"></i>
                    </form>
                </div>
            </div>
        </nav>
    )
}
