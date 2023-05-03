import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Settings from './components/pages/Settings';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
// import logo from './assets/images/logo-black.png'

function App() {

  const [user, loading, erroMsg] = useAuthState(auth)
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(()=>{
    const currentUser = localStorage.getItem('currentUser');
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if(currentUser){
      // console.log(currentUser)
      setCurrentUser(currentUser)
      console.log(currentUser)
      // setIsLoggedIn(isLoggedIn)
      // console.log(isLoggedIn)
    }
  })
  useEffect(()=>{
    if (user){
      console.log(user)
    }
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home user={user} isLoggedIn={isLoggedIn} currentUser={currentUser} />}/>
          <Route path='/dashboard' element={<Dashboard user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formValues={formValues}  currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path='/login' element={<Login user={user} loading={loading} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path='/sign-up' element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formValues={formValues} setFormValues={setFormValues} />}/>
          <Route path='/settings' element={<Settings user={user} currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
