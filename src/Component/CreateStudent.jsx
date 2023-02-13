import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from"./home.module.css"

export const CreateStudent = () => {
  let [name,setName]=useState("")
  let [roll,setRoll]=useState("")
  let [Stream,setStream]=useState("")
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


let formData=(e)=>{
  e.preventDefault();

  let payload ={name,roll,Stream}
  axios.post("http://localhost:3000/users",payload)
  .then(()=>{
    console.log("DATA HASE BEEN ADDED");
    
  }) 

  navigate("/u")
}

  return (
    
    <div id={style.fromBox}>
    
    

    <form action="">
      <h2>Create-Student</h2>
        <label htmlFor="ename">Student-Name:</label><br/>
        <input type="text" value={name} onChange={nameData}/><br/>
        
        <label htmlFor="esalary">Student-RollNo:</label><br/>
        <input type="text"  value={roll} onChange={studentRoll}/><br/>
        
        <label htmlFor="ename">Student-Stream:</label><br/>
        <input type="text" value={Stream} onChange={studentStream}/><br/>
        <button onClick={formData}>Submit</button>
    </form>
    <footer id={style.footer}>
      <p>&copy; SOUVIK .</p>
    </footer>
    </div>    

  )
}
export default CreateStudent


// 
  
//npx json-server Backend/db.json --watch port 5000
//npx install axios
//npx install json-server
//npx install react-router-dom
