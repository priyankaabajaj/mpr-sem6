import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup(){
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/signup',{name,email,password})
    .then(result=>{console.log(result)
    navigate('/login')
    })
    .catch(err=>console.log(err))
  }
return(
  <>
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type="text" 
          placeholder="Enter Name" 
          autoComplete="off" 
          name="email"
          onChange={(e)=>setName(e.target.value)}
    />
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
      Register
    </button>
  </form>
  <p>Already have an account?</p>
  <Link to="/login">Login</Link>
  </>
)
}
export default Signup