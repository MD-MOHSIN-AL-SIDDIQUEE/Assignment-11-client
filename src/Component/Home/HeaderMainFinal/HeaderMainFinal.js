import React from 'react';
import HeaderBodyPart from '../HeaderBodyPart/HeaderBodyPart';
import Navbar from '../Navbar/Navbar';
import './HeaderMainFinal.css'

const HeaderMainFinal = () => {
    return (
        <div className="HomeFirstPart">
            <Navbar></Navbar>
            <HeaderBodyPart></HeaderBodyPart>
        </div>
    );
};

export default HeaderMainFinal;