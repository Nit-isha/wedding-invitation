import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";

export default function Home() {
    let navigate = useNavigate();

    return (
        <div className="home-background">
            <img id='image' src='/front-background.png'/>
            <div className='home-container'>
                <button className='home-button' onClick={() => navigate("/invitation")}>You're Invited</button>
            </div>
        </div>
    )
}