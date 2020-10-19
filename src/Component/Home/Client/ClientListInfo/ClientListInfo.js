import React, { useEffect, useState } from 'react';
import SingleClient from '../SingleClient/SingleClient';

const ClientListInfo = () => {
    const [reviewlist,setReviewlist]=useState([])
   
    useEffect(() => {
        fetch('https://limitless-meadow-19472.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviewlist(data));
    }, [])
   console.log(reviewlist);
    return (
        <div className="row">
            {
                reviewlist.map(singledata =><SingleClient singledata={singledata}></SingleClient> ) 
            }
        </div>
    );
};

export default ClientListInfo;