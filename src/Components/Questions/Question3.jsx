import React from "react";
import '/home/harshit/Desktop/React/social-media-app/src/Styles/Question3.scss'
const Question3=()=>{
    return(

        <>
        <div className="main-container">
            {/* div for zodiac sign of user -> */}
            <div className="zodiac-div">
                <p id="heading">Choose Your Zodiac Sign</p>
                    <button>Aries</button>
                    <button>Taurus</button>
                    <button>Gemini</button>
                    <button>Cancer</button>
                    <button>Leo</button>
                    <button>Virgo</button>
                    <button>Libra</button>
                    <button>Scorpio</button>
                    <button>Sagittarius</button>
                    <button>Capricorn</button>
                    <button>Aquarius</button>
                    <button>Pisces</button>
            </div>
            <div className="profession">
                <p id="second-heading">Profession</p>
                <button>Student</button>
                <button>Engineer</button>
                <button>Doctor</button>
                <button>Forces</button>
                <button>House Wife</button>
                <button>Teacher</button>
                <button>Unemployed</button>
                <button>Employed</button>
                <button>others</button>
            </div>
        </div>
        </>
    )
}
export default Question3;