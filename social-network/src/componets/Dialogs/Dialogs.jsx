import React from 'react'
import style from './Dialogs.module.scss'
import Header from './Head/Head'
import NotificationItem from './NotificationItem/NotificationItem'
import MessagesBlock from './MessagesBlock/MessagesBlock'

// let dialogsData = [
//   {
//     id: 1,
//     userName: 'Anton Demin',
//     messageCount: 4,
//     lastMessage: 'Great, I’ll see you tomorrow!...',
//   },
//   {
//     id: 2,
//     userName: 'Alexander Dmitriew',
//     messageCount: 5,
//     lastMessage: 'Great, I’ll see you tomorrow!...',
//   },
//   {
//     id: 3,
//     userName: 'Nicolas Volodin',
//     messageCount: 2,
//     lastMessage: 'Hi Elaine! I have a question...',
//   },
//   {
//     id: 4,
//     userName: 'Garold Insbruck',
//     messageCount: 1,
//     lastMessage: 'Great, I’ll see you tomorrow!...',
//   },
// ]

const Dialogs = props => {
  let notificationItem = props.dialogs.map(d => (
    <NotificationItem
      id={d.id}
      userName={d.userName}
      messageCount={d.messageCount}
      lastMessage={d.lastMessage}
    />
  ))

  let messageBlock = props.messages.map(m => (
    <MessagesBlock message={m.lastMessage} />
  ))

  return (
    <div className={style.dialogs}>
      <Header title="Chat / Messages" />
      <ul className={style.notificationList}>
        <li className={style.notificationItem}>{notificationItem}</li>
      </ul>
      <div className={style.chat}>
        <Header title="Alexander Dmitriew" />
        <ul className={style.chatMessage}>{messageBlock}</ul>
      </div>
    </div>
  )
}

export default Dialogs
