import React from 'react';
import './Home.css';
import BodyLogo from './BodyLogo/BodyLogo';
import HeaderMainFinal from './HeaderMainFinal/HeaderMainFinal';
import ServiceContainer from './ServiceContainer/ServiceContainer';
import Works from './Works/Works';
import Client from './Client/Client';
import Contact from './Contact/Contact';



const Home = () => {
    return (
        <div className="home-container">
           <HeaderMainFinal></HeaderMainFinal>
            <BodyLogo></BodyLogo>
            <ServiceContainer></ServiceContainer> 
            <Works></Works>
            <Client></Client> 
            <Contact></Contact>              
        </div>
    );
};

export default Home;