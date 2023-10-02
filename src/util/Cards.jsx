import React from 'react';
import "../styles/Cards.css"

export default function Cards({ name, date, time, venue }) {
  return (
    <div className='card-container'>
        <img className='card-flower' src='/10.png' />
        <div className="card-name">{name}</div>
        <div className="card-date">{date}</div>
        <div className="card-time">{time}</div>
        <div className="card-venue">{venue}</div>
        <button className="card-map" onClick={() => window.open("https://maps.app.goo.gl/GXU6uwFZ4voPQj3j7")}>View Map</button>
        <img className='card-doll' src='/11.png' />
    </div>
  )
}
