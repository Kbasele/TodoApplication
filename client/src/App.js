import './App.scss';
import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { UserContext } from './contexts/userContext';
import HomePage from './pages/HomePage';
import FetchKit from './utils/fetchKit'


function App() {

  const [user, setUser] = useState({
    
      userName:"", 
      tasks:[]

  })


  const getUserData = async () =>{
    const data = await FetchKit.getUserFetch()
    await data.json()
    .then(item => setUser(item))    
  }

  return (
    <UserContext.Provider value={
      {
        user, setUser, getUserData
      }
    }>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/" component={LoginPage}/>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
