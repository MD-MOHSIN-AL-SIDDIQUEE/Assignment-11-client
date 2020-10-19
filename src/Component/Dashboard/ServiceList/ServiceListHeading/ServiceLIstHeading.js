import React from 'react';
import Logo from '../../Logo/Logo';
import Name from '../../Name/Name';
import './ServiceListHeading.css'

const ServiceListHeading = () => {
    return (
        <div>
              <div>
            <div className="row service-head-bg">
                <Logo></Logo>
                <div className="d-flex justify-content-between  col-md-10 px-5 align-items-end">
                    <h3>Service List</h3>
                    <Name></Name>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default ServiceListHeading;