import React from "react";
import './App.css';
import AddContact from "./AddContact.js";
import Header from "./Header";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id:"1",
      name:"Dipesh",
      email:"qwerty@gmail.com"
    },
    {
      id:"2",
      name:"Dipesh2",
      email:"qwerty2@gmail.com"
    }
  ];
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
