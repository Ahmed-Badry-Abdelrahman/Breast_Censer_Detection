import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './header.css';
// @ts-ignore
import logoImg from '../assets/logo.png';
// @ts-ignore
import profileImg from '../assets/profile.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {

    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
        menu.classList.toggle('scale-up-center');
    }

    return (
        <header>
            <div className="container">
                <div className='top-header content'>
                    <div className='left-content'>
                        <div className='logo'>
                            <img src={logoImg} alt='logo-img' />
                            <h1>Breast Cancer</h1>
                        </div>
                    </div>
                    <div className='right-content'>
                        <nav>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                        <div className='sign-up'>
                            <img src={profileImg} alt='profile-img' />
                            <hr />
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='bottom-header'>
                    <nav className='content'>
                        <ul>
                            <li><NavLink to="/overview">Overview</NavLink></li>
                            <li><NavLink to="/find-a-doctor">Find a Doctor</NavLink></li>
                            <li><NavLink to="/up-rumor">Up Rumor</NavLink></li>
                            <li><NavLink to="/PatientVisitorDS">Patient & Visitor</NavLink></li>
                            <li><NavLink to="/store">Store</NavLink></li>
                            <li><NavLink to="/stories">Stories</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='drop-menu'>
                    <nav className='menu'>
                        <ul>
                            <li><NavLink to="/overview">Overview</NavLink></li>
                            <li><NavLink to="/find-a-doctor">Find a Doctor</NavLink></li>
                            <li><NavLink to="/up-rumor">Up Rumor</NavLink></li>
                            <li><NavLink to="/PatientVisitor">Patient & Visitor</NavLink></li>
                            <li><NavLink to="/store">Store</NavLink></li>
                            <li><NavLink to="/stories">Stories</NavLink></li>
                        </ul>
                    </nav>
                    <button className='btn-menu' onClick={handleClick}> <FontAwesomeIcon icon={isActive ? faTimes : faBars} /></button>
                </div>
            </div>
        </header>
    )
}

export default Header;