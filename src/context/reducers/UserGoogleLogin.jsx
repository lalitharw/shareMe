export const UserGoogleLogin = (state,action) => {
    let data;

    switch(action.type){
        case "ADD_USER":
            data = [action.payload]
            localStorage.setItem("google_login_user_data",JSON.stringify(data))
            return data;
        default:
            return state;
    }
}