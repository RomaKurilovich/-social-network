import React from 'react';
import './App.css';
import Header from './ui/Header/Header';
import Profile from './ui/Profile/Profile';
import { Route} from "react-router-dom";
import Dialogs from './ui/Dialogs/Dialogs';
import Login from './ui/Login/Login';
import PeopleContainer from './ui/People/PeopleContainer';
import FriendsContainer from './ui/Friends/FriendsContainer';

const App: Function = (props: any) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='app-wrapper-content'>
        <Route path='/dialogs/:userId?' render={ () => <Dialogs/>} />
        <Route path='/profile/:userId?' render={ () => <Profile />} />
        <Route path='/people' render={ () => <PeopleContainer />} />
        <Route path='/login' render={ () => <Login />} />
        <Route path='/friends' render={ () => <FriendsContainer/>} />
      </div>
    </div>
  );
}
   


export default App;
