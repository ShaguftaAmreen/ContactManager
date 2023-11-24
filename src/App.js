import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import "./App.css";
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import uuid4 from 'uuid4';
function App() {
  const localKey="contact"
  const [contact,setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localKey))||[]});
  const addContact=(data)=>{
setContact([...contact,{id:uuid4(),data}]);
  }
  
  useEffect(()=>{
    localStorage.setItem(localKey,JSON.stringify(contact))
  },[contact])
  const removeContact=(id)=>{
const updatedList=contact.filter((val)=>{
  return val.id !== id;
})
setContact(updatedList)
  }
  return (
    <>
      <Header />
      <AddContact  funcaddContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact}/>
    </>
  );
}

export default App;
