import { Button, Container, HStack, VStack,Text } from "@chakra-ui/react";
import React, { useState } from "react";
// import Friends from "./Friends";
// import AddNew from "./AddNew";
import friends from "./FriendList";
import addlist from "./AddNew"
import Friends from "./Friends";

const Manage=()=>{
    const [friendList,setFriendList]=useState(false);
    const [addfriend, setAddfriend] = useState(false)
    const [isFreind, setIsFreind] = useState(true)

    const handleFreindList = () =>{
        setFriendList(!friendList)
        setAddfriend(false);
    }

    const handleAddFreind = () =>{
        setAddfriend(!addfriend)
        setFriendList(false)
    }
    
    return<>
   <Container display={'flex'} maxW={'160vh'} marginTop={'2rem'} >
        <VStack >
            <Text fontSize={'4xl'} fontWeight={'800'} alignSelf={'flex-start'}   color={'black'}>Friends</Text>
            <HStack  display={'flex'} alignSelf={'flex-start'} >
       <Button  onClick={handleFreindList} border={'2px solid white'} borderRadius={'20px'}>Friend List</Button> 
       <Button onClick={handleAddFreind}  border={'2px solid white'} borderRadius={'20px'}>Add New</Button>
       
        </HStack>
        <Container width={'48vh'}>
            
             
               
            {
                friendList && 
                friends.map((friendList)=>{
                    return (
                        <Friends list={friendList} isFreind={isFreind}    name={friendList.Name}/>
                    )
                })
                ||

                addfriend && 
                addlist.map((addfriend)=>{
                    return(
                        <Friends list={addfriend} />
                    )
                })
            }
            
        </Container>
        </VStack>
       
   </Container>

    
    </>
}
export default Manage;