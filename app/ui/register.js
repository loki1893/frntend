'use client'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'



export default  function RegisterForm() {
    const router = useRouter()
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", conPassword: "" })



    async function submitForm(e) {
        e.preventDefault();
        console.log(user);
        const {firstName, lastName, email, password} = user;
        const dataToSend = {
            firstname: firstName,
            lastname: lastName,
             email,
             password
        }
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
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="flex flex-row justify-center w-full h-[100vh] font-Roboto text-[#263A43]">
                <div className="w-1/2  bg-white overflow-y-auto">
                    <div className="ml-[48px] mt-[33px] text-[#66899D] "><h2 className="font-bold text-[30px]">LOGO</h2></div>
                    <div>
                        <form className=" w-0.7 justify-center  pt-[72px] ml-[152px] " onSubmit={submitForm}>
                            <h1 className="text-left font-semibold text-[35px] text-[#000000] ">Register with BlogPedia</h1>
                            <div className="flex items-center font-semibold text-[16px] mt-[46px]">
                                <label htmlFor="firstName" className="block ">
                                    First Name
                                </label>
                                <label htmlFor="lastName" className="block pl-[125px]">
                                    Last Name
                                </label>
                            </div>
                            <div className="flex items-center mt-[12px]">
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={user.firstName}
                                    placeholder="Enter First name"
                                    onChange={changeValue}
                                    className="rounded-md w-[194px] h-[70px] pl-[16px] py-[22px] text-light text-[17px] text-[#000000] placeholder-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 "
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={user.lastName}
                                    placeholder="Enter Last name"
                                    onChange={changeValue}
                                    className="rounded-md w-[194px] h-[70px] pl-[16px] py-[22px] ml-[11px] text-light text-[17px] text-[#000000] placeholder-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 "
                                />
                            </div>
                            <div className='pt-[20px] font-semibold text-[16px]'>
                                <label htmlFor="email" className="block mb-[12px]">
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={user.email}
                                    placeholder="Enter Email"
                                    onChange={changeValue}
                                    className="rounded-md w-[399px] h-[70px] text-[17px] pl-[16px] py-[22px] mb-[20px] text-[#000000] placeholder-black text-light font-light border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                                />
                            </div>
                            <label htmlFor="password" className="block font-semibold mb-[12px]">
                                Enter your Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={user.password}
                                placeholder="Enter Password"
                                onChange={changeValue}
                                className="rounded-md w-[399px] h-[70px] text-[16px] pl-[16px] py-[22px] mb-[20px] font-normal border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                            />
                            <label htmlFor="conPassword" className="block font-semibold mb-[12px]">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="conPassword"
                                id="conPassword"
                                value={user.conPassword}
                                placeholder="Enter Confirm Password"
                                onChange={changeValue}
                                className="rounded-md w-[399px] py-[20px] h-[70px] text-[16px] pl-[16px] py-[22px]  mb-[42px] font-normal border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                            />
                            <button type="submit" className="w-[399px] h-[70px] justify-self-center mt-[20px] mb-[20px]  bg-[#66899D] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Register
                            </button>
                            <div className="flex items-center ml-[80px]">
                                <Link
                                    href="/login"
                                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span> Already  have an  account?</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 h-full md:block bg-[#66899D] text-gray-700 px-8 py-12 flex items-center justify-center ">
                </div>


            </div>
        </>
    )
}