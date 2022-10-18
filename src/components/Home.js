import React from "react";
import { Link } from "react-router-dom";

export default function List(props){
   
    const{ contacts , isLoading, handleDeleteContact } = props
    
    
    let contact = contacts.map(item => {
        return(
            <div  key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.email}</h2>
                <h2>{item.phone}</h2>
                <Link to={`/edit/${item.id}`} ><span>Edit</span></Link>
               <h2 onClick={()=>handleDeleteContact(item.id)}>Delete</h2>
            </div>
        )
})

    
    return(
        <div className="header-section">
            <h3>List</h3>
            <Link to="/addcontact"><button>Add Contact</button></Link>
            <div> 
                {isLoading ? <h2>Loading</h2> : contact}

            </div>
        </div>
    )
}