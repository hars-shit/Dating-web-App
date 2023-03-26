// import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import {BiLike} from 'react-icons/bi'
import {  useSelector } from "react-redux";

import '../Styles/Profile.scss'
const Profile =()=>{
    const data = useSelector((state)=>{
     return state.users;
})
console.log(data);
    
    return (
       < >
      
<div className="img-container">
     {/* for logo cover image */}
     
    <img src="https://tse1.mm.bing.net/th?id=OIP.E-lMO-wOM3j_q8P6PNV4rAHaDS&pid=Api&P=0g" alt=" "/>
  </div>

       
  <div className="profile-image-div">
    <button >
         {/* for profile image  */}
    <img  src="https://bit.ly/dan-abramov" alt=""></img>
    </button>

    <p><BiLike id="svg-like" /> 200</p>
  </div>
      <div className="data-container">
       {
        data.map((user,id)=>{
          return <li key={id}>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
          </li>
        })
       }
        </div>  

       </>
    )
}
export default Profile;