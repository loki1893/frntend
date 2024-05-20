'use client'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


export default function LoginForm() {
  const router = useRouter()
  const [user, setUser] = useState({ email: "", password: "" });


  async function submitForm(e) {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Signup successful:", response.data);
        // Assuming the token is in the response data (adjust based on your API):
        const token = response.data.token; // Extract the token from response data
        const details = JSON.stringify(response.data.data); // Extract the data from the response data
        localStorage.setItem("your_token_key", token); // Save token to local storage
        localStorage.setItem("details", details);
        router.push('/Drafts')
        // Handle successful signup (e.g., redirect to login page)
      } else {
        console.error("Signup error:", response.data);
        // Handle signup error (e.g., display error message to user)
      }
    } catch (error) {
      console.log("Error", error);
      //Throw new error
    }
  }

  function changeValue(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="flex flex-row justify-center w-full h-[100vh]">
        <div className="w-1/2 bg-white overflow-y-auto ">
          <div className="ml-[48px] mt-[33px] top-0   text-[#66899D] ">
            <h2 className="font-bold font-Roboto text-[30px]">LOGO</h2>
          </div>
          <div>
            <form
              className=" w-0.7 justify-center  pt-[72px] ml-[152px] "
              onSubmit={submitForm}
            >
              <h1 className="text-left font-semibold text-[35px] font-Roboto ">
                Login with BlogPedia
              </h1>
              <div className="pt-[38px]">
                <label
                  htmlFor="Username"
                  className="block text-sm font-medium  pb-[12px] text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  onChange={changeValue}
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  className="rounded-md w-[399px] h-[70px] py-[22px] pl-[16px] border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 "
                />
              </div>
              <div className="pt-[47px]">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium pb-[12px] text-gray-700"
                >
                  Enter your Password
                </label>
                <input
                  type="password"
                  onChange={changeValue}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="rounded-md w-[399px] h-[70px] py-[22px] pl-[16px] border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 "
                />
              </div>
              <div className="flex flex-col-reverse w-[399px] ">
                <button
                  type="submit"
                  className="w-1rem h-[70px] justify-self-center  bg-[#66899D] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="text-sm pt-[10px] pb-[46px] text-[#66899D] hover:underline flex-row ml-auto mb-2 font-normal text-[16px]"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 h-[100vh] md:block bg-[#66899D] text-gray-700 px-8 py-12 flex items-center justify-center "></div>
      </div>
    </>
  );
}
