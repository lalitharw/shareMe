export const Home = () => {

    const google_data = JSON.parse(localStorage.getItem("google_login_user_data"));
    

    return (
        <>
            <h1>Home {google_data.displayName}</h1>
        </>
    )
}