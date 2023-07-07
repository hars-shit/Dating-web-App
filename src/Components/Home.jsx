
import React, { useEffect, useState } from "react";

import CardPerPerson from "./CardPerPerson";
import Header from "./Header";
import Stories from "./Stories";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { Container, Grid, GridItem } from "@chakra-ui/react";




const Home=()=>{

    const[post, setPost] = useState([])

    const user = useSelector((state)=>state.users[0])

    useEffect(()=>{
        const usersPost = async ()=>{
          try{
            const response = await axios.get(`http://localhost:8000/api/v1/posts/random`,{
                withCredentials:true
            })
            setPost(response.data)
          }catch(err){
            console.log(err)
          }
        }
        usersPost()
      },[])

    
    return(
        <Grid >
   <GridItem> <Header /></GridItem>
   <GridItem>  <Stories /></GridItem>
   
    {
        post.map((p,i)=>{
            return(
        <CardPerPerson p={p} key={i}/>
            )
        })
    }
    {/* <CardPerPerson /> */}
     
        
        </Grid>
    )
}
export default Home;