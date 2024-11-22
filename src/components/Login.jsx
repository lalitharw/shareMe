// react-router-dom
import { useNavigate } from 'react-router-dom'

// firebase utils
import {signInWithGooglePopUp} from "../services/firebase.util"

// assets
import bgVideo from "../assets/bgVideo.mp4"

// react icons
import { FcGoogle } from 'react-icons/fc'

export const Login = () => {
    const navigate = useNavigate();

    // google login function
    const signInWithGoogle = async(e) => {
        e.preventDefault()
        const data = await signInWithGooglePopUp()

        // saving data to local storage

        // don't forget to turn object from google to string
        localStorage.setItem("google_login_user_data",JSON.stringify(data.user))

        if(data){
            navigate("/")
        }

    }

    return (
        <>
            <div className='flex justify-center items-center flex-col  h-screen'>
                <div className='relative w-full h-full object-cover'>
                    <video src={bgVideo}
                        type="video/mp4"
                        loop
                        controls={false}
                        autoPlay
                        muted
                        className='w-full h-full  object-cover'
                    />
                </div>
                <div className=' px-4 py-2 flex justify-center items-center shadow-2xl rounded absolute left-0 right-0 bottom-0 top-0 bg-[#030a147a]'>
                    <form>
                    <button onClick={signInWithGoogle} className='flex items-center bg-white px-3 py-2 rounded shadow-2xl'>
                        <FcGoogle className='mr-4' /> Sign in with Google
                    </button>
                    </form>
                </div>
            </div>
        </>

    )
} 