// hoobies and zodic sign 

import React, { useState } from "react";
import '/home/harshit/Desktop/React/social-media-app/src/Styles/Question2.scss'
import { Link } from "react-router-dom";
  

const Question2=()=>{
    const [storeData,setStoreData]=useState(
        {
            Music:"",
            Dacing:"",
            Fashion:"",
            Gaming:"",
            Cooking:"",
            Driving:"",
            Crafts:"",
            Drawing:"",
            Movies:"",
            Art : "",
            travelling:"",
            Sports:"",
            Blooging:"",
            Reading:"",
            Photography:"",

        }
    );
    
    
    const handleClick=(e)=>{
        
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
        setStoreData((pre)=>{
            return { ...pre,[name]:value} ;
        })
    };
    const handleSubmit=(e)=>{
      
        console.log(storeData);
        
    }
    
    return(
        <div className="main-container">
            <div className="heading">
            <h1>You Interests</h1>
            </div>
            <div className="btn-container">
                <button id="btn-1" onClick={handleClick} name="Music" value='Music'>Music</button>
                <button id="btn-2" onClick={handleClick} name="Dancing" value='Dancing'>Dancing</button>
                <button id="btn-3" onClick={handleClick} name="Fashion" value='Fashion'>Fashion</button>
                <button id="btn-4" onClick={handleClick} name="Gaming" value='Gaming'>Gaming</button>
                <button id="btn-5" onClick={handleClick} name="Cooking" value='Cooking'>Cooking</button>
                <button id="btn-6" onClick={handleClick} name="Driving" value='Driving'>Driving</button>
                <button id="btn-7" onClick={handleClick} name="Crafts" value='Crafts'>Crafts</button>
                <button id="btn-8" onClick={handleClick} name="Drawing" value='Drawing'>Drawing</button>
                <button id="btn-9" onClick={handleClick} name="Movies" value='Movies'>Movies</button>
                <button id="btn-10" onClick={handleClick} name="Art" value='Art & Craft'>Art & Craft</button>
                <button id="btn-11" onClick={handleClick} name="travelling" value='Travelling'>Travelling</button>
                <button id="btn-12" onClick={handleClick} name="Sports" value='Sports'>Sports</button>
                <button id="btn-13" onClick={handleClick} name="Blogging" value='Blogging'>Blogging</button>
                <button id="btn-14" onClick={handleClick} name="Reading" value='Reading'>Reading</button>
                <button id="btn-15" onClick={handleClick} name="Photography" value='Photography'>Photography</button>
            </div>
            <div className="submit-btn">
              <Link to={'/Question3'}>
   <button id="btn-16" onClick={handleSubmit}>NEXT</button>
              </Link>
              
            </div>
        </div>
    )
}
export default Question2;