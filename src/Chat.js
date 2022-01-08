import { Avatar, IconButton } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import './Chat.css';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'; 
import { useParams } from 'react-router-dom';
import db from './firebase';
import * as firebase from 'firebase/app';
import { useStateValue } from "./StateProvider";

 function Chat() {

    const [input, setInput] = useState(""); 
    const { roomId } = useParams ();
    const [roomName, setRoomName] = useState ("");
  const [messages, setMessages] = useState ([]);
    const [{ user }, dispatch] = useStateValue (); 


useEffect(() => {
    if (roomId) {
        db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => {
        setRoomName
        (snapshot.data().name);
        });
        db.collection('rooms')
        .doc(roomId)
        .collection('messages').orderBy
        ('timestamp', 'asc')
        .onSnapshot(snapshot => {
            setMessages
        (snapshot.docs.map(doc => doc.data()))
        
    });
    }
   
}, [roomId]);


    const sendMessage = (e) => {
        e.preventDefault();
       console.log("You typed >>> ", input);
       
      /*   db.collection('rooms').doc(roomId).collection('messages').add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),          
       }); */

        setInput("");
     }; 

    return (
        <div className='chat'>
        <div className="chat__header">
        {/*  src={`https://avatars.dicebear.com/
            api/human/${seed}.svg`} */}
              <Avatar src='images/whatsAppLo.png'/>
            <div className="chat__headerInfo">
               

                <h2>{roomName}</h2>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
            <IconButton> < SearchOutlined /></IconButton>
     <IconButton><AttachFile /></IconButton>
     <IconButton><MoreVertIcon /></IconButton>
            </div>
        </div>
        <div className="chat__body">
        {messages.map((message) => (
        <p className={`chat__message 
        ${true && 'chat__receiver'}`}>
            <span className="chat__name">
                {message.name}
            </span>{message.message}
           
            
            <span className="chat__timestamp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
            </span> 
            </p>
        ))}
        <p className="chat__message">HELLO!</p>
        <p className="chat__message">HELLO!</p>

        </div>
        <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
            <input value={input} onChange={e =>setInput
            (e.target.value)} 
            type="text"
            placeholder="Type your message here"/>
            <button  onClick={sendMessage} 
               type='submit'>Send A Message</button>
        </form>
        <MicIcon />
        </div> 
        </div>
    );
}

export default Chat;
 