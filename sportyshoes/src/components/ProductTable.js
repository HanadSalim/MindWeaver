import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import AdminContext from '../contexts/adminContext'

function ProductTable() {
    let {products, fetchProducts} = useContext(AdminContext)

    useEffect(() => {
      if(products.length==0){
        fetchProducts()
      }
      },[])
    
  return (
    <StyledDiv>
       <table>
        <thead>
        <tr >
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
        </thead>
        <tbody>
        {products.map((x)=>{
          return(
          <tr key={x.id}>
            <td>{x.id}</td>
            <td><img src={x.imageURL}/></td>
            <td>{x.name}</td>
            <td>{x.gender}</td>
            <td>{x.category}</td>
            <td>£{x.price}</td>
            <td>{x.items_left}</td>
          </tr>
          )
     
        })}
        </tbody>

      </table>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  table{
    border-collapse: collapse;
    margin-top:50px;
    text-align:left;
    th,td{
      padding:0 5px;
      border:2px solid black
    }
    td>img{
    width:100px;
    } 
  }
`


export default ProductTable