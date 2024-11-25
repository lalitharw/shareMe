// components
import { MasonryLayout } from "./common/Masory"

export const UserDetails = () => {
    const params = new URLSearchParams(window.location.search)

    console.log(params.get("data"))
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <p>
                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-[200px] h-[200px] rounded-full  shadow-rose-950" alt="user-profile" />
                </p>
                <h2 className="text-white text-2xl font-bold mt-1">John Doe</h2>
            </div>

            <h2 className="text-white text-2xl font-bold mt-8 px-[20px]">Pins Posted</h2>
            <MasonryLayout />
        </>
    )
}