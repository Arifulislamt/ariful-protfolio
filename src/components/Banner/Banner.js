import React from 'react';
import './Banner.css';
import images from '../../image/pic.png';
import Typical from 'react-typical';

const Banner = () => {
    return (
       <div className="background-color py-5">
            <div  className="container">
            <div className="row p-5 d-flex justify-content-center align-items-center">
               <div className="col-md-6 text-light">
                    <div><h3>Hello, I'M <span style={{color: "#FFC107"}}>Ariful Islam</span></h3></div>
                    <div>
                        <h1>
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Full stack Developer",
                                3000,
                                "MERN Stack Developer",
                                3000,
                                "React Developer",
                                3000,
                            ]}
                            />
                        </h1>
                    </div>
                    <div>
                       <button className="btn btn-warning">
                           <a style={{textDecoration: "none", color: "Black"}} href="Ariful Islam Resume.pdf" download="Ariful Islam Resume.pdf">
                           <span className="fw-bold">Get Resume</span>
                           </a>
                       </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="w-100 ms-2" src={images} alt=""/>
                </div>
               </div>
            </div>
       </div>
    );
};

export default Banner;