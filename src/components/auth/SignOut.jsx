import { signOut } from 'firebase/auth'
import { auth, provider } from '../../firebase'

const SignOut = (user)=>{
    // navigateTo = useNavigation()
    console.log(user)
    signOut(auth)
    localStorage.removeItem(user)
}

export default SignOut;