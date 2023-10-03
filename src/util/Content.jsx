import React from 'react';
import Cards from './Cards';
import "../styles/Content.css";

export default function Content() {
  return (
    <div>
        <div className="content-separation first-content"><img src='/1-mehendi.png' /></div>
        <img className='function-images' src='/mehendi.jpg' />
        <Cards name={"Mehendi"} date={"December 23 2023, Sunday"} time={"07:00 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/6-engagement.png' /></div>
        <img className='function-images' src='/engagement-1.jpg' />
        <Cards name={"Engagement"} date={"December 24 2023, Sunday"} time={"10:00 AM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/5-bhoj.png' /></div>
        <img className='function-images' src='/shahi-bhoj-image.jpeg' />
        <Cards name={"Shahi Bhoj"} date={"December 24 2023, Sunday"} time={"01:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/4-sangeet.png' /></div>
        <img className='function-images' src='/sangeet-image.jpeg' />
        <Cards name={"Sangeet"} date={"December 24 2023, Sunday"} time={"07:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/3-haldi.png' /></div>
        <img className='function-images' src='/haldi-image.jpeg' />
        <Cards name={"Haldi Bloom"} date={"December 25 2023, Sunday"} time={"02:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/7-reception.png' /></div>
        <img className='function-images' src='/reception-image-1.jpeg' />
        <Cards name={"Reception"} date={"December 25 2023, Sunday"} time={"07:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/2-shadi.png' /></div>
        <img className='function-images' src='/shaadi-image.jpeg' />
        <Cards name={"Marriage"} date={"December 25 2023, Sunday"} time={"10:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
    </div>
  )
}
