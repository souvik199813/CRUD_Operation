import axios from 'axios'
import React, {useEffect, useState } from 'react'
import style from"./home.module.css"
import { Link } from 'react-router-dom'
export const Users = () => {
 
  let[content,setContent]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>{
      setContent(response.data)
    })
  },[])

  let deleteData=(a)=>{
    axios.delete(`http://localhost:3000/users/${a}`)
    window.location.assign("/u")
     
  }

  return (
   

    <div id={style.usr}>
      <table>
        <tr>
          <th>Student-Name</th>
          <th>Student-RollNo</th>
          <th>Student-Stream</th>
          <th>Action</th>
        </tr>
        {content.map(
          (e)=>{
          return(
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.roll}</td>
              <td>{e.Stream}</td>
              <td>
                <button><Link to={`/e/${e.id}`}>Edit</Link></button>
                <button onClick={()=>deleteData(e.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </table>

      
    </div>

  )
}
export default Users
