import React from "react";
import '../../css/OurServices.css';
import Servic_card from "./Servic_card";
import {NavLink} from 'react-router-dom'

function OurServices() {
    return (
        <div>
            <div className="service_page">
                <div className="head">
                </div>
                <h3 className="black Head_line float_heading">Design & Graphics</h3>
                <NavLink to="/DG"><button className="Btn_all floatLeft_button">Get quotation</button></NavLink>
                <Servic_card id={0} id2={1} id3={2} />
                <div className="programming">
                <h3 className="black Head_line float_right_heading">Programing</h3>
                <NavLink to="/Programing"><button className="Btn_all float_right_button">Get quotation</button></NavLink>
                    <Servic_card id={3} id2={4} id3={5} />
                    <Servic_card id={6} id2={7} id3={8} />
                </div>
                <div className="banner1">
                <h3 className="black Head_line float_heading">Photos and videos</h3>
                <NavLink to="/Photos_videos"><button className="Btn_all floatLeft_button">Get quotation</button></NavLink>
                    <Servic_card id={9} id2={10} id3={11} />
                </div>
                <div className="banner2">
                <h3 className="black Head_line float_right_heading">More from us</h3>
                <NavLink to="/Digital_Marketing"><button className="Btn_all float_right_button">Get quotation</button></NavLink>
                    <Servic_card id={12} id2={13} id3={14} />
                </div>
            </div>
        </div>
    )
}

export default OurServices;