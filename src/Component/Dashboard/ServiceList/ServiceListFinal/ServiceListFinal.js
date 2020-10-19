import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceListBody from '../ServiceListBody/ServiceListBody';

const ServiceListFinal = () => {
   
        const containerStyle = {
            height: "100%"
        }
    return (
        <div>
            <section>
                <div style={containerStyle} className="container-fluid row">
                    <div className="col-md-2 col-sm-0">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 ">
                        <ServiceListBody></ServiceListBody>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceListFinal;