import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog,faCartPlus,faSignOutAlt,faListUl, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [ loggedInUser, setLoggedInUser,serviceList,setServiceList ] = useContext(UserContext)
    const { _id, title, description, image } = serviceList
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://limitless-meadow-19472.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to={`/dashboard/order/${_id}`} className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/orderlist" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>order list</span>
                    </Link>
                </li>
               
                <li>
                    <Link to="/dashboard/review" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>review</span>
                    </Link>
                </li>
               
              {isAdmin && <div>
                        <li>
                    <Link to="/dashboard/servicelist" className="text-white">
                        <FontAwesomeIcon icon={faListUl} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addservice" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/makeadmin" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
                    </Link>
                </li>
                  </div>
              }
              
             
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};
export default Sidebar;