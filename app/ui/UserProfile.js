"use client";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const storedData = JSON.parse( localStorage.getItem('details'));
    if(storedData){
      setUser(storedData);
    }
  },[])

  async function handleDeleteProfile() {
    const token = localStorage.getItem("your_token_key"); // Assuming token in session storage
    
   
    try {
      const response = await axios.delete(
        "http://localhost:3000/api/users/delete-account",
        {
          headers: { Authorization: `Bearer ${token}` }, // Include token in Authorization header
        }
      );

      if (response.status === 200) {
        console.log("Profile deleted successfully");
        // Handle successful deletion (e.g., redirect to another page)
      } else {
        console.error("Error deleting profile:", response.data);
        // Handle deletion error (e.g., display error message to user)
      }
    } catch (error) {
      console.error("Error during profile deletion:", error);
      // Handle other errors (e.g., network issues)
    }
  }
  console.log(user)
  console.log(user?.firstname)
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-Roboto ">
        <div className="flex items-center pt-[42px]">
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
            <span className="flex  text-[16px] text-[#6D6E76] font-normal">
              Settings
            </span>
          </div>
        </div>
        <form className="space-y-8 pt-[87px]  ">
          <div className="flex flex-row justify-between">
            <label
              htmlFor="email"
              className="text-base font-normal text-[#000000] w-1/4 leding-7  pb-[26px] "
            >
              Email address
            </label>
            <span className="">{user?.email}</span>
          </div>
          <div className="flex flex-row justify-between">
            <label
              htmlFor="username"
              className="text-base font-normal text-[#000000] w-1/4 leding-7 pb-[26px] "
            >
              Username and Subdomain
            </label>
            <span className="">@syeddaniyal307</span>
          </div>
          <div className="flex flex-row justify-between">
            <label
              htmlFor="firstName"
              className="text-base font-normal text-[#000000] w-1/4 leding-7 pb-[26px]"
            >
              First Name
            </label>
            <span className="">{user?.firstname}</span>
          </div>

          <div className="flex flex-row justify-between">
            <label
              htmlFor="bio"
              className="text-base font-normal text-[#000000] w-1/4 leding-7 pb-[26px] "
            >
              Bio , Edit pic
            </label>
            <span className="">Syeddaniyal374@gmail.com</span>
          </div>
          <div className="pb-[134px]">
            <button className="text-[#D02E2E] " onClick={handleDeleteProfile}>
              Delete account
            </button>
            <p>Lorem ipsum dolor sit amet consectetur. Risus</p>
          </div>
        </form>
      </div>
    </>
  );
}
