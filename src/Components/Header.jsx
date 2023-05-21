import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image,
  Text,
  
} from '@chakra-ui/react';
import '../Styles/Header.scss'
import { Link } from 'react-router-dom';
import {AiOutlineRight} from 'react-icons/ai'
// import { BiMenuAltLeft } from 'react-icons/bi';
const Header=()=> {

    // useClosure used for handle open,close,toggle.
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
   <HStack justifyContent={'space-between'} alignItems={'center'} padding={'10px 10px'} >
    <Text color={'black'} fontSize={'4xl'} alignSelf={'center'} fontWeight={'800'}>Discover</Text>
      <Button
        pos={'relative'}
      left={'-10px'}
      float={'right'}
        p={'0'}
        w={'12'}
        h={'12'}
        zIndex={'overlay'}
        colorScheme={'purple'}
        borderRadius={'50%'}
        onClick={onOpen}
      >
       <Image src='https://bit.ly/dan-abramov' alt=' ' borderRadius={'50%'}/>
      </Button>
   </HStack>
      <Drawer isOpen={isOpen} size={['xs','xs']} onClose={onClose} placement={'right'} w={'4'} >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader display={'flex'} flexDirection={"column"} gap={"4"}>
            {/* user profile image in sidebar  */}
       
            <button>
        <Image src='https://bit.ly/dan-abramov' alt=' ' borderRadius={'50%'} boxSize={'90px'}/>
        </button>

        {/* linked to profile 
         */}
       <Link to={'/Profile'}><button className='view-profile'>View Profile <AiOutlineRight /></button>
       </Link> 
        
          </DrawerHeader>
          <DrawerBody>

               {/* VStack(verical)-> display flex ,iteam-center   */}
            <VStack alignItems={"flex-start"}>

              {/* for  button with thier respective links */}

              <Button  colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/manage'}>Manage Friendship</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/liked'}>Profile Liked</Link>
              </Button>

              
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Upload'}>Help</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Upload'}>About Us</Link>
              </Button>

            <VStack >
            <Button > <a href="/">Add Another Account</a></Button>
            <Button ><a href="/">Invite or Sync Contacts</a></Button>
            </VStack>


            {/* logout button at the bottom of the sidemenu  */}
            </VStack> 
            <HStack 
            pos={"absolute"} 
            bottom={"11"} 

            width={"full"}
            justifyContent={'flex-start'}
            >
        <Button colorScheme={'purple'} onClick={onClose}>
            <Link to={'/Logout'}>Log Out</Link>
        </Button>
       
            </HStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

      
    </>
  );
}
export default Header;
