import React, { useContext } from 'react'
import Video from '../img/video.png'
import Friend from '../img/addFriend.png'
import More from '../img/more.png'
import Messages from './messages'
import Input from './input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={Video} alt=''/>
          <img src={Friend} alt=''/>
          <img src={More} alt=''/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat