import {  Container, HStack, Image } from "@chakra-ui/react";
// import { data } from "./data";
import React from "react";
import { data } from "./Data";
import {IoMdPersonAdd} from 'react-icons/io';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Stories=()=>{
    const user = useSelector((state)=>state.users[0])

    return(
        <Container display={'flex'} flexDirection={'row'} width={"100vw"}  >
            <HStack display={'flex'}  justifyContent={'space-evenly'}  >
            {/* to={`/Profile/${user._id}`}  */}
            <Link to={'/Working'} width={'100px'} height={'100px'} borderRadius={'50%'} ><IoMdPersonAdd fontSize={'2rem'}  /></Link>
            <HStack display={'flex'} alignItems={"center"} overflow={"scroll"} justifyContent={'space-evenly'} >
        {
            data.map((item)=>{
                return(
                   
                <Image src={item.image} width={'100px'} height={'100px'} border={'1px solid skyblue'} borderRadius={'50%'}/>
                )
            }) 
}
        </HStack>
</HStack>
        </Container>
      
    )
}
export default Stories;