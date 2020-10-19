import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../resources/creative-agency-main/images/logos/logo.png'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <nav className=" container navbar navbar-expand-lg navbar-light">
            <Link to="/home">
                <img style={{ height: "47px" }} src={logo} alt="" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ml-auto">
                    <Link to="/home"><li className="nav-item active">
                        <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                    </li></Link>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our team</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link mr-5 " href="#">Contact Us</a>
                    </li>
                    <Link to={`dashboard/order/dash`}>

                        <li className="nav-item">
                            {loggedInUser.name ? <button className="nav-link mr-5 btn btn-dark text-white" href="#">{loggedInUser.name}</button> :
                                <button className="nav-link mr-5 btn btn-dark text-white" href="#">Login</button>
                            }
                        </li>

                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;