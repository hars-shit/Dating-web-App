
import { Link } from 'react-router-dom';
import culture from '../../assets/view.jpg'
import '../../Styles/Question.scss' 
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { saveProfile } from '../../store/slices/microReducers';

const Question1=()=>{

  const [storeData,setStoreData]=useState({
    gender:"",
    interest:"",
    date:"",
    district:"",
})

const dispatch = useDispatch();
const handleChange=(e)=>{

    const name=e.target.name;
    const value=e.target.value;
    setStoreData((pre)=>{
        return { ...pre,[name]:value} ;
    })
};
const handleSubmit=(e)=>{
    dispatch(saveProfile(storeData))
}

  
  return(
           
    <div className='container'>
      <div  className='image-box'>

        <img src={culture} alt="" />
      </div>
        <div className='data-box'>
        <p id='heading'>About You</p>
       
        
        {/* gender -> */}
        <div className='data-box-interest'>
           <form >
            <p>I am</p>
           <label htmlFor="html"><input type="radio" value='women' name='gender' checked={storeData==='women'}   onChange={handleChange} />
         a woman</label>
          <label htmlFor="html"><input type="radio" value='man' name='gender' checked={storeData==='man'}   onChange={handleChange} />
         a  man</label>
           </form>

           <form action="">
           <p>Intrested in</p>
           <label htmlFor="html"><input type="radio" name='interest' value='women' checked={storeData==='women'}onChange={handleChange} />
        a  woman</label>
          <label htmlFor="html"><input type="radio" name='interest' value='man' checked={storeData==='man'} onChange={handleChange}/>
         a  man</label>
           </form>
           </div>

{/* for date of birth  */}
        <div className='data-box-dob'>
        <form >
            <p>Date of Birth :</p>
            <input type="date" name='date' onChange={handleChange}/>
            
        </form>
        </div>

        {/* for district in uk  */}
        <div className='data-box-district'>
        <form >
            <p>Hometown :</p>
           <select  name='district' onChange={handleChange}>
            <option value={0}>select district</option>
            <option value="Almora">Almora</option>
            <option value="Bageshwar">Bageshwar</option>
            <option value="Chamoli">Chamoli</option>
            <option value="Champawat">Champawat</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Haridwar">Haridwar</option>
            <option value="Pauri Garhwa">Pauri Garhwal</option>
            <option value="Tehri Garhwal">Tehri Garhwal</option>
            <option value="Uttarkashi">Uttarkashi</option>
            <option value="Uddham Singh Nagar">Uddham Singh Nagar</option>
            <option value="Nanital">Nanital</option>
            <option value="Rudraprayag">Rudraprayag</option>
            <option value="Pithoragarh">Pithoragarh</option>
           </select>
        </form>
        </div>

        {/* for submitting form  */}
        <div className='btn'>
           <Link to={'/Question2'}>
            <button id='btn-next' onClick={handleSubmit} >NEXT</button>
            </Link>
        </div>
        </div>
       
    </div>
    
    )
}
export default Question1;