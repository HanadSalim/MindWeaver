import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/logo1.jpg'
import search from '../images/search.svg'
import LoginButton from './LoginButton'

const StyledHeader = styled.div`
    display:flex;
    width:100%;
    background-color: #deeade;
    max-width:1080px;
    max-height:80px;
    justify-content:space-between;
    align-items:center;
    margin:0 auto;
    padding: 10px;
    .logo {
        height:60px;
        cursor:pointer;
    }
    .search{
        display:flex;
        align-items:center;
        border:2px solid #012c78;
        border-radius: 5px;
        padding: 0 5px;
    }
    .search>input{
        width:450px;
        height:30px;
        background-color:#deeade;
        border:none;
        color:#012c78;
    }
    .search>input:focus{
        outline:none;
    }
    .search>img{
        height:20px;
        margin-left:5px;
        cursor:pointer;
    }
    .button{
        color:white;
        background-color:#012c78;
        padding:8px 20px;
        border-radius: 10px;
        text-align:center;
    }
    .button:hover{
        scale:1.05;
        cursor:pointer;
    }
    p{
        margin:0;
    }

`

function Header() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return (
    <StyledHeader>
    <img className='logo' onClick={routeChange}src={logo}/>
    <div className='search'>
        <input type='text'></input>
        <img src={search}/>
    </div>
    <LoginButton/>
    </StyledHeader>
  )
}

export default Header