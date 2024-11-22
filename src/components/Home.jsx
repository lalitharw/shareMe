import { useContext, useEffect, useState } from "react";

// context
import { GoogleUserDataContext } from "../context/context";

export const Home = () => {
    const {data} = useContext(GoogleUserDataContext)
    // console.log(data)
    
    
    return (
        <>
            <h1>Home {data[0]?.displayName}</h1>
        </>
    )
}