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

function App() {
  return (
    <>
   <Router>
   
    <ColorModeSwitcher />
    <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='/Home' element={<Home />}/>
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
