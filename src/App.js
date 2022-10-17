import React, { useState,useEffect } from 'react';
import Header  from './components/Header';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import Edits from './components/Edits';



function App() {


  const [address , setAddress] = useState({
    contacts: [],
    isLoading: true

  })

  useEffect(()=>{
    console.log('useeffect run')
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(res => setAddress(()=>{
            return {
                contacts: res,
                isLoading: false
            }
        }))
  },[])
  
  function updateContact(e){
    console.log(e.target)
        const {name, value ,className:contactid } = e.target
    
        setAddress(prevState=>{
          console.log(prevState.contacts)
          let newArray= prevState.contacts

          let upArray = newArray.map(item =>{
            console.log(item.id, contactid)

            if(item.id === parseInt(contactid)){
              console.log(item.id,value)
              console.log([item.name])

              return {
                ...item,
                [name] : value
              }
            }else{
              console.log('erturn')
                return item
              }
          })
          console.log(upArray)
          return {
            ...prevState,
            contacts: upArray
          }
        })
}
 
         



    return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home contacts={address.contacts} isLoading={address.isLoading}/>}/>
          <Route path="/edit" element={<h2>edit</h2>}/>
          <Route exact path="/delete" element={<h2>delete</h2>}/>       
          <Route path="/edit/:contactid" element={<Edits contacts={address.contacts} handleChange={(e)=> updateContact(e)}/>} />
        </Routes>
      </div>
    );
  
}

export default App;
