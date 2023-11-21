import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useDispatch} from 'react-redux';
import {logout } from './features/userSlice.js';
import { auth } from './firebase.js';



function Nav() {
    const dispatch = useDispatch();
    
      
      const handleClick = () => {
          // Add the code that should run when the image is clicked
          auth.signOut();
      // You can perform any actions or state updates here
    };
    const [show , handleShow] = useState(true);
const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleShow(false);
    }else handleShow(true);
}
useEffect(() =>{
window.addEventListener("scroll",transitionNavBar)
return()=>window.removeEventListener("scroll",transitionNavBar)
},[])
  return <div className={`Nav ${show && "nav_black"}`}>
    <div className="nav_content">
       <img 
       className='nav_logo'
       src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
<img 
className='nav_avatar'
onClick={handleClick}
src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif" alt="" />

    </div>

    </div>
  
}

export default Nav