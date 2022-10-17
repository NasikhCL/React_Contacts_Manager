import React from "react";


export default function Disp(props){

    const{ contacts }= props
    
    let list = contacts.map(item=>{
        return <h2 key={item.id}>{item.name}</h2>
    })
    return(
        <div className="blue">
            {list}
        </div>
    )
}