import React from "react";
import Digital from "./../img/Digital.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import toggle from '../img/toogle.png'
import './../css/Header.css';

function Header() {
    return (
        <div className="head_footer navbar-expand-lg">
            <div className="top_footer row ">
                <div className="left_footer col-4" >
                    <p>Company Email will be here</p>
                </div>
                <div className="logo_footer col-4" >
                    <img src={Digital} alt="Digital"  />
                </div>
                <div className="social_footer col-4" >
                    <a href="#"><LinkedInIcon className="icon" /></a>
                    <a href="#"><FacebookRoundedIcon className="icon" /></a>
                    <a href="#"><InstagramIcon className="icon" /></a>
                </div>
            </div>
            <div className="tablet">
           <img src={Digital} alt="" className="Logo_for_tablets"/>
            <img src={toggle} alt="" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
            </div>
        <hr />
            <div className="navbar_footer  collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/service">Our Services</NavLink>
                <NavLink to="/ourteams">Our Teams</NavLink>
                <NavLink to="/testimonials">Testimonials</NavLink>
                <NavLink to="/contactus">Contact Us</NavLink>
                <div className="hiding left_footer_hide" >
                    <p>Company Email will be here</p>
                </div>
                <div className="social_footer_hide hiding" >
                    <a href="#"><LinkedInIcon className="icon" /></a>
                    <a href="#"><FacebookRoundedIcon className="icon" /></a>
                    <a href="#"><InstagramIcon className="icon" /></a>
                </div>
            </div>
        </div>
    )
}

export default Header;