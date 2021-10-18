import './App.css';
import react, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { UserContext } from './contexts/userContext';


function App() {

  const [user, setUser] = useState("")

  return (
    <UserContext.Provider value={
      {
        user, setUser
      }
    }>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
