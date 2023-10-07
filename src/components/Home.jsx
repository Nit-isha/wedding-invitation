import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";
import { IoIosArrowForward } from 'react-icons/io';

export default function Home() {
    let navigate = useNavigate();

    return (
        <>
            <div className="home home-background">
                <img id='image' src='/front-background.png'/>
            </div>
            <div className='home home-container'>
                <button className='home-button' onClick={() => navigate("/invitation")}><em>You're Invited</em> <span><IoIosArrowForward size={16} /><IoIosArrowForward size={16}/></span></button>
            </div>
        </>
    )
}