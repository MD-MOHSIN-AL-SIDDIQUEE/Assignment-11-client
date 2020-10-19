import React from 'react';
import airbnb from '../../../resources/creative-agency-main/images/logos/airbnb.png'
import google from '../../../resources/creative-agency-main/images/logos/google.png'
import slack from '../../../resources/creative-agency-main/images/logos/slack.png'
import ubar from '../../../resources/creative-agency-main/images/logos/uber.png'
import netflix from '../../../resources/creative-agency-main/images/logos/netflix.png'
import './BodyLogo.css'


const BodyLogo = () => {
    return (
      
        <div className="container logoContainer d-flex justify-content-between ">
         <img src={slack} alt=""/>
         <img src={google} alt=""/>
         <img src={ubar} alt=""/>
         <img src={netflix} alt=""/>
         <img src={airbnb} alt=""/>
        </div>
    );
};

export default BodyLogo;