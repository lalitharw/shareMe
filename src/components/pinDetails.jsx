// react icons
import { MdDownloadForOffline } from "react-icons/md";

// react router dom
import { Link } from "react-router-dom";
import { MasonryLayout } from "./common/Masory";

export const PinDetails = () => {
    return (
        <>

            <div className="flex justify-center items-center md:items-start flex-initial">
                <img
                    className="rounded-t-3xl rounded-b-lg"
                    src="https://images.unsplash.com/photo-1720048171180-a8178a198fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
                    alt="user-post"
                />
            </div>
            <div className="w-full p-5 flex-1 xl:min-w-620">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <a
                            href={``}
                            download
                            className="bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
                        >
                            <MdDownloadForOffline className="text-2xl" style={{ color: "white" }} />
                        </a>

                        <a
                            href={``}
                            download
                            className="text-black bg-white px-2 py-1 text-sm  rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
                        >
                            Category
                        </a>
                    </div>
                    <a href={``} target="_blank" rel="noreferrer">
                        sada
                    </a>
                </div>
                <div>
                    <h1 className="text-4xl font-bold break-words mt-3" style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, alias?
                    </h1>
                    <p className="mt-3" style={{ color: "white" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus dignissimos rem repellendus placeat sed aperiam, alias tempore beatae! Ullam earum dolorum rem possimus ratione provident, mollitia vel suscipit debitis.</p>
                </div>
                <Link to={`/`} className="flex gap-2 mt-5 items-center  rounded-lg ">
                    <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-10 h-10 rounded-full" alt="user-profile" />
                    <p className="font-bold" style={{ color: "white" }}>Hello wrld</p>
                </Link>
            </div>

            <h2 className="text-white text-2xl font-bold mt-8 px-[20px]">See More Pins</h2>
            <MasonryLayout />
        </>
    )
}