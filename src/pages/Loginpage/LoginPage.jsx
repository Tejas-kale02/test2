import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../context/loginSlice';
import { Link, NavLink } from 'react-router-dom';


function LoginPage() {
  let edtUser=useSelector((state)=>state.login.editUser);
  console.log(edtUser);
    let [fullname,setFullname] = useState(edtUser.fullName||"")
    const [email,setMail] = useState(edtUser.mail||"")
    const [password,setPassword] = useState(edtUser.pass||"")
    let ourUsers=useSelector((state)=>state.login.users ||  [])
  
    console.log(ourUsers);
  
    let dispatch=useDispatch()

  
    function handleSubmit(){
      let data={}
  
      data.fullName=fullname;
      data.mail=email;
      data.pass=password;
      console.log(ourUsers);
      let allData=[...ourUsers,data]
      dispatch(addUser(allData));

      setFullname("")
      setMail("")
      setPassword("")
    }
  return (
    
        <div className='card'>
        <h1 className='text-center'>Login Form</h1>
        
          <div className="form-group py-2">
            <label htmlFor="fullName">Full name</label>
            <input type="text" onChange={(e)=>setFullname(e.target.value)} value={fullname} className="form-control" id="fullName" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group py-2">
            <label htmlFor="userMail">Email</label>
            <input type="email" onChange={(e)=>setMail(e.target.value)} value={email} className="form-control" id="userMail" placeholder="Email"/>
          </div>
          <div className="form-group py-2">
            <label htmlFor="pass">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} id="pass" placeholder="Password"/>
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary my-2">Submit</button>
          <NavLink to="/table" className="btn btn-primary my-2">Table</NavLink>
      </div>
        
  
  )
}

export default LoginPage
