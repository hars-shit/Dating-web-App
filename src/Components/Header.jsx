import React from 'react';
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image,

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
   
      <Button
        pos={'relative'}
        top={'4'}
        left={'4'}
        p={'0'}
        w={'10'}
        h={'10'}
        zIndex={'overlay'}
        colorScheme={'purple'}
        borderRadius={'50%'}
        onClick={onOpen}
      >
        {/* <BiMenuAltLeft /> */}<Image src='https://bit.ly/dan-abramov' alt=' ' borderRadius={'50%'}/>
      </Button>
      <Drawer isOpen={isOpen} size={['xs','xs']} onClose={onClose} placement={'left'} w={'4'} >
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
                <Link to={'/'}>Manage Friendship</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Videos'}>Profile Liked</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Upload'}>Memories</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Upload'}>Activities</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/Upload'}>Settings</Link>
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

      {/* line bellow header   */}
      <HStack pos={'relative'} top={'30px'} backgroundColor={'ActiveBorder'} maxH={"full"}  height={'0.1px'}/>
    
    </>
  );
}
export default Header;
