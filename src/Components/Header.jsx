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
import { useSelector } from 'react-redux';
// import localStorage from 'redux-persist/es/storage';
// import axios from 'axios';
// import { BiMenuAltLeft } from 'react-icons/bi';
const Header=()=> {
  // const navigate = useNavigate()

  const user = useSelector((state)=>state.users[0])
//   const handleLogout = async () =>{
//     // alert()
//     localStorage.clear()
//     try{
//         await axios.post(`http://localhost:8000/api/v1/auth/logout`)
//         navigate('/')
//     }catch(err){
//         console.log(err)
//     }
// }
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
         {/* /${user._id}` */}
       <Link to={`/Profile/${user._id}`}><button className='view-profile'>View Profile <AiOutlineRight /></button>
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
                <Link to={'/Help'}>Help</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'https://github.com/hars-shit/Dating-web-App'}>About Us</Link>
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
         {/* <Button colorScheme={'purple'} onClick={onClose}>
            <Link to={'/Logout'} onClick={handleLogout}>Log Out</Link> 
         </Button>  */}
       
            </HStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

      
    </>
  );
}
export default Header;
