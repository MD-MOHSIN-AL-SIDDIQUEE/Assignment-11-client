import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
      <div className="container">
      <div className=" row">
                <div className="section-header col-md-7  ">               
                    <h1>Let us handle your <br/> project, professionally</h1>
                    <h5 >With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</h5>
                </div>
                <div className="col-md-5 ml-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="40" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="button" className="btn btn-dark"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
      </div>
        </section>
    );
};

export default Contact;