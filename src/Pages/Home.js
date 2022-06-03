import React from 'react'
import '../Assests/Home.css'
export default function Home() {
  return (
    <>
  <div className='main_slider'>
      <div className='container'>
          <div className='slider_content'>
            <h2>CAR REPAIR</h2>
            <h3>AUTO MAINTENANCE,<br/>SERVICE & REPAIR</h3>
            <p>At vitae commodo amet libero tortor blandit risus condimentum mauris.<br/> 
              Cras arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam a<br/>  ac maecenas 
              purus amet sapien id suspendisse porttitor tempor at donec<br/>  massa nibh massa urna et.</p>
          </div>
          <div className=' button_slider'>
           <button>Schedule an appointment</button>
           <button>Browse services</button>
          </div>
      </div>
  </div>

  {/* ------------main slider end----------- */}
    <div className='rating_area'>
      <div className='container'>
        <div className='rating_main'>
          <div className='rating_boxes'>
            <h2>10<span>+</span></h2>
            <h3>YEARS OF SERVICE</h3>
          </div>
          <div className='rating_boxes'>
          <h2>50K<span>+</span></h2>
            <h3>HAPPY CLIENTS</h3>
          </div>
          <div className='rating_boxes'>
          <h2>99<span>%</span></h2>
            <h3>CUSTOMER SATISFACTION</h3>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
