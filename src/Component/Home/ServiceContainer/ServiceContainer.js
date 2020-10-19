import React from 'react';
import ServiceListInfo from './ServiceListInfo/ServiceListInfo';

const ServiceContainer = () => {
    return (
        <div>
            <h1 style={{fontSize:"34px",textAlign:"center"}}className="p-5 mt-5">Provide awesome <span style={{color: ' #7AB259'}}>Services</span></h1>
            <div className=" container">
            <ServiceListInfo></ServiceListInfo>
            </div>
   
        </div>
    );
};

export default ServiceContainer;