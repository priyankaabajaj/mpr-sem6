import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Login()
{
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data === "Success"){
        navigate('/')
      }
    })
    .catch(err=>console.log(err))
  }
  return(
    <form onSubmit={handleSubmit}>
      
    <label>Email</label>
    <input type="email" 
          placeholder="Enter Email"  
          autoComplete="off" 
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
    />
    <label>Password</label>
    <input type="password" 
          placeholder="Enter Password" 
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
    />
    <button type="submit">
      Login 
    </button>
    </form>
  )
}
export default Login