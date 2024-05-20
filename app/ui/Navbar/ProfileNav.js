import Link from "next/link";
import Image from "next/image";

export default function ProfileNav() {
  return (
    <>
      <nav className=" flex pt-[32px] pl-[121px] pr-[101px] w-100% items-center justify-between">
        <div className="flex">
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Social media login"
              className=" w-[36px] h-[36px] mr-2 "
            />
            <span className="text-[20px] font-semibold mr-[69px]">
              Blogspedia
            </span>
          </div>
          <div className="flex mr-[69px]">
            <input
              type="text"
              name="Search"
              id="Search"
              placeholder="Search"
              className="appearance-none rounded-full px-4 py-2 w-[200px] bg-[#F4F4F5] text-[#000000] font-normal text-[14px] leading-tight focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-row item-center">
          <div>
            <Link
              href="/Editor"
              className="flex items-center text-[14px] font-semibold ml-[30px]"
            >
              <Image
                src="/ProfileNav/jam_write-f.jpg"
                alt="Write"
                width={20}
                height={20}
              />
              <span className="ml-2"> Write</span>
            </Link>
          </div>
          <div className="flex items-center ml-[30px]">
            <Image
              src="/ProfileNav/Ellipse.jpg"
              alt="Profile_Avatar"
              width={29}
              height={29}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
