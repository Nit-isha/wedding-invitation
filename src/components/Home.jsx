import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";

export default function Home() {
    let navigate = useNavigate();

    return (
        <div className="home-background">
            <div className='home-container'>
                <button className='home-button' onClick={() => navigate("/bride")}>Bride</button>
                <button className='home-button' onClick={() => navigate("/groom")}>Groom</button>
            </div>
        </div>
    )
}