import React, { useContext } from 'react'
import { useEffect } from 'react';
import AdminContext from '../contexts/adminContext'

function UserList({input}) {
  const {user, click, fetchUserData} = useContext(AdminContext)
  useEffect(() => {
    if(user.length==0){
      fetchUserData();
    }
    
  },[])

  

  return (
    <>
      {click?<ol >{user.map((x)=>{
        if(input==null){return(
          <li key={x.id}>
            <p>User: {x.username}</p>
            <p>Gender: {x.gender}</p>
            <p>PhoneNum: {x.phoneNumber}</p>
            <p>ZipCode: {x.zipCode}</p>
          </li>
        )}
        else if(input.toLowerCase()===x.username.toLowerCase()||input.toLowerCase()===x.gender.toLowerCase()){return(
          <li key={x.id}>
            <p>User: {x.username}</p>
            <p>Gender: {x.gender}</p>
            <p>PhoneNum: {x.phoneNumber}</p>
            <p>ZipCode: {x.zipCode}</p>
          </li>
        )}
      })}
      </ol>:<ol >{user.map((x)=>{
        return(
          <li key={x.id}>
            <p>User: {x.username}</p>
            <p>Gender: {x.gender}</p>
            <p>PhoneNum: {x.phoneNumber}</p>
            <p>ZipCode: {x.zipCode}</p>
          </li>
        )
      })}
      </ol>}
    </>
  )
}

export default UserList