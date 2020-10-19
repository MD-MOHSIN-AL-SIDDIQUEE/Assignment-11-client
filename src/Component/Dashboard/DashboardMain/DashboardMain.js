import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from '../../../App';

const DashboardMain = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
  
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        
    }
   
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', loggedInUser.email);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);

        fetch('https://limitless-meadow-19472.herokuapp.com/addAOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
         
    }
  
   
  

    return (
  
        <section className="container-fluid row">

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", left: "20px", backgroundColor: "#F4FDFB" }}>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input  onBlur={handleBlur}type="text" className="form-control" name="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input  onBlur={handleBlur}type="email" className="form-control" name="email" placeholder="Enter email"value={loggedInUser.email} />
                    </div>
                    <div className="form-group details">
                        <label htmlFor="exampleInputEmail1">Product Title</label>
                        <input  onBlur={handleBlur} type="text" className="form-control " name="title" placeholder="Project Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Price</label>
                            <input type="text"  onBlur={handleBlur} className="form-control" name="price" placeholder="Price" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input  onChange={handleFileChange}type="file" className="form-control"  placeholder="Picture" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>

    );
};

export default DashboardMain;