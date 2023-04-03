import React from 'react';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';
import './Styles/App.scss'
import  ColorModeSwitcher  from './ColorModeSwitcher';
import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword'
import SignUp from './Components/Signup';
 import Home from './Components/Home';
import Profile from './Components/Profile';
import Notification from './Components/Notification';
import Message from './Components/Message';
import Search from './Components/Search';
import { useSelector } from 'react-redux';
import Question1 from './Components/Questions/Question1';
import Question2 from './Components/Questions/Question2';
import Question3 from './Components/Questions/Question3';

function App() {
  const user=useSelector((state)=>{
    return state.users;
  })

  console.log(user)

  return (
    <>
   <Router>
   
    <ColorModeSwitcher />
    <Routes>
        {/* <Route path='/'  element={user ? <Home /> : <Login /> }/> */}
    <Route path='/Home' element={<Home />} />
    <Route path='/'  element={ <Login /> }/>
    <Route path='/Question1' element={<Question1 />} />
    <Route path='/Question2' element={<Question2 />}/>
    <Route path='/Question3' element={<Question3 />} />
    <Route path='/forgetPassword' element={<ForgetPassword/>} />
    <Route path='/Signup' element={<SignUp/>} />
    <Route path='/Profile' element={<Profile />} />
    <Route path='/Notification' element={<Notification />}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/Message' element={<Message />}/>


    </Routes>
   </Router>
    </>
  );
}

export default App;
