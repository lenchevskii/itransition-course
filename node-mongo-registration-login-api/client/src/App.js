import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { Router, navigate } from '@reach/router'
import Navigation from './components/Navigation'
import Register from './components/Register'
import Login from './components/Login'
import Protected from './components/Protected'
import Content from './components/Content'

export const UserContext = React.createContext([])

function App() {
  const [user, setUser] = useState({})
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)

  const logoutCallBack = async () => {

  }

  useEffect(() => {
    
  }, [])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Navigation logoutCallBack={logoutCallBack} />
        <Router id="router">
          <Login path="login" />
          <Register path="register" />
          <Protected path="protected" />
          <Content path="/" />
        </Router>
      </div>
    </UserContext.Provider>
  )
}

export default App
