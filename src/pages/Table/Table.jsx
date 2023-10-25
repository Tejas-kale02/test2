import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addUser , edtUser } from '../../context/loginSlice';

function Table() {

    let [allUsers,setAllUsers]=useState(useSelector((state)=>state.login.users || []))
    console.log(allUsers);
    let dispatch =useDispatch()

    function handleDelete(user){
        console.log("hello");
      let filteredData = allUsers.filter((emp,index)=>{
            return(
                user!==emp
            )
        })

        setAllUsers(filteredData);   
        dispatch(addUser(filteredData))
     }

     function handleEdit(editUser){
      
      console.log(editUser);
      dispatch(edtUser(editUser))
     }


  return (
    <Fragment>

<table className="table table-success table-striped">
<thead className="thead-dark">
    <tr>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        allUsers.map((user,index)=>{
            return(
                <tr key={index} >
                <td>{user.fullName}</td>
                <td>{user.mail}</td>
                <td>{user.pass}</td>
                <td>
                <NavLink to="/" className='btn btn-info m-1' onClick={()=>handleEdit(user)}>Edit</NavLink >
                <button className='btn btn-danger m-1' onClick={()=>handleDelete(user)}>Delete</button> </td>
              </tr>
            )
        })
    }

  </tbody>
</table>
    <NavLink to="/" className='btn btn-dark' >Go back</NavLink>
    </Fragment>
  )
}

export default Table
