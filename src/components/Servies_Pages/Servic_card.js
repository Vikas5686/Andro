import React from 'react'
import ProgramData from '../static data/ProgrammingData'

export default function Servic_card(props) {
  return (
    <>
      <div className="row card_img">
        <div className="col-md-4  ">
          <img src={ProgramData[props.id].img} alt="" />
          <h4 className='black'>{ProgramData[props.id].title}</h4>
        </div>
        <div className="col-md-4 ">
          <img src={ProgramData[props.id2].img} alt="" />
          <h4 className='black'>{ProgramData[props.id2].title}</h4>

        </div>
        <div className="col-md-4 ">
          <img src={ProgramData[props.id3].img} alt="" />
          <h4 className='black'>{ProgramData[props.id3].title}</h4>

        </div>
      </div>
    </>
  )
}
