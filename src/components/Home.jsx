import { useContext } from "react";

// context
import {GoogleUserDataContext} from "../context/context"

export const Home = () => {

    const {googleLogin} = useContext(GoogleUserDataContext)

    const google_data = JSON.parse(localStorage.getItem("google_login_user_data"));
    
    return (
        <>
            <h1>Home {googleLogin.displayName}</h1>
        </>
    )
}