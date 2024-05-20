import Image from "next/image";
export default function AdminRegister() {
  
  return (
    <>
      <div className="flex items-center pt-[82px]">
        <div className="flex flex-row justify-start">
          <Image
            src="/ProfileNav/img.jpg"
            alt="User Image"
            width={48}
            height={50}
          />
        </div>
        <div className="flex flex-col ml-4">
          <span className="flex text-[28px] text-[#592EA9] font-bold">
            Drafts in Guri Guraya
          </span>
          <span className="flex text-[16px] text-[#6D6E76] font-normal">
            Settings
          </span>
        </div>
      </div>

      
        <form className="pd-[52] flex justify-centerv w-full h-screen">
          <div className="flex items-center font-semibold text-[16px] mt-[46px]">
            <label htmlFor="Fname" className="block ">
              First Name
            </label>
            <label htmlFor="Lname" className="block pl-[125px]">
              Last Name
            </label>
          </div>
          <div className="flex items-center mt-[12px]">
            <input
              type="text"
              name="Fname"
              id="Fname"
              placeholder="Enter First name"
              className="rounded-md w-[194px] h-[70px] pl-[16px] py-[22px] text-light text-[17px] text"
            />
            <input
              type="text"
              name="Lname"
              id="Lname"
              placeholder="Enter Last name"
              className="rounded-md w-[194px] h-[70px] pl-[16px] py-[22px] ml-[11px] text-light text-[17px] text-[#000000] placeholder-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
            />
          </div>
        </form>
    </>
  );
}
