
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../../resources/creative-agency-main/images/carousel-1.png'
import img2 from '../../../resources/creative-agency-main/images/carousel-2.png'
import img3 from '../../../resources/creative-agency-main/images/carousel-3.png'
import './Works.css'
const Works = () => {
    return (
        <div  className="container work-container mt-5 column">
            <div>
              <h2 style={{fontSize:"34px",textAlign:"center" ,paddingTop:"100px"}}className="p-5 mt-5 text-white">Here are Some of <span style={{color: ' #7AB259'}}>our works</span></h2>
            </div>

            <div >
                <Carousel >
                    <Carousel.Item className="d-flex p-5 carosol">
                        <img
                            
                            src={img1}
                            alt="First slide"
                        />
                        <img
                         
                            src={img2}
                            alt="Third slide"
                        />
                        <img
                            
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="d-flex carosol">
                        <img
                         src={img3}
                         alt="Third slide"
                          
                        />
                        <img
                         
                            src={img2}
                            alt="Third slide"
                        />
                        <img
                          src={img1}
                          alt="First slide"
                            
                        />
                    </Carousel.Item>
             
                </Carousel>
            </div>

        </div>
    );
};

export default Works;