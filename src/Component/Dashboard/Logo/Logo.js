import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/creative-agency-main/images/logos/logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <Link to="/home">
            <div className="logo col-md-2">
                    <img src={logo} alt="" />
             </div>
            </Link>
           
        </div>
    );
};

export default Logo;