import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Name.css'
const Name = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="d-flex name">
            <img style={{ height: "25px" }} src={loggedInUser.photo} alt="" />
            <h5>{loggedInUser.name}</h5>
        </div>
    );
};

export default Name;