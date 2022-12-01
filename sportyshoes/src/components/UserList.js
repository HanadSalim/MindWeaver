import React, { useContext, useState } from 'react'
import AdminContext from '../contexts/adminContext'

function UserList({input}) {

  const {user, click, clicked, clear} = useContext(AdminContext)

  return (
    <>
      {click?<ol >{user.map((x)=>{
        if(input.toLowerCase()===x.username.toLowerCase()||input.toLowerCase()===x.gender.toLowerCase()){return(
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