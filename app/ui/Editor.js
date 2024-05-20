import Image from 'next/image';

export default function Editor() {
    return (
        <>
            <form className="w-3/4 mx-auto pt-18">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className='flex flex-row justify-start'>
                            <Image
                                src="/ProfileNav/img.jpg"
                                alt="User Image"
                                width={48}
                                height={50}
                            />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <span className='flex text-[28px] text-[#592EA9] font-bold'>Drafts in Guri Guraya</span>
                            <span className='flex  text-[16px] text-[#6D6E76] font-normal'>Posted on 27th January 2024</span>
                        </div>
                    </div>
                    <div className="flex justify-end pb-[69px]">
                        <button type="submit" className="w-[156px] h-[47px] bg-[#66899D] text-white rounded-[25px] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                            Publish
                        </button>
                    </div>
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:opacity-75 placeholder:text-[#E7E7E7] placeholder:Roboto placeholder:font-medium placeholder:text-[48px]"
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        name="story"
                        id="story"
                        placeholder="Tell your story..."
                        className="w-full h-80 px-4 py-2 border border-gray-300 rounded-lg shadow resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#E7E7E7] placeholder:Roboto placeholder:font-normal placeholder:text-[36px]"
                    ></textarea>
                </div>
            </form>
        </>
    )
}