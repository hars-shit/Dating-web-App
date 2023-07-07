import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import '../Styles/Profile.scss';

// import dating from '../assets/dating.png'
import save from '../assets/save.png';
import addFriend from '../assets/add-user.png';
import like from '../assets/like.png';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import CardPerPerson from './CardPerPerson';
import { Grid, GridItem,  Img } from '@chakra-ui/react';

const Profile = () => {
  // const [curUser, setCurUser] = useState()
  // const[posts, setPosts] = useState([])
  const[fileImg, setFileImg] = useState(null)
  // const {id} = useParams()
  
 

  // useEffect(()=>{
  //   const loadProfile = async()=>{
  //     const response = await axios.get(`http://localhost:8000/api/v1/posts/all/${id}`,{withCredentials:true})
  //     setPosts(response.data)
  //     // console.log(response)
  //   }
  //   loadProfile()
  // },[id])

// const [files,setfiles]=useState();
const handleReadURl=(e)=>{
  // setfiles(e.target.files);
  setFileImg(e.target.files[0])
}
const handleupload=(e)=>{
  // const formData=new FormData();
  // for(let i=0;i<files.length;i++){
  //   formData.append(`images[${i}]`,files[0]);
  // }
  
}
  // const data = useSelector(state => {
  //   return state.users;
  // });

  return (
    <>
      {/* for profile image  */}
      <div className="profile-image">
        <img id="img" src={fileImg ? URL.createObjectURL(fileImg) : "https://bit.ly/dan-abramov" }alt="" />
        {/* <button><img id="dating-icon" src={dating} alt="" /> */}
        {/* </button> */}
        <button id="save-btn">
          <img src={save} alt="" />
        </button>
        <button id="add-friend">
          <img src={addFriend} alt="" />
        </button>
        <button id="dating">
          <img src={like} alt="" />
        </button>
      </div>


      {/* <Button background={'none'}> <Image src={dating} /> </Button> */}
      {/* <Button background={'none'}> <BiMessageRoundedAdd fontSize={'33px'} color={'rgb(123, 32, 32)'}/> </Button> */}

      <div className="data-container">

      <input type="file"  onChange={handleReadURl} accept='Image'/>
        <button onClick={handleupload}>upload</button>

        <div className="name-container">
          {/* <div>
            {posts.map((post, id) => {
              return (
                <CardPerPerson p={post} key={id}/>
              );
            })}
            <p id="add-p">{curUser?.state}</p>
          </div> */}
         
        </div>
        </div> 

        {/* about the posts division  */}

        <Grid  templateColumns='repeat(3, 1fr)' rowGap={"1"} border={"1px solid skyblue"} borderRadius={"2xl"}>
          <GridItem>
            <Img style={{width:"130px",height:"130px"}}  src='https://bit.ly/dan-abramov'/>
            </GridItem>
            <GridItem>
            <Img style={{width:"130px",height:"130px"}} src='https://bit.ly/dan-abramov'/>
            </GridItem>
            <GridItem>
            <Img style={{width:"130px",height:"130px"}} src='https://bit.ly/dan-abramov'/>
            </GridItem>
            <GridItem>
            <Img style={{width:"130px",height:"130px"}} src='https://bit.ly/dan-abramov'/>
            </GridItem>
            <GridItem>
            <Img style={{width:"130px",height:"130px"}} src='https://bit.ly/dan-abramov'/>
            </GridItem>
            <GridItem>
            <Img style={{width:"130px",height:"130px"}} src='https://bit.ly/dan-abramov'/>
            </GridItem>
            
        </Grid>
    
    </>
  );
};
export default Profile;
