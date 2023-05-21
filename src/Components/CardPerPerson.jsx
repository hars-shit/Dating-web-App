import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { RiShareFill } from 'react-icons/ri';
import '../Styles/CardPerPerson.scss';
import { data } from './data';
import { useDispatch } from 'react-redux';
import { savevalues } from '../store/slices/Likes';

const CardPerPerson = () => {
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
      {data.map((item) => {
        return (
          <div className="per-card">
            {/* for header info */}
            <div className="card-header">
              <img src={item.image} alt="" />
              <div className="name-place">
                <p className="name">{item.Name}</p>
                <p className="city">{item.City}</p>
              </div>
              <button>
                <HiOutlineDotsVertical />
              </button>
            </div>

            {/* for post */}
            <div className="post-image">
              <img
                src="https://www.hdwallpaper.nu/wp-content/uploads/2015/07/beautiful_Wallpaper_025.jpg"
                alt=""
              />
            </div>

            <div className="icons">
              <button onClick={handleClickLike}>
                <AiFillHeart />
                <p>{clicklike}</p>
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
        );
      })}
    </div>
  );
};
export default CardPerPerson;
