import React from 'react';
import ServiceListFinal from './ServiceListFinal/ServiceListFinal';
import ServiceListHeading from './ServiceListHeading/ServiceLIstHeading';

const ServiceList = () => {
    return (
        <div>
            <ServiceListHeading></ServiceListHeading>
            <ServiceListFinal></ServiceListFinal>
        </div>
    );
};

export default ServiceList;