// components
import { Header } from "../common/header"
import { Home } from "../Home"
import { PinDetails } from "../pinDetails"
import { SearchBar } from "../SearchBar"
import { CreatePost } from "../CreatePost"

// react router dom
import { Routes, Route } from "react-router-dom"
import { UserDetails } from "../UserDetails"
import { CategoryPin } from "../CategoryPin"

export const Pins = () => {
    return (
        <>
            <Header />
           
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pin-detail/:pinId" element={<PinDetails />} />
                    <Route path="search" element={<SearchBar />} />
                    <Route path="user/:userId" element={<UserDetails />} />
                    <Route path="category/:categoryName" element={<CategoryPin />} />
                    <Route path="create-post" element={<CreatePost />} />
                </Routes>
           
        </>
    )
}