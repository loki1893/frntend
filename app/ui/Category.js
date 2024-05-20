'use client'
import { useState } from 'react';

export default function Category(){
    const [categories, setCategories] = useState([
        'Web Development', 'Science', 'App Development', 'UI/UX'
    ]);

    const removeCategory = (category) => {
        setCategories(categories.filter((cat) => cat !== category));
    };
    return(
        <>
        <div className="p-4">
            <div className="relative" style={{ width: '513px', height: '43px' }}>
                <input
                    type="text"
                    placeholder="Search"
                    // className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
                    className="w-full h-full px-4 py-2 border border-gray-300 rounded-[30px] bg-[#F4F4F5] focus:outline-none"
                    
                />
                <span className="absolute top-0 right-0 p-2">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.42-1.42l5.58 5.58-1.42 1.42-5.58-5.58zM8 14A6 6 0 108 2a6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
            <div className="flex flex-wrap mt-4 space-x-2">
                {categories.map((category) => (
                    <div key={category} className="flex items-center px-3 py-1 bg-gray-200 rounded-full">
                        <span>{category}</span>
                        <button
                            className="ml-2 text-red-700 text-[#FFFFFF] bg- transparent focus:outline-none"
                            onClick={() => removeCategory(category)}
                            
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}