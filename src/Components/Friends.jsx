import { Button, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {IoMdPersonAdd} from 'react-icons/io';
import {HiUserRemove} from 'react-icons/hi';
import { FaFacebookMessenger } from 'react-icons/fa';
const Friends = ({ list, isFreind }) => {
  const [showFriend, setShowFriend] = useState(false);
  const [showNewList, setShowNewList] = useState(false);
    
  const handleShowFriend = () => {
    setShowFriend(!showFriend);
    setShowNewList(false);
    
 
   
  };
  const handleNewFriend = () => {
    setShowNewList(!showNewList);
    setShowFriend(false);
  };
  return (
    <HStack
      marginTop={'2rem'}
      display={'flex'}
      gap={'1.5rem'}
      justifyContent={'space-between'}
      width={'100%'} position={'relative'}
    >
        <HStack>
      <Image
        width={'3.5rem'}
        height={'3.5rem'}
        border={'1px solid white'}
        borderRadius={'50%'}
        src={list.image}
      />
      <Link>
        <Text marginLeft={'0'} width={'8rem'} color={'black'}>
          {list.Name}
        </Text>
      </Link>
      </HStack>
      {isFreind ? (
        <Button
          onClick={handleShowFriend}
          background={'white'}
          _hover={{ background: 'white' }}
        >
         
          <HiOutlineDotsVertical fontSize={'1.3rem'} _hover={{color:"blue"}}/>
        </Button>
      ) : (
        <Button
          onClick={handleNewFriend}
          background={'white'}
          _hover={{ background: 'white' }}
        >
         
          <HiOutlineDotsVertical fontSize={'1.3rem'} />
        </Button>
      )}
      {isFreind
        ? showFriend  && (
            <VStack  position={'absolute'} right={'2rem'} bottom={'-3rem'} border={'1px solid black'} borderRadius={'5px'} zIndex={'199'}>
              <Button height={'30px'}  fontSize={'15px'} fontWeight={'700'} background={'white'} _hover={{ background: 'white'}} borderBottom={'1px solid'} borderRadius={'0px'}><HiUserRemove /></Button>
              <Button  fontSize={'15px'} fontWeight={'700'}   background={'white'} _hover={{ background: 'white'}}  height={'20px'}>< FaFacebookMessenger color={'brown'}/></Button>
            </VStack>
          )
        : showNewList && (
            <VStack position={'absolute'} right={'2rem'} bottom={'-3rem'} border={'1px solid black'} borderRadius={'5px'} zIndex={'199'}>
              <Button height={'30px'}  fontSize={'15px'} fontWeight={'700'} background={'white'} _hover={{ background: 'white'}} borderBottom={'1px solid'} borderRadius={'0px'}><IoMdPersonAdd /></Button>
              <Button fontSize={'15px'} fontWeight={'700'}   background={'white'} _hover={{ background: 'white'}}  height={'20px'}>< FaFacebookMessenger color={'brown'}/></Button>
            </VStack>
          )}
      
    </HStack>
  );
};
export default Friends;
