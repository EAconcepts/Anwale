import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Settings from './components/pages/Settings';
// import logo from './assets/images/logo-black.png'

function App() {

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  let userValues

  useEffect(()=>{
    const currentUser = localStorage.getItem('currentUser');
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if(currentUser){
      // console.log(currentUser)
      setCurrentUser(currentUser)
      console.log(currentUser)
      setIsLoggedIn(isLoggedIn)
      console.log(isLoggedIn)
    }
  })

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Home/> */}
        {/* <Navbar/> */}
        <Routes>
          <Route exact path='/' element={<Home isLoggedIn={isLoggedIn} currentUser={currentUser} />}/>
          <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formValues={formValues} userValues={userValues} currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userValues={userValues} currentUser={currentUser} setCurrentUser={setCurrentUser} />}/>
          <Route path='/sign-up' element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formValues={formValues} setFormValues={setFormValues} />}/>
          <Route path='/settings' element={<Settings currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      
    </div>
  )
}

export default App
