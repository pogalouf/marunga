import React, { useEffect, useState} from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

/*import HouseIcon from '@material-ui/icons/House';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PowerIcon from '@material-ui/icons/Power';
import AppsIcon from '@material-ui/icons/Apps';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import BathtubIcon from '@material-ui/icons/Bathtub'; */
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
/* import PlumbingOutlined from '@material-ui/icons/PlumbingOutlined';*/
import db from './firebase';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => 
  setRooms(
   snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))
    )
);
 
    return () => {
      unsubscribe();
    } 
  }, []);    
  
    return (
  <div className='sidebar'>
    
    <div className="sidebar__header">
    <Avatar />
    <div className="sidebar__headerRight">
     {/*  <LandscapeIcon />
      <ViewModuleIcon />
      <HouseIcon />
      <PowerIcon />
      <BathtubIcon /> 
      <AppsIcon /> 
      <FormatPaintIcon  />
      <HomeWorkIcon />
      <ApartmentIcon /> */}
      
     <IconButton><DonutLargeIcon /></IconButton>
     <IconButton><ChatIcon /></IconButton>
     <IconButton><MoreVertIcon /></IconButton>

    </div>
    </div>  
    <div className="sidebar__search">
      <div 
      className="sidebar__searchContainer">
      < SearchOutlined />
      <input 
      placeholder='Search Items...'
       type='text'/>
       </div>
      </div>  
      <div className="sidebar__chats">
        <SidebarChat addNewChat /> 
        {rooms.map(room => (
             <SidebarChat key={room.id} id={room.id}
             name={room.data.name} />
           ))} 
          
      
    </div>
    
</div>
  
    );
}

export default Sidebar
