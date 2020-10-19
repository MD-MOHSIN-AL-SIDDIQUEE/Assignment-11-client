import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';

const ReviewBody = () => {

    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [review,setReview] = useState([])

    const handleBlur = e => {
        const reviewinfo = { ...review };
        reviewinfo[e.target.name] = e.target.value;
        setReview(reviewinfo);
        
    }

    
    const handleSubmit = (e) =>{
        const reviewData ={...loggedInUser,...review};
      
        fetch('https://limitless-meadow-19472.herokuapp.com/addReview',{
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data=>console.log(data))
        e.preventDefault();
    }
    return (

        <section className="container-fluid row">
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", left: "20px", backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit}>
                    
                <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="your name" value={loggedInUser.name}/>
                    </div>
                    
                <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Company Name</label>
                        <input onBlur={handleBlur}type="text" className="form-control" name="designation" placeholder="Company designation" />
                    </div>
         
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur}type="text" className="form-control" name="description" placeholder="description" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>


    );
};

export default ReviewBody;