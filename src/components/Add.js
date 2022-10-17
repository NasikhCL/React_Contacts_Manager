import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Add(props){

const navigate = useNavigate()
const {contacts, handleNewContact} =props    

const[name, setName]=useState('')
const[email, setEmail]=useState('')
const[phone, setPhone]=useState('')




function addContact(){
    fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    id: contacts.length + 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => handleNewContact(json));

navigate('/')

}
    return(
        <div className="add-contact">

            <form onSubmit={addContact}>
                <input placeholder="Enter Your Name" type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
                <input placeholder="Enter Your Email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input placeholder="Enter Your Phone" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} />
                <button type="submit">add</button>
            </form>

        </div>
    )
}