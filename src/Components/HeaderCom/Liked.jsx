import { Container, VStack, Text, HStack, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import friends from '../FriendList';
const Liked = () => {
  return (
    <Container display={'flex'} maxW={'160vh'} marginTop={'2rem'}>
      <VStack>
        <Text
          fontSize={'4xl'}
          fontWeight={'800'}
          alignSelf={'flex-start'}
          color={'black'}
        >
          Profile Liked
        </Text>
        <Container >
        <HStack
          marginTop={'2rem'}
          display={'flex'}
          gap={'2.5rem'}
         
          flexDirection={'column'}
          
          
        >
            {friends.map((item)=>{
                return(
                    <>
                     <HStack display={'flex'} justifyContent={'space-between'}   width={'40vh'} >
                        <HStack>
      <Image
        width={'3.5rem'}
        height={'3.5rem'}
        border={'1px solid white'}
        borderRadius={'50%'}
        src={item.image}
      />
      <Link>
        <Text marginLeft={'0'} width={'8rem'} color={'black'}>
        {item.Name}
        </Text>
      </Link>
      </HStack>
      <Button
      
      background={'white'}
      _hover={{ background: 'white' }}
    >
     
      <FaFacebookMessenger fontSize={'1.3rem'} _hover={{color:"blue"}}/>
    </Button>
    </HStack>
                    </>
                )
            })}
     
       
      ) 

        </HStack>
        </Container>
      </VStack>
    </Container>
  );
};
export default Liked;
