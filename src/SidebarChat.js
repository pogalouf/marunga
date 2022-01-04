import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarChat.css';
import db from './firebasee';  

function SidebarChat({ id, name, addNewChat }) {
    /* const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []); */

     const createChat = () => {
         const roomName = prompt('Please enter your name for chat');
        if (roomName) {
             db.collection("rooms").add({
                name: roomName
            })  
        }
        }; 

    return  !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src='images/profile1.png'/*src={`https://avatars.dicebear.com/
            api/human/${seed}.svg`}*/ />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ): (
        <div onClick={createChat} 
        className='sidebarChat'>
            <h2>Add new Chat</h2>
        </div>
    );
    }

export default SidebarChat
