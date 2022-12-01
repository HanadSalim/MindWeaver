import React, { useContext } from 'react'
import styled from 'styled-components'
import AdminContext from '../contexts/adminContext'
function ChangePass() {
     const {admin,up} = useContext(AdminContext)
     
     const handleClick=(e)=>{
        const curPass = document.getElementById("cp").value
        const newPass = document.getElementById("np").value
        const nnewPass = document.getElementById("nnp").value

        e.preventDefault()
        
        if(admin.passWord===curPass){
            if(newPass===nnewPass){
                alert("new passwords MATCH")
                up(newPass)
            }else{
                alert("New password deos not match")
            }
        }else{
            alert("Incorrect current password")
            alert(admin.passWord)
        }
        
    }

    return (
        <Wrapper>
            <form >
                <div>
                    <h1>Change password</h1>
                </div>
                <div className="container">
                    <div>
                        <label ><b>Current password</b></label>
                        <input id="cp" type="text" placeholder="Enter current password" name="cp" required />
                    </div>
                    <div>
                        <label ><b>New Password </b></label>
                        <input id="np" type="password" placeholder="Enter new password" name="np" required  />
                    </div>
                    <div>
                        <label ><b>Re-Enter Password </b></label>
                        <input id="nnp" type="password" placeholder="Enter new password" name="nnp" required  />
                    </div>
                    <button onClick={handleClick} type="submit">Submit</button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    max-width:1080px;
    margin: 0 auto;
    .container {
      display:flex;
      flex-direction:column;
      width:400px;
    }
    button{
      width: 200px;
      background-color: #012c78;
      border-radius: 10px;
      color: #deeade;
      padding: 5px;
      cursor:pointer;
      margin-top:10px;
    }
    
    
`

export default ChangePass