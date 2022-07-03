import React from 'react';
import './../css/Testimonials.css';

function Testimonials() {
    return (
        <div>
            <div className='body_testinomial'>
                <h2 className='Head_line testinomial_head_line' >Our Happy Clients</h2>
                <div className='img row'>
                    <div className=' col-md-4'>
                        <div className="body1 body_for_all">
                            <p >Really Great Work! Thanks a lot.<br /></p>
                            <p >Sumit Sanyal<br /></p>
                            <p >Project: AI Chat Bot</p>
                        </div>
                    </div>
                    <div className=' col-md-4'>
                        <div className="body2 body3 body_for_all">
                        <p >"What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!"</p>
                        <h4>Vikas Sharma</h4>
                        <h4>Project: Machine Lerning</h4>
                        </div>
                    </div>
                    <div className=' col-md-4'>
                        <div className="body3 body_for_all">
                        <p>“These guy’s did an outstanding job! The job was completed in two days &
                            trouble shoot most of the problems with you until they find a solution! Highly recomended hiring this team.
                            I look forward to work with them again!”</p>
                        <h4>Soumik Sarkar</h4>
                        <h4>Project: Built a bot/Script</h4>
                        </div>
                    </div>
                    <button className='Btn_all btn_testinomial'>Write a Testimony</button>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;