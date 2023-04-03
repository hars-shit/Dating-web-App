import React from "react";
import {RiHeartAddFill} from 'react-icons/ri'

import {BiMessageRoundedAdd} from 'react-icons/bi'
import { Card,  CardFooter, Text, Button, Image, Container} from '@chakra-ui/react'

import {BiLike,BiChat,BiShare} from 'react-icons/bi'

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
            
    <Card maxW={['1xl','2xl']}  background={'none'} margin={'2'} border={'4px solid '}>

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
    flexWrap='wrap' p={'4px'} className={"cardFooter"} >
   
    <Button flex='1' variant='ghost'  leftIcon={<BiLike />}>
    
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
    
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
     
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