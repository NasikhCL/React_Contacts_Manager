import React, { } from 'react';
import Header  from './components/Header';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import List from './components/List';
import Edits from './components/Edits';

function App() {

    return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/edit" element={<h2>edit</h2>}/>
          <Route exact path="/delete" element={<h2>delete</h2>}/>       
          <Route path="/edit/:id" element={<Edits />} />
        </Routes>
      </div>
    );
  
}

export default App;
