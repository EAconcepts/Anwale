import {React, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

export const Login = ({isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}) => {
 
    const navigateTo = useNavigate()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState("")
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleInputChange =(event)=>{
        const {name, value} = event.target;
        setUserDetails((prevDetails)=>({...prevDetails, [name]:value}))
    }

    const handleLoginSubmit =(event)=>{
        event.preventDefault();
        const loginValidate = loginValidation(userDetails)
        if(Object.keys(loginValidate).length===0){
            signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            .then((userValues)=>{
                currentUser = userValues.user.email
                // console.log(userValues.user.email)
                // localStorage.setItem('currentUser', JSON.stringify(currentUser))
                localStorage.setItem('currentUser',(currentUser))
                setCurrentUser(currentUser)
                localStorage.setItem('isLoggedIn', (true))
                console.log(currentUser)

                // setIsLoggedIn(true)
                navigateTo('/dashboard')
                return currentUser;
                // return isLoggedIn, isLoggedIn, currentUser  
            })
            .catch((error)=>{
                console.log(error)
                alert(error)
            })   
            
        }
        else{
            setErrors(loginValidate)
        }
        return isLoggedIn;
        }
    // useEffect(()=>{
    //     if(isLoggedIn){
    //         navigateTo('/')
    //     }
    // }, [isLoggedIn])

    
    //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    //     setCurrentUser(currentUser);
    //     return currentUser;
    //   });
    // useEffect(() => {
    //   const currentUser = localStorage.getItem('currentUser');
    //   if(currentUser){
    //     setCurrentUser(currentUser)
    //   }
    //    console.log(currentUser)
    // }, [currentUser]);

    const loginValidation =(values)=>{
        let errors = {}
        if(!values.email){
            errors.email = "Email field cannot be empty"
        }
        if(!values.password){
            errors.password = "Password field cannot be empty"
        }
        return errors
    }
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg md:p-14">
              <h2 className="text-2xl font-bold mb-4 text-center font-mono md:text-3xl">Login</h2>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? " border-red-500":""} `}
                    id="email"
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={userDetails.email}
                    onChange={handleInputChange}
                  />
                  {errors.email &&(
                    <p className='text-xs text-red-500'>{errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
                    id="password"
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={userDetails.password}
                    onChange={handleInputChange}
                  />
                  {errors.password &&(
                    <p className=' text-xs text-red-600'>{errors.password}</p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type='submit'
                  >
                    Sign In
                  </button>
                  <Link to='/'>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      
                    >
                      Cancel
                    </button>
                  </Link>
                </div>
                <div>
                    <p className=' text-xs mt-3 md:text-base md:mt-4'>Don't have an account? <Link className=' underline' to='/sign-up'>Sign Up here</Link></p>
                  </div>
              </form>
            </div>
          </div>
        
    </div>
  )
}
export default Login;