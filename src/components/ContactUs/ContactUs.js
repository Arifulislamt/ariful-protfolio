import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import image from "../../image/Get in touch-amico (1).png";

const ContactUs = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3gugdq9', 'template_s60fiie', form.current, 'user_r6rXtnUYovd6Wdqj9xxuX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          alert(error.text);
      });
      alert('sending successfully')
      e.target.reset();
  };

    return (
        <div>
            <h1 className="my-5 text-center fw-bold ">Contact <span className="text-warning">Us</span></h1>
            <div className="background-color">
               <div className="container">
               <div className="row mb-5">
                    <div className="col-md-6">
                        <img className="w-75" src={image} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className=" w-75 m-auto my-5 shadow-lg p-5">
                            <div className="">
                                <div className="bg-white p-5 rounded">
                                    <form ref={form} onSubmit={sendEmail}>
                                      {/* <label>Name</label> */}
                                       <input className="w-100" placeholder="Name" type="text" name="user_name" />
                                       <br />
                                        {/* <label>Email</label> */}
                                         <input className="w-100 my-3" placeholder="Email" type="email" name="user_email" />
                                         <br />
                                         {/* <label>Message</label> */}
                                         <textarea className="w-100" placeholder="Message" name="message" />
                                         <br />
                                         <input type="submit" value="Send" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default ContactUs;