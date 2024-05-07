import React, { useState } from 'react';
import './navbar.scss';
import PublicIcon from '@mui/icons-material/Public';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Imports the Link component from the react-router-dom
import { Link } from 'react-router-dom';
import Dropdown from 'app/modules/UserProfile/userProfile';

//a functional component named Navbar -- accept props and return React elements.
const Navbar = () => {
  // Apply font-family inline
  const [dropdownOpen, setdropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setdropdownOpen(!dropdownOpen);
  };
  const navbarStyles = {
    // fontFamily: 'Times New Roman, Times, serif',
  };
  return (
    //Navigation Bar Structure: -- with dark background,  a container fluid to contain the navigation links.
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TOP STORIES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/World">
                <PublicIcon /> WORLD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/National">
                <NewspaperRoundedIcon /> NATIONAL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business">
                <BusinessRoundedIcon /> BUSINESS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Technology">
                <SettingsSuggestRoundedIcon /> TECHNOLOGY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science">
                <ScienceSharpIcon /> SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/culture">
                <Diversity2SharpIcon /> CULTURE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Politics">
                <PeopleRoundedIcon /> POLITICS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Weather">
                <CloudRoundedIcon /> WEATHER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Search">
                <SearchRoundedIcon /> SEARCH
              </Link>
            </li>
            {/* <div className="nav-item">
              <a className="user" href="#" onClick={toggleDropdown}>
                <AccountCircleIcon /> PROFILE
                {dropdownOpen && <Dropdown />}
              </a>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
