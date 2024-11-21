// react-router-dom
import { useNavigate } from 'react-router-dom'

// assets
import bgVideo from "../assets/bgVideo.mp4"

// react icons
import { FcGoogle } from 'react-icons/fc'

export const Login = () => {
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

                    <div className='flex items-center bg-white px-3 py-2 rounded shadow-2xl'>
                        <FcGoogle className='mr-4' /> Sign in with Google
                    </div>
                </div>
            </div>
        </>

    )
} 