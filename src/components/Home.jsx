import { useContext, useEffect, useState } from "react";

// context
import { GoogleUserDataContext } from "../context/context";

export const Home = () => {
    const {data} = useContext(GoogleUserDataContext)
    // console.log(data)
    
    
    return (
        <>
            <h1 className="w-screen h-screen flex justify-center items-center font-semibold">{data[0]?.displayName}</h1>
        </>
    )
}