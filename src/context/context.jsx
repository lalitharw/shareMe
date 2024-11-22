import { createContext, useReducer  } from "react";

// reducer
import { GoogleDataReducer } from "./reducers/GoogleDataReducer";

const initialState = JSON.parse(localStorage.getItem("google_user_login_data") || []);

export const GoogleUserDataContext = createContext(initialState)

export const Provider = ({children}) => {
    const [googleLogin,dispatch] = useReducer(GoogleDataReducer,initialState)

    // actions
    const addGoogleUserLoginData = (data) => {
        dispatch({type:"ADD_USER", payload:data})
    }


    return (
        <GoogleUserDataContext.Provider
         value={{
            addGoogleUserLoginData,
            googleLogin
         }}
        >
            {children}
        </GoogleUserDataContext.Provider>
    )
}

// export const 