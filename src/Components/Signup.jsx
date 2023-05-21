import { Button, Container, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { saveProfile } from "../store/slices/microReducers";
import '../Styles/SignUp.scss'
import { Link } from "react-router-dom";
function Signup(){

  
    const [storeData,setStoreData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })
    // const user = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    const handleChange=(e)=>{
   
        const name=e.target.name;
        const value=e.target.value;
        setStoreData((pre)=>{
            return { ...pre,[name]:value} ;
        })
    };
    const handleSubmit=(e)=>{
        dispatch(saveProfile(storeData))
    }




    return(
<Container maxW={'container.xl'} h={'100vh'} p={['8','16']} >
    <form>
      { /* login form data  */}
        <VStack alignItems={'stretch'}  w={['full','96']} m={'auto'} my={'8'} >
            <Heading fontSize={["2xl","3xl"]} alignSelf={'center'} className="hindi-heading">पधारो दगडीयो !!</Heading>
            <Text >SignUp and explore new people throughout our beautiful Uttarakhand</Text>

            {/* for input and text */}
            <VStack spacing={'4'} py={"8"}>
            <Text color={'black'} fontWeight={'700'}  alignSelf={'flex-start'}>First name</Text>
            <Input  name="firstName" placeholder="First Name" type={'text'} onChange={handleChange}/>

            <Text color={'black'} fontWeight={'700'}  alignSelf={'flex-start'}>Last name</Text>
            <Input name="lastName" placeholder="Last Name"  type={'text'} onChange={handleChange}/>

            <Text color={'black'} fontWeight={'700'}  alignSelf={'flex-start'}>Email</Text>
            <Input name="email" placeholder="Email" type={'email'} onChange={handleChange}/>

            <Text color={'black'} fontWeight={'700'}  alignSelf={'flex-start'}>Password</Text>
            <Input type={'password'} placeholder="6 or more characters" name="password" onChange={handleChange}/>
            
            
            <Text color={'black'} fontWeight={'700'}  alignSelf={'flex-start'}> Password</Text>
            <Input type={'password'} placeholder="Re-enter the password" name="password" onChange={handleChange}/>
           
           {/* for submitting info */}

           <Link to={'/Question1'}><Button colorScheme={'purple'} w={"full"} onClick={handleSubmit}>Register</Button></Link>
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
