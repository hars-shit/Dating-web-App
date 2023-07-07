import {  HStack } from "@chakra-ui/react";
import {BsSearch} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiChat} from 'react-icons/bi'
import {CgPoll} from 'react-icons/cg'
import '/home/harshit/Desktop/React/social-media-app/src/Styles/Footer.scss'

import {IoIosNotificationsOutline} from 'react-icons/io'
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer=()=>{
    const user = useSelector((state)=>state.users[0])

    return (
        <>
    
        <HStack className="nav-bottom" >
            {/* message btn  */}
            <Link to={'/Message'}  className="nav-link" ><BiChat fontSize={'30px'}/></Link>

            {/* search btn */}
            <Link to={'/Search'}  className="nav-link"><BsSearch fontSize={'30px'}/></Link>

            {/* notification btn  */}
           <Link to={'/Notification'} className="nav-link"> <IoIosNotificationsOutline fontSize={'34px'}/></Link>

            {/* home btn  */}
            {/* /${user._id}` */}
           <Link to={`/Profile/${user._id}`}  className="nav-link"> <CgProfile fontSize={'30px'}/></Link>
           <Link to={'/Polls'}  className="nav-link"> <CgPoll fontSize={'30px'}/></Link>
        </HStack>
        </>
    )
}
export default Footer;