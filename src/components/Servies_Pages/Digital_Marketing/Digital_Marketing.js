import React from 'react'
import ScrollToTopOnMount from '../ScrollToTop'
import '../DESIGN_Graphics/DG.css'
import './DM.css'
import DM1 from '../Services_IMGs/unsplash_eveI7MOcSmw_DM_1.png'
import DM2 from '../Services_IMGs/unsplash_CNbRsQj8mHQ_DM_2.png'
import DM3 from '../Services_IMGs/unsplash_l5if0iQfV4c_DM_0.png'
import DM4 from '../Services_IMGs/unsplash_lqyqm2ICIcY_DM_4.png'
import DM5 from '../Services_IMGs/unsplash_qwtCeJ5cLYs_DM_5.png'
export default function Digital_Marketing() {
  return (
    <div>
      <ScrollToTopOnMount />
      <div className="Digital_Margketing DS_Row_1">
        <h1 className='Head_line DG_HeadLINe PV_Headline'>Photos and Videos</h1>
        <div className="row ">
          <div className="col-md-6">
            <img className='DS1_IMG PV-IMG_1' src={DM1} />
          </div>
          <div className="col-md-6 ">
            <p className='DS_P_1 DM_P_1'>Having a wonderful website or an application is just not enough to make your mark in the digital world. A website or an application backed with great marketing strategies can brieng extra ordinary result.</p>
          </div>
        </div>
        <p className='PV_R DM_para'>Don’t worry if you don’t have one, we are here to help you.</p>
        <button className='Btn_all DM_btn'>Get Quotation</button>
        <div className="row Dm_row_2">
          <div className="col-md-3">
            <img className='DS1_IMG PV-IMG_1' src={DM2} alt="" srcset="" />
          </div>
          <div className="col-md-3">
            <img className='DS1_IMG PV-IMG_1' src={DM3} alt="" srcset="" />
          </div>
        </div>
        <div className="row">
          <p className='PV_R DM_para DM_para_2'>Our services in the field of marketing</p>
          <div className="col-md-6 list">
            <ul>
              <li>• Search Engine Optimization (SEO) </li>
              <li>• Search Engine Marketing (SEM)</li>
              <li>• Pay-per-click advertising (PPC)</li>
              <li>• Website Strategy</li>
              <li>• Social Media Marketing</li>
              <li>• Social media management & advertising</li>
              <li>• Email Outreach</li>
              <li>• Re-targeting</li>
              <li>• Content Generation and Optimization</li>
              <li>• Quality Link Building</li>
              <li>• Affiliate Marketing</li>
              <li>• Integrated Online Marketing Strategies</li>
              <li>• Content Marketing</li>
              <li>• Copywriting</li>
              <li>• Conversion Rate Optimization</li>
              <li>• Website Design</li>
            </ul>
          </div>
          <div className="col-md-6 list">
            <ul>

              <li>• Voice Search Content Optimization</li>
              <li>• Influencer / Affiliate Marketing</li>
              <li>• Viral Marketing</li>
              <li>• Radio Advertising</li>
              <li>• Television Advertising</li>
              <li>• Mobile Advertising</li>
              <li>• Public Relations Content</li>
              <li>• Brand Journalism</li>
              <li>• Video Marketing</li>
              <li>• Audio Marketing</li>
              <li>• Audio Native Advertising</li>
              <li>• Live Chat</li>
              <li>• Augmented/Virtual Reality Marketing</li>
              <li>• Frequently Asked Questions (FAQs)</li>
              <li>• Instant Messaging Marketing</li>
              <li>• Many More</li>
            </ul>
          </div>
        </div>
        <div className="row Dm_row_2">
          <div className="col-md-3">
            <img className='DS1_IMG PV-IMG_1' src={DM4} alt="" srcset="" />
          </div>
          <div className="col-md-3">
            <img className='DS1_IMG PV-IMG_1' src={DM5} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}
