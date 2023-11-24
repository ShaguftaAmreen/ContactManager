import React, { useState } from 'react'
import '../App.css'

function AddContact({funcaddContact}) {
    const [contactData,setContactData]=useState({name:"",email:""});
    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setContactData({...contactData,name:e.target.value})
        }
        else{
            setContactData({...contactData,email:e.target.value})
        }
    }
    const handleAdd=()=>{
if(contactData.name===""||contactData.email===""){
    alert("Please fill all the details");
    return;
}
funcaddContact(contactData);
setContactData({name:"",email:""})
    }
  return (
    <div  className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
<label>Name:</label><br></br>
<input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br></br>
<label>Email:</label><br></br>
<input type='email' placeholder='Enter Email' name='Email' value={contactData.email} onChange={handleChange}/>
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact
