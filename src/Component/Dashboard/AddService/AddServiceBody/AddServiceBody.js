import React, { useState } from 'react';

const AddServiceBody = () => {
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
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('https://limitless-meadow-19472.herokuapp.com/addAService', {
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
                <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input onBlur={handleBlur}type="text" className="form-control" name="title" placeholder="title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Icon</label>
                            <input onChange={handleFileChange}type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>

    );
};

export default AddServiceBody;