import { GridItem, Container, Grid, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";
import {FcViewDetails} from 'react-icons/fc'
import {ImStatsDots} from 'react-icons/im'
import {BiSupport} from 'react-icons/bi'
import {FcFaq} from 'react-icons/fc'
import {MdContentPaste} from 'react-icons/md'
import {RiLogoutBoxRLine} from "react-icons/ri"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Help=()=>{
    const navigate = useNavigate()

    const handleLogout = async () =>{
        // alert()
        localStorage.clear()
        try{
            await axios.post(`http://localhost:8000/api/v1/auth/logout`)
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    
   return(
    <Container display={'flex'} maxW={'160vh'} marginTop={'2rem'} >
    <VStack >
        <Text fontSize={'4xl'}marginBottom={'10'} fontWeight={'800'} alignSelf={'flex-start'}   color={'black'}>Help & Support</Text>
        <Grid  templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem ><Button width={"160px"} height={"80px"} display={"flex"} gap={"7px"} flexDirection={"column"}><FcViewDetails style={{fontSize:"30px"}}/>Account Details</Button></GridItem>
            <GridItem><Button width={"160px"} height={"80px"} display={"flex"} gap={"7px"} flexDirection={"column"}><ImStatsDots style={{fontSize:"30px"}}/>Impressions</Button></GridItem>
            <GridItem><Button width={"160px"} height={"80px"} display={"flex"} gap={"7px"} flexDirection={"column"}><BiSupport style={{fontSize:"30px"}}/>Contact & Support</Button></GridItem>
            <GridItem><Button width={"160px"} height={"80px"} display={"flex"} gap={"7px"} flexDirection={"column"}><FcFaq style={{fontSize:"30px"}}/>FAQs</Button></GridItem>
            <GridItem><Button width={"160px"} height={"80px"} display={"flex"} gap={"7px"} flexDirection={"column"}><MdContentPaste style={{fontSize:"30px"}}/>Term & Conditions</Button></GridItem>
            <GridItem onClick={handleLogout}><Button width={"160px"} height={"80px"} display={"flex"} gap={"7px"} flexDirection={"column"}><RiLogoutBoxRLine style={{fontSize:"30px"}}/>Log Out</Button></GridItem>

            </Grid>
            </VStack>
            </Container>
   )
}
export default Help;