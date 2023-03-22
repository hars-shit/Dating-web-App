import { Button,  Container, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";

import React, { useState } from "react";
import {AiFillApple} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai' 

const Login=()=>{
  const[showPassword,setShowPassword]=useState(false);
  const[showColor,setShowColor]=useState(false);
  const handlePassword=()=>{
    setShowPassword(!showPassword);
    setShowColor(!showColor);
  }
  return(
   <Container  h={'100vh'} p={'16'} >
    <form >
      
      {/* login form data  */}
        <VStack alignItems={'stretch'}  w={['full','96']} m={'auto'} my={'16'} justifyContent={'center'}>
            <Heading fontSize={'xx-large'} textAlign={'center'}>Welcome Back!</Heading>
            <Text textAlign={'center'} fontSize={'small'} colorScheme={'twitter'}>Login using social media</Text>

            {/* icons of social media  */}
            <HStack justifyContent={"center"} fontSize={'3xl'} gap={'6'}>
            <a href="/"><FcGoogle /></a>
            <a href="/"><FaFacebook color={' #1977f3'} /></a>
            <a href="/"><AiFillTwitterCircle color={'blue'}/></a>
            </HStack>

              {/* this stack is  for receiving input for user*/}


            <VStack spacing={'4'}>
            <Input m={'8'}  required placeholder="Email or Phone" type={'email'} focusBorderColor={'purple.500'} />

          
            <Input  required placeholder="Password"  type={showPassword?"text":"password"} focusBorderColor={'purple.500'}/>
        
            <Button  alignSelf={'flex-end'}  variant={'link'}>
            <AiFillEye    onClick={handlePassword}  color={showColor?"gray":"black"}   cursor={'pointer'} />
  
                <Link  to={'/forgetPassword'}>Forget password?</Link>
            </Button>
            <Link to={'/Home'}>
              <Button backgroundColor={'purple.900'} color={'white'} border={'20px solid none'}  w={['265px','sm']}>Log in</Button>
              </Link>
            <Text  >or</Text>
            <Button  color={'GrayText'} border={'20px solid none'}  w={"full"}><AiFillApple size={'25'} /> Log in with Apple</Button>
        </VStack>
       
        </VStack>
        <HStack justifyContent={'center'} flexDirection={'row'} mt={'4'}>
        <Link to={'/Signup'} ><Text textDecoration={'underline'}>New User? Sign Up </Text>
        </Link>
        </HStack>
    </form>

   </Container>
    );
}
export default Login;
