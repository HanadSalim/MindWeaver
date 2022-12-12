import React, {createContext, useEffect, useState } from "react";
//run npx json-server --watch data/db.json --port 8000

export const  AdminContext = createContext()
export const AdminProvider = ({ children }) => {
  const [option, setOption] = useState(0)
  const [admin, setAdmin] = useState([])
  const [user, setUsers] = useState([])
  const [products, setProduct] = useState([])
  const [click, setClick] = useState(false)


  const clicked = () =>{
    setClick(true)
    console.log(click)
  }
  const clear = () =>{
    setClick(false)
  }
    const fetchAdminData = async () => {
      const response = await fetch("http://localhost:8000/admin")
      const data = await response.json()
      data.map((a)=>{
        setAdmin(a)
      })
    }
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:8000/users")
      const data = await response.json()
      data.map((x)=>{
        setUsers(user => [...user, x])
      })
      
    }

    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8000/shoes")
      const data = await response.json()
      data.map((p)=>{
        setProduct(products => [...products, p])
        console.log(p)
      })
    }

    const up = async (password) =>{
      admin.passWord=password
      const response = await fetch("http://localhost:8000/admin/1",{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(admin)
      })
      alert("NEW PASSWORD IS: "+ admin.passWord)
    }

    const selectOption = (x) => {
      setOption(x)
    }
    
    return <AdminContext.Provider 
    value={{admin, user, up, option, selectOption, click, clicked,clear, products, fetchProducts, fetchAdminData, fetchUserData}}
    >
      {children}
      </AdminContext.Provider>
    };

  export default AdminContext

    