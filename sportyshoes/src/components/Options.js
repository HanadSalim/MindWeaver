import React, { useContext} from 'react'
import styled from 'styled-components'
import AdminContext from '../contexts/adminContext'
import ChangePass from './ChangePass'
import SearchUsers from './SearchUsers'

function Options() {

  const {option, selectOption} = useContext(AdminContext)

  return (
    <Wrapper>
      <div className='buttons'>
        <button onClick={()=>{selectOption(1)}}>Change password</button>
        <button onClick={()=>{selectOption(2)}}>Manage products</button>
        <button onClick={()=>{selectOption(3)}}>Search users</button>
        <button onClick={()=>{selectOption(4)}}>Purchase reports</button>
      </div>
      
      
        {
          option===0&&<p>Click one of the buttons above</p>
        }
        {
          option===1&&<ChangePass/>
        }
        {
          option===2&&<p>will be implemented soon</p>
        }
        {
          option===3&&<SearchUsers/>
        }
        {
          option===4&&<p>4</p>
        }
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100%;
    max-width:1080px;
    margin: 0 auto;

    .button{
      margin:0 auto;
    }
    
    div{
      display:flex;
      justify-content:space-between;
    }
    button{
      width: 200px;
      background-color: #012c78;
      border-radius: 10px;
      color: #deeade;
      padding: 5px;
      cursor:pointer;
    }
    button:hover{
      scale:1.05;
    }
    
    
`

export default Options