import React from "react";
import {RiHeartAddFill} from 'react-icons/ri'
// import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiMessageRoundedAdd} from 'react-icons/bi'
import { Card,  CardFooter, Text, Button, Image, Container} from '@chakra-ui/react'
// import {BsThreeDotsVertical} from 'react-icons/bs' 
import {BiLike,BiChat,BiShare} from 'react-icons/bi'
// import { useDispatch, useSelector } from "react-redux";
// import { saveProfile } from "../store/slices/microReducers";
import '../Styles/CardPerPerson.scss' 
import { data } from "./data";

const CardPerPerson=()=>{
  // const dispatch=useDispatch();

  // const dataOfUser=useSelector((state)=>{
  //   return state.users;
  // })

  // const addProfile=()=>{
  //   console.log("happy");
  //   dispatch(saveProfile())
  // }
    return(
      <>
      <div>
        {
        
          data.map((item)=>{
            return(
            
    <Card maxW={['1xl','2xl']}  background={'none'} >

<Container textAlign={'end'} id='cardHeader' > 
    <Button background={'none'}> <RiHeartAddFill  fontSize={'30px'} color={'rgb(123, 32, 32)'}/> </Button>
    <Button background={'none'}> <BiMessageRoundedAdd fontSize={'33px'} color={'rgb(123, 32, 32)'}/> </Button>
 
  </Container>
  <Image
    objectFit='cover'
    width={'100%'}
    height={'auto'}
   
    
    h={'480px'}  src={item.image}  alt='Chakra UI'
  />
   
  <Container pos={'absolute'} top={'420px'} >
      <Text fontSize={'20px'} color={'whiteAlpha.900'}>{item.Name},{item.Age}</Text> 
      <Text fontSize={'20px'} color={'whiteAlpha.900'}>{item.City}</Text>
  </Container>

  <CardFooter
    justify='space-between'
    flexDirection={'row'}
    flexWrap='wrap' p={'4px'} >
   
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Save
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button>
  </CardFooter>
</Card>
   )
  })
}
</div>  
</>     
)
}
export default CardPerPerson;