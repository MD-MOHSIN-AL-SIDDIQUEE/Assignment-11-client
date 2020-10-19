import React from 'react';
import DashboardHeading from '../DashboardHeading/DashboardHeading';
import OrderListFinal from './OrderListFinal/OrderListFinal';

const OrderList = () => {
    return (
        <div>
            <DashboardHeading></DashboardHeading>
            <OrderListFinal></OrderListFinal>
        </div>
    );
};

export default OrderList;