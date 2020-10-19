import React from 'react';

const SingleClient = (props) => {
    const { name, designation, description, photo } = props.singledata
    return (
        <div className="col-md-4 p-5">
            <div className="row">
                <div className="col-md-2">
                    <img style={{ height: "50px" }} src={photo} alt="" />
                </div>
                <div className="col-md-9">
                    <h4>{name}</h4>
                    <h6>{designation}</h6>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleClient;