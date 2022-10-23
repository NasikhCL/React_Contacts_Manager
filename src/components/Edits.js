import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


export default function Edits(props){
    const {contacts, editContact} = props
    const navigate = useNavigate()
    // console.log(contacts)
   const {contactid} =useParams()
   const [editName,setEditName]=useState(contacts[contactid -1].name)
   const [editEmail,setEditEmail]=useState(contacts[contactid -1].email)
   const [editPhone,setEditPhone]=useState(contacts[contactid -1].phone)


   function handleChange(e){
    const {name, value}=e.target
    if(name === "name"){
        setEditName(value)
        // console.log(editName)
    }
    if(name === "email"){
        setEditEmail(value)
    }
    if(name === "phone"){
        setEditPhone(value)
    }

   }
   const submitEdit = (e)=>{
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${contactid}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: parseInt(contactid,10),
          name: editName,
          email: editEmail,
          phone: editPhone,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => editContact(data));

    // editContact(editName,editEmail,editPhone, contactid)
     
}




// function  editContact(editName,editEmail,editPhone, contact_id){
//     let contactid =parseInt(contact_id,10)
   
//     console.log(typeof(contactid))
//     setAddress(prevState=>(
//       {...prevState,
//       isLoading:true
//       }
//     ))
//     fetch(`https://jsonplaceholder.typicode.com/users/${contactid}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: contactid,
//       name: editName,
//       email: editEmail,
//       phone: editPhone,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => 
//       setAddress(prevState=>{
//         const newArary = prevState.contacts.map(item =>( (item.id === contactid) ? data : item ))
//         return{
//           contacts:newArary,
//           isLoading: false
//         }
//       })
//       );

//       navigate('/')
   
   
//   }










    return (
        <div className="edits">
            <h2>Edits page{contactid}</h2>
            <form onSubmit={submitEdit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={editName} name="name" id="name" placeholder="Enter Name" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={handleChange} value={editEmail} id="email" name="email" placeholder="Enter email" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" onChange={handleChange} value={editPhone} name="phone" id="phone" placeholder="Enter Phone" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> 
                {/* <button type="submit" class="btn btn-primary">cancel</button> */}
            </form>
        </div>
    )
}




// <form onSubmit={submitEdit}>
//                 <input
                    
//                     type="text"
//                     onChange={handleChange}
//                     name="name"
//                     value={editName}
//                 />
//                 <input
                    
//                     type="text"
//                     onChange={handleChange}
//                     name="email"
//                     value={editEmail}
//                 />
//                 <input
                    
//                     type="text"
//                     onChange={handleChange}
//                     name="phone"
//                     value={editPhone}
//                 />
                
//                 <button type="submit">submit</button>
               
//            </form>
            