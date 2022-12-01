import React from 'react'
import { useNavigate } from "react-router-dom";



function LoginButton() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `login`; 
    navigate(path);
  }
  return (
    <div onClick={routeChange} className='button'>
    <p >LOG IN</p>
    </div>
  )
}

export default LoginButton