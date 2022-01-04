import { Avatar, IconButton } from '@material-ui/core';
import React, {useState} from 'react'
import './Chat.css';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic'; 
/*import db from './firebase';
import firebase from 'firebase'; */
 function Chat() {

    const [input, setInput] = useState(""); 
   /*  const [seed, setSeed] = useState('');*/
   /*  useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);  */

     const sendMessage = (e) => {
        e.preventDefault();
       console.log("You typed >>> ", input);
        setInput("");
    };

    return (
        <div className='chat'>
        <div className="chat__header">
        {/*  src={`https://avatars.dicebear.com/
            api/human/${seed}.svg`} */}
              <Avatar src='images/whatsappLogo.png'/>
            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
            <IconButton> < SearchOutlined /></IconButton>
     <IconButton><AttachFile /></IconButton>
     <IconButton><MoreVertIcon /></IconButton>
            </div>
        </div>
        <div className="chat__body">
        <p className={`chat__message 
        ${true && 'chat__receiver'}`}>
            <span className="chat__name">
                Jinny Carro
            </span>HELLO!
           
            
            <span className="chat__timestamp">
                3:45mp
            </span> </p>
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
            <button onClick={sendMessage}
            type='submit'>Send A Message</button>
        </form>
        <MicIcon />
        </div> 
        </div>
    );
}

export default Chat;
 