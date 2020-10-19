import React, {  useState } from 'react';

const MakeAdminBody = () => {
    const [admin, setAdmin] = useState([])

    const handleBlur = e => {
        const adminInfo = { ...admin };
        adminInfo[e.target.name] = e.target.value;
        setAdmin(adminInfo);
    }
    const handleSubmit = (e) => {


        fetch('https://limitless-meadow-19472.herokuapp.com/addadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: admin.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
            .catch(error => {
                console.error(error)
            })

        e.preventDefault();

    }



    return (
        <section className="container-fluid row">

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", left: "20px", backgroundColor: "#F4FDFB" }}>

                <form onSubmit={handleSubmit}>
                    <div className="row d-flex align-items-end ">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onBlur={handleBlur}type="text" className="form-control" name="email" placeholder="email" />
                        </div>
                        <div className="form-group col-md-6">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                    </div>


                </form>
            </div>
        </section>
    );
};

export default MakeAdminBody;