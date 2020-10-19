import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import OrderListData from '../OrderListData/OrderListData';

const OrderListBody = () => {
    const [orderlist,setOrderlist]=useState([])
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)


    useEffect(() => {
        fetch('https://limitless-meadow-19472.herokuapp.com/order/'+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderlist(data));
    }, [])

    return (
        <div>
            <div className="row">
              {
                  orderlist.map(singledata=><OrderListData singledata={singledata}></OrderListData>)
              }
            </div>
        
        </div>
    );
};

export default OrderListBody;