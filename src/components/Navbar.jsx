import {NavLink, useNavigate} from 'react-router-dom'
import logo from '../assets/images/logo-black.png'

const Navbar = ({isLoggedIn, currentUser}) =>{
  const navigateTo = useNavigate()

  // console.log(isLoggedIn)
  const handleDashboardClick =()=> {currentUser ? navigateTo('/dashboard') : navigateTo('/login')
    // return currentUser    
} 
  
    return(
        <nav className="sticky top-0 z-50 bg-slate-100 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-10">
            
            <div className="flex-shrink-0 flex items-center">
              <NavLink to='/'>
                <img className="h-20 w-auto" src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className='inline-flex'>
                <button onClick={handleDashboardClick}>
                      <i className='fa fa-user-circle text-3xl text-slate-900'></i>
                </button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;