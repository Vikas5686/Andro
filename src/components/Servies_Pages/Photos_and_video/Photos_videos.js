import React from 'react'
import ScrollToTopOnMount from '../ScrollToTop'
import '../DESIGN_Graphics/DG.css'
import PV1 from '../Services_IMGs/unsplash_WxM465oM4j4_PV-1.png'
import PV_1 from '../Services_IMGs/unsplash_ihDcta7Kvqg_PV_1.png'
import PV_2 from '../Services_IMGs/unsplash_wBzam0EPbXU_PV-2.png'
import PV_3 from '../Services_IMGs/unsplash_RDxr5k3TUds_PV_3.png'
import PV_4 from '../Services_IMGs/unsplash_yk9VXp4W5-Q_PV_4.png'
import PV_5 from '../Services_IMGs/Rectangle 12_PV_5.png'
import PV_6 from '../Services_IMGs/unsplash_X-etICbUKec_PV_6.png'
import './PV.css'
import {NavLink} from 'react-router-dom'

export default function Photos_videos() {
  return (
    <div>
      <ScrollToTopOnMount />
      <h1 className='Head_line DG_HeadLINe PV_Headline'>Photos and Videos</h1>
      <div className="PHOTO_Video">
        <div className="row DS_Row_1">
          <div className="col-md-6">
            <img className='DS1_IMG PV-IMG_1' src={PV1} />
          </div>
          <div className="col-md-6 ">
            <p className='DS_P_1 P_1'>Get your moments and memories Captured...</p>
            <NavLink to="/contactus"><button className='Btn_all btn_DS'>Get Quotation</button></NavLink>
          </div>
        </div>
        <div className="row DS_Row_1 PV_Row_2">
          <div className="col-md-4 PV_L">
            <h4>Photography</h4>
            <img className='DS1_IMG Pv_IMg_1' src={PV_1} alt="" srcset="" />
          </div>
          <div className="col-md-8 ">
            <p className='PV_R PD_Top'>Be it any event or ocassion we can bring our creativity as per your need. Photography is not only a way to capture some moments but to create a masterpice that will keep the memories preserved as long as you want them. We leave no creative ways to make your pictures unlike anything else.</p>
          </div>
        </div>
        <div className="row DS_Row_1 PV_Row_2">
          <div className="col-md-8 ">
            <p className='PV_R'> Retouching, Airbrushing, Photoshopping, Clearing or Photo manipulation. We do it all. Editing is the work of an artist which can bend reality. Our professionals have mastered this art through multiple projects.
              Tool mostly used by our professionals are Ps, Lr, DW, Ae, Pr, Ai, Fw, Picasa, etc.,</p>
          </div>
          <div className="col-md-4 ">
            <img className='DS1_IMG Pv_IMg_1' src={PV_2} alt="" srcset="" />
            <h4>Photo Editing</h4>
          </div>
        </div>
        <div className="row DS_Row_1 PV_Row_2">
          <div className="col-md-4 PV_L">
            <h4>Cinematography</h4>
            <img className='DS1_IMG Pv_IMg_1' src={PV_3} alt="" srcset="" />
          </div>
          <div className="col-md-8 ">
            <p className='PV_R PD_Top'>Personal or Professional we will be there to roll cameras or just record audio. Documentary, Short films, Song videos, etc., Get everything shot easily with us. We are also good with using new and trending creative ways to make your work look professional and eye-catching.</p>
          </div>
        </div>
        <div className="row DS_Row_1 PV_Row_2">
          <div className="col-md-8 ">
            <p className='PV_R'>We don’t just fill the gaps between two shots with some transitions but we also make sure to apply some creativity in every part of your video. Our professionals are good at offline editing, vision mixing, adding special effects and retouching the video according to the theme. Be it Post Production, Cutting or Merging, Be-spoke Editing, VFX, etc.,</p>
          </div>
          <div className="col-md-4 ">
            <img className='DS1_IMG Pv_IMg_1' src={PV_4} alt="" srcset="" />
            <h4>Video Editing</h4>
          </div>
        </div>
        <div className="row DS_Row_1 PV_Row_2">
          <div className="col-md-4 PV_L">
            <h4>Subtitle/Caption</h4>
            <img className='DS1_IMG Pv_IMg_1' src={PV_5} alt="" srcset="" />
          </div>
          <div className="col-md-8 ">
            <p className='PV_R PD_Top'>Adding a Subtitle in someone’s regional language makes it available for them and makes them your consumer ultimately.  No matter how good the contents are faraway people are still going to ignore a video sometimes but, a minor addition of subtitle can fix that. Be it Multi-Lingual, Regional Words, Music Subtitle, Voice to Transcript, Figure of Speech, Correction, etc.,</p>
          </div>
        </div>
        <div className="row DS_Row_1 PV_Row_2">
          <div className="col-md-8 ">
            <p className='PV_R'>The amount of work someone does on a video may get nullified if the audio is not up to the mark. Therefore, don’t take the risk and leave a good impression by perfecting your audio today. Be it Recording, Mastering, Voice Overs, Pitch Correction, Cutting/Merging, Enhanchement, etc., Audio generation is a form of art and when it is combined with science, it can cross our expectations and be something that will be praised forever. </p>
          </div>
          <div className="col-md-4 ">
            <img className='DS1_IMG Pv_IMg_1' src={PV_6} alt="" srcset="" />
            <h4>Audio </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
