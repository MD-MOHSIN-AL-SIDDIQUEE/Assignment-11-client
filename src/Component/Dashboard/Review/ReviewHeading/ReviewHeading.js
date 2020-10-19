import React from 'react';
import Logo from '../../Logo/Logo';
import Name from '../../Name/Name';

const ReviewHeading = () => {
    return (
        <div>
            <div className="row dash-head-bg">
               <Logo></Logo>
                <div className="d-flex justify-content-between  col-md-10 px-5 align-items-end">
                    <h3>Review</h3>
                    <Name></Name>
                </div>
            </div>
        </div>
    );
};

export default ReviewHeading;