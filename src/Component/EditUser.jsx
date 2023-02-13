import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from"./home.module.css"

export const EditUser = () => {
    let[name,setName]=useState("")
    let[roll,setRoll]=useState("")
    let[Stream,setStream]=useState("")

    let {index}=useParams()
    console.log(index);

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
      }

      let studentRoll=(e)=>{
        setRoll(e.target.value)
      }
      
      let studentStream=(e)=>{
        setStream(e.target.value)
      }
    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${index}`)
      .then((x)=>{
          
          setName(x.data.name)
          setRoll(x.data.roll)
          setStream(x.data.Stream)
        })
  },[index])

    let formData=(e)=>{
        e.preventDefault()
        let payload ={name,roll,Stream}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
          console.log("DATA HAS BEEN ADDED AFTER EDIT");
          }) 
       navigate("/u")
      }
 return (
    <div id={style.fromBox}>
        <form action="">
      <h2>Edit-Student-Data</h2>
        <label htmlFor="ename">Student-Name:</label><br/>
        <input type="text" value={name} onChange={nameData}/><br/>
        
        <label htmlFor="esalary">Student-RollNo:</label><br/>
        <input type="text"  value={roll} onChange={studentRoll}/><br/>
        
        <label htmlFor="ename">Student-Stream:</label><br/>
        <input type="text" value={Stream} onChange={studentStream}/><br/>

        <button onClick={formData}>Submit</button>
    </form>
    </div>
  )
}
export default EditUser
