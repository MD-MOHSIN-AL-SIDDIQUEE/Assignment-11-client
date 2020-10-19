import React from 'react';
import Logo from '../Logo/Logo';
import Name from '../Name/Name';
import './DashboardHeading.css'


const DashboardHeading = () => {
    return (
        <div className="row dash-head-bg">
            <Logo></Logo>
            <div className="d-flex justify-content-between  col-md-10 px-5 align-items-end">
                <h3>Order</h3>
                <Name></Name>
            </div>
        </div>
    );
};

export default DashboardHeading;