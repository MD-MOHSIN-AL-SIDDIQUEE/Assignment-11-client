import React from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import Sidebar from '../Sidebar/Sidebar';

const DashboardBody = (props) => {
//    const {productKey}=props.productKey
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
                        {/* <DashboardMain productKey={productKey}></DashboardMain> */}
                        <DashboardMain ></DashboardMain>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DashboardBody;