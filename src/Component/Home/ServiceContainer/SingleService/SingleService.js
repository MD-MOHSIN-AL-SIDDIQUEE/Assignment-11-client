import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {

    const { _id, title, description, image } = props.service
    
    return (
           <Link  className="col-md-4 col-sm-6 "to={`dashboard/order/${_id}`}> <div className="text-center serviceContainer ">
                {
                    <img style={{ height: '150px' }} src={`data:image/png;base64,${image.img}`} />
                }
                <h4 style={{ color: 'rgba(0, 0, 0, 0.7)'}}>{title}</h4>
                <p style={{ color: 'rgba(0, 0, 0, 0.7)'}}> {description}</p>
            </div></Link>
    );
};

export default SingleService;