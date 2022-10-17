import React from "react";
import { useParams,Link } from "react-router-dom";


export default function Edits(props){
    const {contacts, handleChange} = props
    // console.log(contacts)
   const {contactid} =useParams()
//    console.log(contactid)
// let editContact = contacts.find(item => item.id === parseInt(contactid))
// useEffect(()=>{
//     editContact = contacts.find(item => item.id === parseInt(contactid))
// },[contacts])
   
//    const currentContact = contacts.find(contact => contact.id === parseInt(id));
//    console.log(editContact.name)
  
 


    return (
        <div className="edits">
            <h2>Edits page{contactid}</h2>
            <input
                className={contactid}
                type="text"
                onChange={handleChange}
                name="name"
                value={contacts[contactid -1].name}
            />
            <input
                className={contactid}
                type="text"
                onChange={handleChange}
                name="email"
                value={contacts[contactid -1].email}
            />
            <input
                className={contactid}
                type="text"
                onChange={handleChange}
                name="phone"
                value={contacts[contactid -1].phone}
            />
           <Link to="/">
                <button>submit</button>
           </Link> 
            
          


        </div>
    )
}