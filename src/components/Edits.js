import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Edits(){

   const {id} =useParams()

   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, method)
        .then(res=> res.json())
        .then(res => setAddress(()=>{
            
        }))
},[])

    return (
        <div className="edits">
            <h2>Edits page{id}</h2>
        </div>
    )
}