import ImageUploading from 'react-images-uploading';

import React, { useState } from 'react';

export const CreatePost = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <>
            <div className="lg:px-[50px]">
                <h1 className="text-white  text-4xl font-extrabold ">Create Post</h1>

                <div className='my-[30px]'>
                    <ImageUploading
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                        }) => (
                            // write your building UI
                            <div className="upload__image-wrapper ">
                                <button
                                    className='text-black font-bold px-3 py-2 rounded mb-3 bg-white'
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Click to Upload Image
                                </button>
                                &nbsp;
                                {
                                    images.length > 0 && (

                                        <>
                                            <button className='ms-10 text-white' onClick={onImageRemoveAll}>Remove Image</button>
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image['data_url']} alt="" className='rounded-lg' width="500" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button onClick={() => onImageUpdate(index)}>Update</button>
                                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    )
                                }

                            </div>
                        )}
                    </ImageUploading>
                </div>

                <div className="grid grid-cols-3">

                    <div className="max-w-sm">
                        <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white">Title</label>
                        <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Title" />
                    </div>
                    <div className="max-w-sm">
                        <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white">Description</label>
                        <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Description" />
                    </div>
                    <div className="max-w-sm">
                        <label for="input-label" className="block text-sm font-medium mb-2 dark:text-white">Category</label>
                        <input type="email" id="input-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Select Category" />
                    </div>
                </div>

                <div className='text-center mt-6'>
                    <button className='text-black font-bold rounded-lg px-4 py-2 bg-white'>Submit</button>
                </div>

            </div>
        </>
    )
}