import React from 'react';
import Cards from './Cards';
import "../styles/Content.css";

export default function Content() {
  return (
    <div>
        <img className='function-images' src='/mehendi.jpg' />
        <Cards name={"Mehendi"} date={"December 23 2023, Sunday"} time={"07:00 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
        <div className="dotted-line">. . .</div>
        <img className='function-images' src='/engagement.jpg' />
        <Cards name={"Engagement"} date={"December 24 2023, Sunday"} time={"10:00 AM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
        <Cards name={"Shahi Bhoj"} date={"December 24 2023, Sunday"} time={"01:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
        <Cards name={"Sangeet"} date={"December 24 2023, Sunday"} time={"07:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
        <Cards name={"Haldi Bloom"} date={"December 25 2023, Sunday"} time={"02:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
        <Cards name={"Reception"} date={"December 25 2023, Sunday"} time={"07:30 PM"} venue={"Ram Krishna ki Bagiya, Betul"}/>
    
    </div>
  )
}
