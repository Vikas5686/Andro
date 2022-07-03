import React from 'react';
import './../css/ContactUs.css';
import ScrollToTopOnMount from './Servies_Pages/ScrollToTop'

const ContactUs=()=> {
    return (
        <div>
            <ScrollToTopOnMount/>
            <div className="class row">
                <div className="left_contact col-md-5" >
                    <h2>Get Connected...</h2>
                    <p>if u have any issues bringing<br/> yourself or your workspace<br/> online,we definetly have a<br/> solution for
                        you.</p>
                    <h2 className='Head_line left_contact_head_line'>Don't wait</h2>
                    <p>We will revert back to you<br/> within 24 hours</p>
                    <p>Week-off:Saturday & Sunday</p>
                </div>
                <div className="right_contact col-md-7">
            <h1 className='Head_line Contact_head_line'>Contact us</h1>
                    <input className="user-input" type="text" name="" placeholder="Full Name" required/><br/>
                    <input className="user-input" type="email" name="" placeholder="Your Email" required/><br/>
                    <input className="user-input" type="text" name="" placeholder="Your Topic" required/><br/>
                    <textarea className="user-input txt" rows="5" placeholder="Your Message" required></textarea>
                    <button className="Btn_all btn_contact">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;