import './App.scss';
import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { UserContext } from './contexts/userContext';
import HomePage from './pages/HomePage';
import FetchKit from './utils/fetchKit'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const [user, setUser] = useState()


  const getUserData = async () =>{
    const res = await FetchKit.getUserFetch()
    const data = await res.json()
    setUser(data) 
  }


  return (
    <UserContext.Provider value={
      {
        user, setUser, getUserData
      }
    }>
      <Switch>
        <ProtectedRoute path="/home" component={HomePage}/>
        <Route exact path="/" component={LoginPage}/>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
