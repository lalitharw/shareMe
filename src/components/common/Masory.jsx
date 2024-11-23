import Masonry from 'react-masonry-css'

// react icons
import { BsBookmarkCheckFill } from "react-icons/bs";

export const MasonryLayout = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            <div className="my-1 relative group">
                <BsBookmarkCheckFill className='absolute left-[10px] top-[20px] text-3xl text-red-800 opacity-0 group-hover:opacity-100' />
                <img class=" w-full rounded-md  " src="https://images.unsplash.com/photo-1587944214730-0b9f98b4ccb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className='my-1'>
                <img class=" w-full rounded-md " src="https://images.unsplash.com/photo-1731902062633-1496d7bcf95c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className='my-1'>
                <img class=" w-full rounded-md  " src="https://plus.unsplash.com/premium_photo-1732283132754-daee0ffcad4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className='my-1'>
                <img class=" w-full rounded-md " src="https://plus.unsplash.com/premium_photo-1682130336901-10452a5dd5f4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className='my-1'>
                <img class=" w-full rounded-md  " src="https://images.unsplash.com/photo-1587944214730-0b9f98b4ccb0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className='my-1'>
                <img class=" w-full rounded-md " src="https://images.unsplash.com/photo-1732229654147-3562920a8e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className='my-1'>
                <img class=" w-full rounded-md " src="https://images.unsplash.com/photo-1720048171180-a8178a198fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </Masonry>
    )
}