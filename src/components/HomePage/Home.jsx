import React from 'react'
import '../HomePage/Home.css'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const user = localStorage.getItem('name');
  
  return (
    <>
    <div className='homeContainer'>
        <div className='homeUser'><h1>Welcome {user}</h1></div>
        <span><i></i></span>
        <button className='homebtn' onClick={()=>navigate('/')}>Back</button>
    </div>
    
     </>
  )
}

export default Home