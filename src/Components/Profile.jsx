import { Button, Container, Image } from "@chakra-ui/react";
import React from "react";
const Profile =(props)=>{
    return (
       <Container>
        <Button> <Image src={props.Image}/>
        </Button>

       </Container>
    )
}
export default Profile;