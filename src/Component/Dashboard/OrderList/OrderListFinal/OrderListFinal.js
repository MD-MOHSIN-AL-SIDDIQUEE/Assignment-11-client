import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderListBody from '../OrderListBody/OrderListBody';

const OrderListFinal = () => {
    const containerStyle = {
        height: "100%"
    }
    return (
        <div>
        <div>
            <section>
                <div style={containerStyle} className="container-fluid row">
                    <div className="col-md-2">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-10 ">
                        <OrderListBody></OrderListBody>
                    </div>
                </div>
            </section>

        </div>
        </div>
    );
};

export default OrderListFinal;