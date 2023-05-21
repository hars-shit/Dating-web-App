import {  Container, HStack, Image } from "@chakra-ui/react";
import { data } from "./data";
import React from "react";
import {IoMdPersonAdd} from 'react-icons/io';
import { Link } from "react-router-dom";
const Stories=()=>{
    return(
        <Container display={'flex'} maxW={'100%'} flexDirection={'row'}  >
            <HStack display={'flex'} marginRight={'20px'} overflowX={'scroll'} justifyContent={'space-evenly'} width={'300px'} marginTop={'15px'} marginBottom={'15px'} >
            <Link to={'/Profile'} width={'90px'} height={'65px'} border={'1px solid '} borderRadius={'50%'}><IoMdPersonAdd fontSize={'2rem'}   /></Link>
        {
            data.map((item)=>{
                return(
                    <HStack  display={'flex'} marginRight={'20px'} justifyContent={'space-evenly'} width={'300px'} marginTop={'15px'} marginBottom={'15px'} >
                <Link to={'/Profile'}><Image src={item.image} width={'50px'} height={'50px'} border={'1px solid skyblue'} borderRadius={'50%'}/>
                </Link>
                </HStack>
       
                )
            })
        }
</HStack>
        </Container>
      
    )
}
export default Stories;