import React from "react";

import { Card,  CardFooter, Text, Button, Image, Container} from '@chakra-ui/react'
// import {BsThreeDotsVertical} from 'react-icons/bs' 
import {BiLike,BiChat,BiShare} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../store/slices/microReducers";



const CardPerPerson=()=>{
  const dispatch=useDispatch();

  const data=useSelector((state)=>{
    return state.users;
  })

  const addProfile=()=>{
    dispatch(saveProfile)
  }
    return(
      <div>
        {
          data.map((item)=>{
            return(

    <Card maxW={['1xl','2xl']} p={'4'} marginTop={'10'}  pos={'relative'}>
  

  <Image
    objectFit='cover'
    width={'100%'}
    height={'auto'}
   
    
    h={'480px'}  src={item.image}  alt='Chakra UI'
  />
  <Container pos={'absolute'} top={'425px'} >
      <Text>{item.Name},{item.Age}</Text>
     
      <Text>{item.City}</Text>
  </Container>

  <CardFooter
    justify='space-between'
    flexDirection={'row'}
    flexWrap='wrap'  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Message
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
    <Button onClick={addProfile} flex='1' variant='ghost' leftIcon={<BiLike />}>
      Save
    </Button>
  </CardFooter>
</Card>
   )
  })
}
</div>  
        
)
}
export default CardPerPerson;