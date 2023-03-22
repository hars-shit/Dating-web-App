import React from 'react';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

import  ColorModeSwitcher  from './ColorModeSwitcher';
import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword'
import SignUp from './Components/Signup';
 import Home from './Components/Home';
import Profile from './Components/Profile';


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

    </Routes>
   </Router>
    </>
  );
}

export default App;
