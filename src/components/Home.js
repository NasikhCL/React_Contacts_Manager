import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List(){
    const [address , setAddress] = useState({
        contacts: [],
        isLoading: true

    })

    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res=> res.json())
                .then(res => setAddress(()=>{
                    return {
                        contacts: res,
                        isLoading: false
                    }
                }))
    },[])
    let contact = address.contacts.map(item => {
        return <Link to={`/edit/${item.id}`}><h2 key={item.id}>{item.name}</h2></Link>
    })
    return(
        <div className="header-section">
            <h3>List</h3>
            <div> 
                {address.isLoading ? <h2>Loading</h2> : contact}

            </div>
        </div>
    )
}