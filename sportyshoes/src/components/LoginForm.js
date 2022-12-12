import React, { useContext, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import AdminContext from '../contexts/adminContext';


function LoginForm() {


    useEffect(() => {
        fetchAdminData();
      },[])

    const {admin, fetchAdminData} = useContext(AdminContext)
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `page3`; 
      navigate(path);
    }

 function handleClick(e){
    e.preventDefault();
    let loginUser = document.getElementById("lu").value;
    let loginPass = document.getElementById("lp").value;
    if(loginUser===admin.userName&&loginPass===admin.passWord){
        alert("Sign in successful")
        routeChange()
    }else{
        alert("Check user credentials")
        alert("Username = "+admin.userName)
        alert("Password = "+admin.passWord)
    }

}   

  return (
    <StyledContainer>
        <form >
            <div>
                <h1>Sign in:</h1>
            </div>
            <div clasName="container">
                <label ><b>Username</b></label>
                <input id="lu" type="text" placeholder="Enter username" name="uname" required /><br/>
                <label ><b>Password </b></label>
                <input id="lp" type="password" placeholder="Enter password" name="psw" required  /><br/>
                <button onClick={handleClick} type="submit">Login</button>
            </div>
        </form>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
    margin:0 auto;
    width:100%;
    max-width:1480px;
    margin-top:50px;
    h1,label,input{
        color:#012c78;
    }
    input{
        margin-left:25px;
        margin-bottom:10px;
    }
    button{
        margin-top:50px;
        margin-left:205px;
        background-color:#012c78;
        color:white;
        padding:8px 16px;
        border-radius:10px;
    }
`

export default LoginForm