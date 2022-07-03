import React from 'react'
import ScrollToTopOnMount from '../ScrollToTop'
import '../DESIGN_Graphics/DG.css'
import  './programing.css'
import Servic_card from '../Servic_card'
import PRGRAM1 from '../Services_IMGs/image 1PROGRAM-1.png'
import {NavLink} from 'react-router-dom'

export default function Programing() {
  return (
    <div>
      <ScrollToTopOnMount />
      <h1 className='Head_line DG_HeadLINe P_Heading '>Programing</h1>
      <div className="programing DS_Row_1">
      <div className="row ">
        <div className="col-md-6">
          <img className='DS1_IMG' src={PRGRAM1} />
        </div>
        <div className="col-md-6 ">
          <p className='DS_P_1 P_1'>Get our unique UI/UX sytle for your website and app which attracts your potential viewrs.</p>
          <NavLink to="/contactus"><button className='Btn_all btn_DS'>Get Quotation</button></NavLink>
        </div>
      </div>
      <div className="row  DS_Row_2">
        <Servic_card id={3} id2={4} id3={5} />
      </div>
      <div className="row  DS_Row_2">
        <Servic_card id={6} id2={7} id3={8} />
      </div>
      <p className='DS_P_2 p_1'>Get your website & App imagination come true with our experienced team as per your need. Make your website responsive across all devices & with easy to use, user interface along with extraordinary responsive time. Bring high security to your Android & iOS Applications.</p>
      </div>
    </div>
  )
}
