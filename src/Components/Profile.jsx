import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Profile.scss';
import { HiOutlineShare } from 'react-icons/hi';
import { Button } from '@chakra-ui/react';
// import dating from '../assets/dating.png'
import save from '../assets/save.png';
import addFriend from '../assets/add-user.png';
import like from '../assets/like.png';
const Profile = () => {
  const data = useSelector(state => {
    return state.users;
  });
  console.log(data);

  return (
    <>
      {/* for profile image  */}
      <div className="profile-image">
        <img id="img" src="https://bit.ly/dan-abramov" alt="" />
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
        <div className="name-container">
          <div>
            {data.map((user, id) => {
              return (
                <div className="personal-data">
                  <p id="name-p">
                    {user.firstName} {user.lastName}{' '}
                  </p>
                </div>
              );
            })}
            <p id="add-p">Almora,Uttarakhand</p>
          </div>
          <div className="btn-container">
            <Button id="share-button">
              <HiOutlineShare />
            </Button>
          </div>
        </div>

        {/* about the user division  */}
        <div className="about">
          <p id="heading-about">About</p>
          <p id="about-me">
            My name is Dolly Mamgai and i enjoy meet new people and finding ways
            to help them have an uplifting experience...{' '}
          </p>
        </div>

        {/* user interest division  */}

        <div className="interest-container">
          <p>Interests</p>
          <div className="interest">
            <button id="btn-1">Music</button>
            <button id="btn-2">Coding</button>
            <button id="btn-3">Web Design</button>
            <button id="btn-4">Developer</button>
            <button id="btn-5">Travelling</button>
            <button id="btn-6">Dancing</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
