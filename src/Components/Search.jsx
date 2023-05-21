import { Button, Container, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import {RiFindReplaceLine} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
const Search=()=>{
    const [text,setText]=useState(<RiFindReplaceLine />);
    
    const changeText=(e)=>{
        setText(<FaUserFriends/>);
        
        
    }
    return(
        
        <Container display={'flex'} maxW={'160vh'} marginTop={'2rem'} >
        <VStack >
            <Text fontSize={'4xl'} fontWeight={'800'} alignSelf={'flex-start'}   color={'black'}>Search Box</Text>
            <HStack  display={'flex'} alignSelf={'flex-start'} >
                <Input placeholder="search city" />
                <Input placeholder="search area" />
            </HStack>
            <Button background={'twitter.700'} color={'whiteAlpha.900'} onClick={changeText} _hover={{background:"twitter.800"}} fontWeight={'700'}>{text}</Button>
        </VStack>
        </Container>
    )
}
export default Search;