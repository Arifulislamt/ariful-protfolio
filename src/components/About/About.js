import React from 'react';
import './About.css';
import image from "../../image/ariful.jpg";

const About = () => {
    return (
        <div className="background-color p-5">
            <div className="my-5 shadow-lg p-5 rounded bg-white container">
                <div className="text-center ">
                    <h1 className="fw-bold"><span style={{ color: "#FFC107" }}>About</span> Me</h1>
                    <p>why Choose Me</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-5">
                            <img className="img-fluid rounded shadow-lg" src={image} alt="" />
                        </div>
                        <div className="col-md-6">
                            <p className="text-start my-5">I am a full stack web developer. From my perspective view, I reckon that Programming is not a professional thing for me it is all about an eager passion of mine. Developing a web application with ensuring high efficiency is one of my best task responsibilities in this field. I could assure you that the website which I would build you, would, undoubtedly, be highly secure, convenient to use, and easy to operate.</p>
                            <h4 className="fw-bold text-start">Here are a Few Highlights:</h4>
                            <li className="text-start fw-bold">Full Stack web developer.</li>
                            <li className="text-start fw-bold">Interactive front end as per the design.</li>
                            <li className="text-start fw-bold">React and React Router.</li>
                            <li className="text-start fw-bold">Building REST API.</li>
                            <li className="text-start fw-bold">Managing database.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;