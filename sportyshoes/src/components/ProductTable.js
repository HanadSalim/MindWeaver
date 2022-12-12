import React, { useContext, useEffect } from 'react'
import AdminContext from '../contexts/adminContext'

function ProductTable() {
    const {product, fetchProducts} = useContext(AdminContext)
    
    useEffect(() => {
        fetchProducts()
      },[])

    

  return (
    <div>
        {/* <table style="width:100%">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
          <tr>
            <td>1</td>
            <td>image goes here</td>
            <td>name herez</td>
            <td>Male</td>
            <td>Running shoes</td>
            <td>12$</td>
            <td>6<td>
          </tr>
       
        </table> */}
       <table>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
        <tr>
          <td>1</td>
          <td>image goes here</td>
          <td>name herez</td>
          <td>Male</td>
          <td>Running shoes</td>
          <td>12$</td>
          <td>6</td>
        </tr>

      </table>
    </div>
  )
}

export default ProductTable