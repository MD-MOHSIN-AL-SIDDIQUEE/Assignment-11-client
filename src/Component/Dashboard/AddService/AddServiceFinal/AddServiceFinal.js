import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AddServiceBody from '../AddServiceBody/AddServiceBody';

const AddServiceFinal = () => {
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
                        <AddServiceBody></AddServiceBody>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddServiceFinal;