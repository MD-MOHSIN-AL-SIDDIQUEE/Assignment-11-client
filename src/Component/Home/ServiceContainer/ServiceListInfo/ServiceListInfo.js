import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const ServiceListInfo = () => {
 const [serviceList,setServiceList]=useState([])

    useEffect(() => {
        fetch('https://limitless-meadow-19472.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServiceList(data));
    }, [])

console.log(serviceList)
    return (
        <div className="row">
            {
                serviceList.map(service=><SingleService key={service._id} service={service}></SingleService>)
            }
        </div>
    );
};

export default ServiceListInfo;