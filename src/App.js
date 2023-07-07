import React from 'react';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';
import './Styles/App.scss'

import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword'
import SignUp from './Components/Signup';
 import Home from './Components/Home';
import Profile from './Components/Profile';

import { useSelector } from 'react-redux';
// import Question1 from './Components/Questions/Question1';
// import Question2 from './Components/Questions/Question2';
// import Question3 from './Components/Questions/Question3';
import Notification from './Components/FooterComponents/Notification';
import Search from './Components/FooterComponents/Search';
import Message from './Components/FooterComponents/Message';
import Polls from './Components/FooterComponents/Polls';
import Manage from './Components/HeaderCom/Manage';
import Liked from './Components/HeaderCom/Liked';
import Help from './Components/HeaderCom/Help';
import Footer from './Components/Footer';
// import AddNew from './Components/AddNew';

function App() {
  const user=useSelector((state)=>{
    return state.users;
  })

  console.log(user)

  return (
    <>
   <Router>
   
  
    <Routes>
        {/* <Route path='/'  element={user ? <Home /> : <Login /> }/> */}
    <Route path='/Home' element={<Home />} />
    <Route path='/'  element={ <Login /> }/>
    {/* <Route path='/Question1' element={<Question1 />} />
    <Route path='/Question2' element={<Question2 />}/>
    <Route path='/Question3' element={<Question3 />} /> */}
    <Route path='/forgetPassword' element={<ForgetPassword/>} />
    <Route path='/Signup' element={<SignUp/>} />
    <Route path='/Profile/:id' element={<Profile />} />
    <Route path='/Notification' element={<Notification />}/>
    <Route path='/Search' element={<Search />}/>
    <Route path='/Message' element={<Message />}/>
    <Route path='/manage' element={<Manage />}/>
    <Route path='/Help' element={<Help />} />
    <Route path='/liked' element={<Liked />}/>
    <Route path='/Polls' element={<Polls />}/>

    </Routes>
    <Footer />
   </Router>
    </>
  );
}

export default App;
