import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import  Chat from './Chat'; 
/* import { render } from "react-dom"; */
import { BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'; 
import Login from './Login';
import { useStateValue } from './StateProvider';



function App() {
  const [{user}, dispatch] = useStateValue();
  return ( 
   <div className="app">   
        
    {!user ?(
      <Login />
    ): (

<div className="app__body"> 


     <BrowserRouter>
      <Sidebar />
       
      <Routes>
         <Route path="/">
        
        </Route>
        <Route path="/rooms/:roomId"  element={  <Chat />  }>   
        </Route>
       
     
     </Routes>
     
     </BrowserRouter>  
      
      </div>)}
    {/*   <div className="app__headerRight">*/}

      
   {/*  </div> */}
     </div>
    
  );
}

export default App; 
