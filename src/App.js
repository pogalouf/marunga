import React from 'react';
import './App.css';
import Sidebar from './Sidebar'; 
import  Chat from './Chat'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">   
        <div className="app__body"> 
    <Router>
      <Routes>
        <Route path="/app">
          <Sidebar />  
          <Chat />
          </Route>
        <Route path="/">

          <h1>HomePage</h1>
        </Route>
     
     
     </Routes>
     
     </Router> 
      </div>
    {/*   <div className="app__headerRight">*/}

      
   {/*  </div> */}
     </div>
  );
}

export default App;
