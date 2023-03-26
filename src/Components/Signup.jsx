import { Button, Container, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../store/slices/microReducers";

function Signup(){
    const [storeData,setStoreData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })
    const user = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setStoreData((pre)=>{
            return { ...pre,[name]:value} ;
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(saveProfile(storeData))
        console.log(user)
    }
    return(
<Container maxW={'container.xl'} h={'100vh'} p={['8','16']} >
    <form onSubmit={handleSubmit}>
      { /* login form data  */}
        <VStack alignItems={'stretch'}  w={['full','96']} m={'auto'} my={'16'} >
            <Heading fontSize={["2xl","3xl"]} alignSelf={'center'} className="hindi-heading">पधारो दगडीयो !!</Heading>
            <Text >SignUp and explore new people throughout our beautiful Uttarakhand</Text>

            {/* for input and text */}
            <VStack spacing={'4'} py={"8"}>
            <Text  alignSelf={'flex-start'}>First name</Text>
            <Input name="firstName" type={'text'} onChange={handleChange}/>

            <Text  alignSelf={'flex-start'}>Last name</Text>
            <Input name="lastName"  type={'text'} onChange={handleChange}/>

            <Text  alignSelf={'flex-start'}>Email</Text>
            <Input name="email" type={'email'} onChange={handleChange}/>

            <Text  alignSelf={'flex-start'}>Password(6 or more characters)</Text>
            <Input type={'password'} name="password" onChange={handleChange}/>

            <Button colorScheme={'purple'} w={"full"} type={'submit'}>Join now</Button>
            <Text >or</Text>
           <HStack fontSize={'3xl'} gap={'8'}>
                <a href="/">< FcGoogle/></a>
                <a href="/">< FaFacebook color="blue"/></a>
                <a href="/">< AiFillTwitterCircle color="#52a2c3" fontSize={'35px'}/></a>
                </HStack>
            </VStack>
        </VStack>
    </form>

</Container>
    );
}
export default Signup;
