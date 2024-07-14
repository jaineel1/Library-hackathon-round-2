import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Discover your next favorite read at Find Your Books! Explore a diverse collection of books across genres and interests. From timeless classics to gripping thrillers, we've curated a library that caters to every reader's taste. Start your literary journey today with Find Your Books, where your next adventure awaits on every page. Happy reading!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header