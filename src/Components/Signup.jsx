import { Button, Container, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

function Signup(){
    return(
<Container maxW={'container.xl'} h={'100vh'} p={['8','16']} >
    <form >
      { /* login form data  */}
        <VStack alignItems={'stretch'}  w={['full','96']} m={'auto'} my={'16'} >
            <Heading fontSize={["2xl","3xl"]} alignSelf={'center'} className="hindi-heading">पधारो दगडीयो !!</Heading>
            <Text >SignUp and explore new people throughout our beautiful Uttarakhand</Text>

            {/* for input and text */}
            <VStack spacing={'4'} py={"8"}>
            <Text  alignSelf={'flex-start'}>First name</Text>
            <Input />
            <Text  alignSelf={'flex-start'}>Last name</Text>
            <Input />
            <Text  alignSelf={'flex-start'}>Email</Text>
            <Input />
            <Text  alignSelf={'flex-start'}>Password(6 or more characters)</Text>
            <Input type={'password'}/>
            <Button colorScheme={'purple'} w={"full"}>Join now</Button>
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