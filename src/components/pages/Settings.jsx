import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
// import firebase from "firebase/app";
import "firebase/auth";


const Settings =({currentUser, setCurrentuser})=>{
    const navigateTo = useNavigate()

    const handleBackIcon =()=>{
        navigateTo(-1)
    }

    console.log(currentUser)

    const handleLogOut = async ()=>{
        try{
            await firebase.auth().signOut();
        } catch (err){
            alert(err.message)
        }
    }

    return(
        <div className="bg-slate-200 min-h-screen">
            <nav className="bg-slate-100 px-4 py-2 shadow">
                <div className='flex gap-3'>
                    <button onClick={handleBackIcon}>
                        <FontAwesomeIcon icon={faLessThan} className='text-xl mr-2' /> 
                    </button>
                    <p className="text-base">Settings</p>
                </div>
            </nav>
            <div className="flex flex-col">
                <div className="flex flex-col mt-1 divide-y divide-slate-100">
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Personal Details</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Business Information</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                </div>
                <div className="flex flex-col mt-4 divide-y divide-slate-100">
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Change phone number</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Change email</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Change language</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                </div>
                <div className="flex flex-col mt-4 divide-y divide-slate-100">
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Disable chats</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-white">
                        <p>Manage Notifications</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                </div>
                <div className="flex flex-col mt-4 divide-y divide-slate-100">
                    <div className="flex justify-between px-5 py-2 bg-white ">
                        <p>Change password</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                    <div className="flex justify-between px-5 py-2 bg-white ">
                        <p>Delete my account permanently</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </div>
                    <button className="flex justify-between px-5 py-2 bg-white" onClick={handleLogOut}>
                        <p>Log out</p>
                        <FontAwesomeIcon icon={faGreaterThan} className='pt-1 text-slate-600'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings;