import React, { useContext, useState } from 'react';
import './Login.css';
import g from './g.svg';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../../../firebaseConfig';
import logo from '../../../resources/creative-agency-main/images/logos/logo.png'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

   
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig );
    }
    const handleGoogleSignIn =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName,email,photoURL} = result.user;
     
            const signInUser = {name:displayName,email,photo:photoURL}
            setLoggedInUser(signInUser)
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    }

 


    return (
        <div>
            <div className="login-page container">
                <div className="d-flex justify-content-center logo">
                <img  src={logo} alt=""/>
                </div>
          
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    
                    <div className="m-auto col-md-6 shadow p-5">
                        
                        <div className="d-flex justify-content-center ">
                        <h style={{ fontSize: "50px"}}>Login with </h>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">User Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="text-danger">Forgot your password?</label>
                        </div>
                        <div className="google-sign-in mt-2 w-75" onClick={handleGoogleSignIn} >
                            <span><img className="google" src={g} alt="google" /> Continue with google </span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;