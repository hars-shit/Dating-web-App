import { Button, Container, HStack, Input, Text, VStack } from "@chakra-ui/react";
import {HiTrendingUp} from 'react-icons/hi'
import {FcSportsMode} from 'react-icons/fc'
import {BiCameraMovie} from 'react-icons/bi'
import {RiMentalHealthFill} from 'react-icons/ri'
import {IoMdCreate} from 'react-icons/io'
import {IoIosAdd} from 'react-icons/io'
import React, { useEffect, useState } from "react";
import {MdDone} from "react-icons/md";
import axios from "axios";

const Polls=()=>{
    const [post,setPost]=useState(false);
    const [trends,setTrends]=useState(false);
    const [sports,setSports]=useState(false);
    const [entertain,setEntertain]=useState(false);
    const [health,setHealth]=useState(false);
    const [pTrends,setPtrends]=useState(false);
    const [pSports,setPsports]=useState(false);
    const [pentertain,setPentertain]=useState(false);
    const [pHealth,setPhealth]=useState(false);

    const[apiData,setApiData]=useState();
    // const [image,setImage]=useState();
    // const handleImage=(e)=>{
    //     setImage(e.target.files);
    // }
    // const handleupload=()=>{
    //     const formData=new FormData();
    //     formData.append(image);
    // }
    const handleclickPost=()=>{
        setPost(!post)
        setEntertain(false)
        setHealth(false)
        setTrends(false)
        setSports(false)
    }
    const handleclickTrends=()=>{
        setTrends(!trends)
        setPost(false)
        setEntertain(false)
        setHealth(false)
        
        setSports(false)
    }
    const handleclickSport=()=>{
        setSports(!sports)
        setPost(false)
        setEntertain(false)
        setHealth(false)
        setTrends(false)
        
    }
    const handleclickEntertain=()=>{
        setEntertain(!entertain)
        setPost(false)
        setHealth(false)
        setTrends(false)
        setSports(false)
    }
    const handleclickHealth=()=>{
        setHealth(!health)
        setPost(false)
        setEntertain(false)
        
        setTrends(false)
        setSports(false)
    }

   const chooseTrends=()=>{
    setPtrends(!pTrends);
   }
   const chooseSports=()=>{
    setPsports(!pSports);
   }
   const chooseEntertain=()=>{
    setPentertain(!pentertain);
   }
   const chooseHealth=()=>{
    setPhealth(!pHealth);
   }
   useEffect(()=>{
    const usersPost = async ()=>{
      try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=590f50f2a3d244b8b769733d36da0933`)
        setApiData(response.data)
      }catch(err){
        console.log(err)
      }
    }
    usersPost()
  },[])
    return(
       
         <Container display={'flex'} maxW={'160vh'} marginTop={'2rem'} >
        <VStack >
            <Text fontSize={'4xl'} fontWeight={'800'} alignSelf={'flex-start'}   color={'black'}>Impressions</Text>
            <HStack  display={'flex'} alignSelf={'flex-start'} >

                {/* for posting  */}
       <Button   border={'2px solid white'} onClick={handleclickPost} colorScheme={"telegram"} borderRadius={'20px'}  ><IoMdCreate style={{fontSize:"1.5rem"}}/></Button> 
       
     {/* for trends */}
       <Button colorScheme={"facebook"} onClick={handleclickTrends}   border={'2px solid white'} borderRadius={'20px'}><HiTrendingUp />&nbsp;Trends</Button>
      
        {/* for sport  */}
       <Button  colorScheme={"facebook"} onClick={handleclickSport} border={'2px solid white'} borderRadius={'20px'}><FcSportsMode />&nbsp;Sports</Button>
       
        {/* for entertainment  */}
        </HStack>
        <HStack  display={'flex'} alignSelf={'flex-start'} >
       <Button  colorScheme={"facebook"} onClick={handleclickEntertain} border={'2px solid white'} borderRadius={'20px'}><BiCameraMovie />&nbsp;Entertainment</Button>
      
        {/* for health  */}
       <Button  colorScheme={"facebook"} onClick={handleclickHealth} border={'2px solid white'} borderRadius={'20px'}><RiMentalHealthFill />&nbsp;Health</Button>
       </HStack>    
       <Container   width={'48vh'} marginTop={'2rem'} position={'relative'} right={'1rem'}>

           {
            post && 
         
            <VStack marginTop={'1rem'} display={'flex'} gap={'1rem'}>
                <Input height={'4rem'}  placeholder={"पोस्ट की फोटो साझा करे..."} />
                {/* onChange={handleImage} */}
                <Input type={"file"} accept={"Image"} />
                {/* <Button  onClick={handleupload}>Upload File</Button> */}
                <Input  placeholder={"आप इस पोस्ट से क्या समझ रहे है..."} />
                <VStack alignItems={'flex-start'}>
                    <HStack>     
                <Button  colorScheme={"telegram"} onClick={chooseTrends} border={'2px solid white'} borderRadius={'20px'}>{!pTrends ? <IoIosAdd style={{fontSize:"1.5rem",color:"white"}}/>:<MdDone style={{fontSize:"1.2rem",color:"white"}}/>}&nbsp;Trends</Button>
                <Button  colorScheme={"telegram"} onClick={chooseSports} border={'2px solid white'} borderRadius={'20px'}>{!pSports ? <IoIosAdd style={{fontSize:"1.5rem",color:"white"}}/>:<MdDone style={{fontSize:"1.2rem",color:"white"}}/>}&nbsp;Sports</Button>
                <Button  colorScheme={"telegram"} onClick={chooseHealth} border={'2px solid white'} borderRadius={'20px'}>{!pHealth ? <IoIosAdd style={{fontSize:"1.5rem",color:"white"}}/>:<MdDone style={{fontSize:"1.2rem",color:"white"}}/>}&nbsp;Health</Button>
                    </HStack>
        
                <HStack>

                <Button justifyContent={"flex-start"} colorScheme={"telegram"} onClick={chooseEntertain} border={'2px solid white'} borderRadius={'20px'}>{!pentertain ? <IoIosAdd style={{fontSize:"1.5rem",color:"white"}}/>:<MdDone style={{fontSize:"1.2rem",color:"white"}}/>}&nbsp;Entertainment</Button>
                </HStack>
                </VStack>
                <Button colorScheme={"purple"} width={"80"}>Post</Button>
                
                

            </VStack>
         
           }
         
       {
        health && 
        <img src={apiData.articles.urlToImage}/>     
       }
        {
        trends && 
     
        <Text color={"black"}>tre</Text>
       
       }
       {
       sports && 
    
        <Text color={"black"}>sp</Text>
      
       }
        {
        entertain && 
       
        <Text color={"black"}>ent</Text>
      
       }
         </Container>
   
        </VStack>
       
        </Container>
    )
}
export default Polls;