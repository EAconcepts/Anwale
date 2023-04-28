import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faUserCircle, faGear } from '@fortawesome/free-solid-svg-icons'

import Navbar from './Navbar';
import Footer from './Footer';
import Login from './auth/Login';
import StaticFooter from './StaticFooter';




const Dashboard = ({isLoggedIn, setIsLoggedIn, formValues, userValues,currentUser}) =>{

    const navigateTo = useNavigate()

    // const [loggedIn, setLoggedIn] = useState(false)
    // const [signedUp, setSignedUp] = useState(false)

    
    // console.log(isLoggedIn)
    // console.log(currentUser.email)
    // console.log(userValues)
    // console.log(formValues)

    const handleBackIcon =()=>{
        navigateTo(-1)
    }

    return(
        <div>
            {/* <Navbar isLoggedIn={isLoggedIn} /> */}
            {/* {!isLoggedIn &&(
                <Login/>
            )} */}
            <nav className='flex justify-between gap-3 px-3 py-2 bg-slate-100'>
                <div className='flex gap-3'>
                    <button onClick={handleBackIcon}>
                        <FontAwesomeIcon icon={faLessThan} className='text-xl mr-2' /> 
                    </button>
                    <FontAwesomeIcon icon={faUserCircle} className='text-xl text-slate-900'/>
                    <span className='text-xs'>{currentUser} </span>
                </div>
                
               <button className='text-xs'>
                SETTINGS <FontAwesomeIcon icon={faGear}/>
               </button>
            </nav>
            

            <StaticFooter/>
            {/* <Footer/> */}
        </div>
    )
}

export default Dashboard;