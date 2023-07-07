import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { RiShareFill } from 'react-icons/ri';
import '../Styles/CardPerPerson.scss';
// import { data } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { savevalues } from '../store/slices/Likes';
import axios from 'axios';

const CardPerPerson = ({p}) => {
  const user = useSelector((state)=>state.users[0])
  const [currentUser, setCurrentUser] = useState()

  useEffect(()=>{
    const loadUser = async ()=>{
      try{
        const response = await axios.get(`http://localhost:8000/api/v1/user/get/${p?.userId}`,{
          withCredentials:true
        })
        // console.log(response.data)
        setCurrentUser(response.data)
      }catch(err){
        console.log(err)
      }
    }
    loadUser()
  },[])

  // for handling click on icons like,share,message
  const [clicklike, setClicklike] = useState(0);
  //  for message
  const [clickMessage, setClickMessage] = useState(0);
  //  for share
  const [clickShare, setClickShare] = useState(0);

  //  for increment and decrement of likes
  const [changeLike, setChangeLike] = useState(false);
  const [changeMessage, setChangeMessage] = useState(false);
  const [changeShare, setChangeShare] = useState(false);
  const dispatch=useDispatch();

  const handleClickLike = () => {
    
    if (!changeLike) {
      setClicklike(clicklike + 1);
      setChangeLike(true);
      dispatch(savevalues(clicklike));
    } else {
      setClicklike(clicklike - 1);
      setChangeLike(false);
      dispatch(savevalues(clicklike));
    }
  };


  const handleClickMessage = () => {
    if (!changeMessage) {
      setClickMessage(clickMessage + 1);
      setChangeMessage(true);
    } else {
      setClickMessage(clickMessage - 1);
      setChangeMessage(false);
    }
  };
  const handleClickShare = () => {
    if (!changeShare) {
      setClickShare(clickShare + 1);
      setChangeShare(true);
    } else {
      setClickShare(clickShare - 1);
      setChangeShare(false);
    }
  };


  
  return (
    <div className="card-components">
          <div className="per-card">
            {/* for header info */}
            <div className="card-header">
              <img src={currentUser?.image || 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.atlantissportsclubs.com%2Fwp-content%2Fuploads%2F2016%2F09%2FBoyPlaceholder-01.png&f=1&nofb=1&ipt=f82fd9e6bad9de78a145012e88008dd8b03532b3c39992dcf86dd53754da106f&ipo=images'} alt="" />
              <div className="name-place">
                <p className="name">{currentUser?.FirstName+ " "+currentUser?.LastName}</p>
                <p className="city">{currentUser?.state}</p>
              </div>
              <button>
                <HiOutlineDotsVertical />
              </button>
            </div>

            {/* for post */}
            <div className="post-image">
              <img
                src={p?.image}
                alt=""
              />
            </div>

            <div className="icons">
              <button onClick={handleClickLike}>
                <AiFillHeart />
                <p>{p?.likes.length}</p>
              </button>
              <button onClick={handleClickMessage}>
                <FaFacebookMessenger />
                <p>{clickMessage}</p>
              </button>
              <button onClick={handleClickShare}>
                <RiShareFill />
                <p>{clickShare}</p>
              </button>
            </div>
          </div>
    </div>
  );
};
export default CardPerPerson;
