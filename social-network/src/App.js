import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route } from 'react-router-dom'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import News from './componets/News/News'
import Settings from './componets/Settings/Settings'
import SidebarContainer from './componets/Sidebar/SidebarContainer'
import UsersContainer from './componets/Users/UsersContainer'
import ProfileContainer from './componets/Profile/ProfileContainer'
import HeaderContainer from './componets/Header/HeaderContainer'
import Login from './componets/Login/News/Login'

const App = props => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SidebarContainer />
      <div className="content-wrapper">
        <Route path="/login" render={() => <Login />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  )
}

export default App

// ! Розібратися з компонентом Head, налагодити проброс заголовків.
// ! Переписати на класові компоненти(user итд).
// ! Доробити функционал. Ajax, отримати профайл користувача в auth
// ! Добавити можливість follow/unfollow в profile
// ! Вспливашка при запросі follow/unfollow
// ! Распознавание голоса и превращение в текст, либо рукописного ввода js
// ! Добавити функціонал кількості користувачів на сторінці 5,10,15, загальна кількість користувачів
// ! Виправити в api getProfile перенести окремо із usersAPI
// ! Винести кнопку, чекбокс в окремий компонент
// ! Пропрацювати анімацію і ефекти.
// ! Сделать плеэр на сайт, музыка "intro the xx"
// ! Авторизация через google sight in
// ! Налаштувати валідацію
// ! Підправити структуру форми login (на прикладі ChatMessageForm)
