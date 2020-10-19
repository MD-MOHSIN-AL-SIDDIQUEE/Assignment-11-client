import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ReviewBody from '../ReviewBody/ReviewBody';

const ReviewFinal = () => {
    const containerStyle = {
        height: "100%"
    }
    return (
        <div>
            <section>
                <div style={containerStyle} className="container-fluid row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 ">
                        <ReviewBody></ReviewBody>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewFinal;