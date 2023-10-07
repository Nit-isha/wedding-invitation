import React from 'react';
import Cards from './Cards';
import "../styles/Content.css";

export default function Content() {
  return (
    <div>
        <div className="content-separation first-content"><img src='/1-mehendi.png' /></div>
        <div className="function-images"><img src='/mehendi.jpg' /></div>
        <Cards name={"Mehendi"} date={"December 23 2023, Sunday"} time={"07:00 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/6-engagement.png' /></div>
        <div className="function-images"><img src='/engagement-1.jpg' /></div>
        <Cards name={"Engagement"} date={"December 24 2023, Sunday"} time={"10:00 AM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/5-bhoj.png' /></div>
        <div className="function-images"><img src='/shahi-bhoj-image.jpeg' /></div>
        <Cards name={"Shahi Bhoj"} date={"December 24 2023, Sunday"} time={"01:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/4-sangeet.png' /></div>
        <div className="function-images"><img src='/sangeet-image.jpeg' /></div>
        <Cards name={"Sangeet"} date={"December 24 2023, Sunday"} time={"07:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/3-haldi.png' /></div>
        <div className="function-images"><img src='/haldi-image.jpeg' /></div>
        <Cards name={"Haldi Bloom"} date={"December 25 2023, Sunday"} time={"02:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/7-reception.png' /></div>
        <div className="function-images"><img src='/reception-image-1.jpeg' /></div>
        <Cards name={"Reception"} date={"December 25 2023, Sunday"} time={"07:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>

        <div className="content-separation"><img src='/2-shadi.png' /></div>
        <div className="function-images"><img src='/shaadi-image.jpeg' /></div>
        <Cards name={"Marriage"} date={"December 25 2023, Sunday"} time={"10:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
    </div>
  )
}
