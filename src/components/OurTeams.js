import React from 'react';
import './../css/OurTeams.css';
import DebadipBandyopadhyay from "./../img/DebadipBandyopadhyay.jpeg";
import KunalShankar from "./../img/KunalShankar.jpeg";
import SandipShaha from "./../img/SandipShaha.jpeg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {NavLink} from 'react-router-dom'

function OurTeams() {
    return (
        <div>
            <h2 className='Head_line team_head_line'>Our Teams</h2>
            <div className="row Team_rows">
                <div className='left_team team col-md-4'>
                    <img src={DebadipBandyopadhyay} alt="DebadipBandyopadhyay" />
                    <div className='bio1'>
                        <p>Debadip Bandyopadhyay</p>
                        <p><a href="https://www.linkedin.com/in/debadipb/" target='_blank'><LinkedInIcon className='icon' /></a>Founder</p>
                    </div>
                </div>
                <div className='middle_team team col-md-4'>
                    <img src={KunalShankar} alt="KunalShankar" id='mid' />
                    <div className='bio1'>
                        <p>Kunal Shankar</p>
                        <p><LinkedInIcon className='icon' />Co-Founder</p>
                    </div>
                </div>
                <div className='right_team team col-md-4'>
                    <img src={SandipShaha} alt="SandipShaha" />
                    <div className='bio1'>
                        <p>Sandip Shaha</p>
                        <p><LinkedInIcon className='icon' />Founder</p>
                    </div>
                </div>
                <div className='middle_team_hide team col-md-4'>
                    <img src={KunalShankar} alt="KunalShankar" id='mid' />
                    <div className='bio2'>
                        <p>Kunal Shankar</p>
                        <p><LinkedInIcon className='icon' />Co-Founder</p>
                    </div>
                </div>
            </div>
            <div className='para' >
                <p>We are not limited to founder & co-founder we have a team of 25+. We excel at every aspect of online<br />
                    marketing and bring a result-oriented digital plan for you. We believe in customer satisfaction and<br />
                    quality delivery in every project we take.</p>
            </div>
            <NavLink to="/contactus"><button className='Btn_all team_button'>Let's talk</button></NavLink>
        </div>
    )
}

export default OurTeams;