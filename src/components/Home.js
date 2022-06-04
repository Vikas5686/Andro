import React from 'react';
import './../css/Home.css';
import R1 from '../img/Rectangle 15.png'
import R2 from '../img/Rectangle 16.png'
import R3 from '../img/Rectangle 17.png'
import R4 from '../img/Rectangle 18.png'

function Home() {
    return (
            <div className='background  '>
                <div className='img_home '>
                    <div className='upper'>
                        <br />
                        <p className='padding_left'>Get your digital issues shorted today!</p>
                    </div>
                    <div className='middle'>
                        <h2 className='padding_left'>We help Organizations or an <br />
                            Individual to be Digital </h2>
                    </div>
                    <div className='lower'>
                        <p className='padding_left'>We provide every element needed by an <br />individual or an organization to keep their <br />
                            digital presence alive.</p>
                    </div>
                    <button className='Btn_all btn_home'>Let's talk</button>
                </div>
                <h1 className='Head_line'>Portfolio</h1>
                <div className="row Image_Cards">
                    <div className="col-md-3 ">
                        <img src={R1} alt="" />
                    </div>
                    <div className="col-md-3">
                        <img src={R2} alt="" />
                    </div>
                    <div className="col-md-3">
                        <img src={R3} alt="" />
                    </div>
                    <div className="col-md-3">
                        <img src={R4} alt="" />
                    </div>
                </div>
                <button className='Btn_all btn_home' >Let's talk</button>
            </div>
    )
}

export default Home;