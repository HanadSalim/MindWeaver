import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:100%;
    max-width:1480px;
    margin:0 auto;

    div{
        color:#012c78;
        font-weight:500;
    }
    div:hover{
      scale:1.05;
      cursor:pointer;
    }
    border-bottom:1px solid #b0b9c3;
    padding-bottom:20px;
`
function Navbar() {

  return (
   <StyledWrapper>
    <div>Men</div>
    <div>Women</div>
    <div>Kids</div>
    </StyledWrapper>
  )
}

export default Navbar