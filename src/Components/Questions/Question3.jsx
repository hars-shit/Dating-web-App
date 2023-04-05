import React, { useState } from "react";
import '../../Styles/Question3.scss'
import { Link } from "react-router-dom";
const Question3=()=>{

    // for zodic sign 
    const[zodic,setZodic]=useState({
        Aries:"",
        Taurus:"",
        Gemini:"",
        Cancer:"",
        Leo:"",
        Virgo:"",
        Libra:"",
        Scorpio:"",
        Sagittarius:"",
        Capricorn:"",
        Aquarius:"",
        Pisces:""
    
    })

    const[prof,setprof]=useState({
        Student:"",
        Engineer:"",
        Doctor:"",
        Forces:"",
        Wife:"",
        Teacher:"",
        Unemployed:"",
        Employed:"",
        others:"",
    })
    const handleclickZodic=e=>{
        const value=e.target.value;
        const name=e.target.name;
        console.log(name +":" +value);
        setZodic((pre)=>{
            return{ ...pre,[name]:value}
        })
    }
    const handleclickProfession=e=>{
        const value=e.target.value;
        const name=e.target.name;
        console.log(name +":"+value);
        setprof((pre)=>{
            return{ ...pre,[name]:value};
        })
    }
    const handleSubmit=(e)=>{
        console.log(zodic);
        console.log(prof);
    }
    return(
        <>
        <div className="main-container">
            {/* div for zodiac sign of user -> */}
            <div className="zodiac-div">
                <p id="heading">Choose Your Zodiac Sign</p>
                    <button onClick={handleclickZodic} value="Aries" name="Aries">Aries</button>
                    <button onClick={handleclickZodic} value="Taurus" name="Taurus">Taurus</button>
                    <button onClick={handleclickZodic} value="Gemini" name="Gemini">Gemini</button>
                    <button onClick={handleclickZodic} value="Cancer" name="Cancer">Cancer</button>
                    <button onClick={handleclickZodic} value="Leo" name="Leo">Leo</button>
                    <button onClick={handleclickZodic} value="Virgo" name="Virgo">Virgo</button>
                    <button onClick={handleclickZodic} value="Libra" name="Libra">Libra</button>
                    <button onClick={handleclickZodic} value="Scorpio" name="Scorpio">Scorpio</button>
                    <button onClick={handleclickZodic} value="Sagittarius" name="Sagittarius">Sagittarius</button>
                    <button onClick={handleclickZodic} value="Capricorn" name="Capricorn">Capricorn</button>
                    <button onClick={handleclickZodic} value="Aquarius" name="Aquarius">Aquarius</button>
                    <button onClick={handleclickZodic} value="Pisces" name="Pisces">Pisces</button>
            </div>
            <div className="profession">
                <p id="second-heading">Profession</p>
                <button onClick={handleclickProfession} value="Student" name="Student">Student</button>
                <button onClick={handleclickProfession} value="Engineer" name="Engineer">Engineer</button>
                <button onClick={handleclickProfession} value="Doctor" name="Doctor">Doctor</button>
                <button onClick={handleclickProfession} value="Forces" name="Forces">Forces</button>
                <button onClick={handleclickProfession} value="Wife" name="Wife">House Wife</button>
                <button onClick={handleclickProfession} value="Teacher" name="Teacher">Teacher</button>
                <button onClick={handleclickProfession} value="Unemployed" name="Unemployed">Unemployed</button>
                <button onClick={handleclickProfession} value="Employed" name="Employed">Employed</button>
                <button onClick={handleclickProfession} value="others" name="others">others</button>
            </div>
            <div className="submit-div" >               
         <Link to={'/Home'}>
         <button className="submit" onClick={handleSubmit}>Let's Start !!</button>
         </Link>   
            </div>
        </div>
        </>
    )
}
export default Question3;