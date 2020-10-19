import React, { useEffect, useState } from 'react';
import ServiceDataTable from '../ServiceDataTable/ServiceDataTable';

const ServiceListBody = () => {
    const [serviceList,setServiceList]=useState([])

    useEffect(() => {
        fetch('https://limitless-meadow-19472.herokuapp.com/servicelist')
            .then(res => res.json())
            .then(data => setServiceList(data));
    }, [])
    return (
        <section className="container-fluid row">
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", left: "20px", backgroundColor: "#F4FDFB" }}>
            {
            <ServiceDataTable servicedata={serviceList}></ServiceDataTable>
            } 
            </div>
        </section>
    );
};

export default ServiceListBody;