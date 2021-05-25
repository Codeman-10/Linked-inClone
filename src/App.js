import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './userReducer'
import { auth } from './Firebase';
import Widget from './Widget';
function App() {
//https://linkedin-clone-yt-13f6b.web.app/
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">

      <Header></Header>
      {!user ? <Login /> :
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      }
    </div>
  );
}

export default App;
