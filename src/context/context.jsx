import { createContext, useReducer  } from "react";

// importing reducer
import { UserGoogleLogin } from "./reducers/UserGoogleLogin";

// initialState

const initialState = JSON.parse(localStorage.getItem("google_login_user_data")) || [];

// creating context
export const GoogleUserDataContext = createContext(initialState)

export const GoogleUserDataProvider = ({children}) => {
    const [data,dispatch] = useReducer(UserGoogleLogin,initialState)

    const addGoogleLoginData = (data) => {
        dispatch({type:"ADD_USER", payload:data})
    }

    const logout = () => {
        dispatch({type:"USER_LOGOUT"})
    }
    

    return (
        <GoogleUserDataContext.Provider value={{
            addGoogleLoginData,
            data,
            logout
        }}>
            {children}
        </GoogleUserDataContext.Provider>
    )
}