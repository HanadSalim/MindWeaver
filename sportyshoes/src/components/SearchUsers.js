import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AdminContext from '../contexts/adminContext'
import UserList from './UserList'

function SearchUsers() {

    const {user, click, clicked, clear} = useContext(AdminContext)
    const [input, setInput] = useState()
    const handleOnChange = (event) =>{
        setInput(event.target.value)
      }

  return (
    <Wrapper>
        <h1>Search</h1>
        <p>Search</p>
        <input className='input' text="text" placeholder='Enter username or gender'onChange={handleOnChange}/>
        <button className='search-btn' onClick={clicked}>Search</button>
        <button className='clear-btn' onClick={clear}>clear</button>
        {click&&<UserList input={input} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100%;
    max-width:1080px;
    margin: 20px 0 auto;
    display:flex;
    flex-direction: column;
    
    .input {
        width:300px;
        margin-bottom: 10px;
    }

    .search-btn, .clear-btn{
        margin-bottom:10px;
    }
 
`

export default SearchUsers