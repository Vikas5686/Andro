import React from 'react';
import '../../../css/Design_and_Graphs.css'
import './DG.css'
import ScrollToTopOnMount from '../ScrollToTop'
import Servic_card from '../Servic_card'
import DS1 from '../Services_IMGs/unsplash_3MAmj1ZKSZADSGP1.png'


const Design_Graphics = () => {
    return (
        <div>
            <ScrollToTopOnMount />
            <h1 className='Head_line DG_HeadLINe'>Design & Graphics</h1>
            <div className="row DS_Row_1">
                <div className="col-md-6">
                    <img className='DS1_IMG' src={DS1} />
                </div>
                <div className="col-md-6 ">
                    <p className='DS_P_1'>Touch your viewrs heart with our unique designing style.</p>
                    <button className='Btn_all btn_DS'>Get Quotation</button>
                </div>
            </div>
            <div className="row DS_Row_2">
            <Servic_card id={0} id2={1} id3={2} />
            </div>
            <div className="row DS_Row_2">
            <Servic_card id={15} id2={16} id3={17} />
            </div>
            <p className='DS_P_2'>Other services that we provide in designing</p>
            <div className="row DS_Row_2">
                <div className="col-md-4 list">
                <ul>
                    <li>3D Modeling</li>
                    <li>Character Modeling</li>
                    <li>Broucher</li>
                    <li>Flyer</li>
                </ul>
                </div>
                <div className="col-md-4 list">
                <ul >
                    <li>Poster</li>
                    <li>Catalogue</li>
                    <li>Post Card</li>
                    <li>Stylized Signature</li>
                </ul>
                </div>
                <div className="col-md-4 list">
                <ul>
                    <li>Storyboards</li>
                    <li>Brand Style Guides</li>
                    <li>Packaging Design</li>
                    <li>Album Cover Design</li>
                </ul>
                </div>
                
            </div>
        </div>
    )
}
export default Design_Graphics;