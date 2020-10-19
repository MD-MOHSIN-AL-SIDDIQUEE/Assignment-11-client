import React from 'react';
import Logo from '../../Logo/Logo';
import Name from '../../Name/Name';
import './MakeAdminHeading.css'


const MakeAdminHeading = () => {
    return (
        <div>
            <div className="row admin-head-bg">
                <Logo></Logo>
                <div className="d-flex justify-content-between  col-md-10 px-5 align-items-end">
                    <h3>Make Admin</h3>
                    <Name></Name>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminHeading;