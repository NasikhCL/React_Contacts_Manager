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
    








    editContact(editName,editEmail,editPhone, contactid)
        // setAddress(prevState=>{
        //     let newArray = prevState.contacts.map(item=> {
        //         if(contactid === item.id){
        //             console.log(item)
        //             return item
        //         }else{
        //             return item
        //         }
        //     })


        // })
        // navigate('/')
   }
//    console.log(contactid)
// let editContact = contacts.find(item => item.id === parseInt(contactid))
// useEffect(()=>{
//     editContact = contacts.find(item => item.id === parseInt(contactid))
// },[contacts])
   
//    const currentContact = contacts.find(contact => contact.id === parseInt(id));
//    console.log(editContact.name)
  
 
// <form onSubmit={addContact}>
//                 <input placeholder="Enter Your Name" type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
//                 <input placeholder="Enter Your Email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
//                 <input placeholder="Enter Your Phone" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} />
//                 <button type="submit">add</button>
//             </form>

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
            