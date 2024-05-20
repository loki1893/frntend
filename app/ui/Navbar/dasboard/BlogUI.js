"use client";
import React from "react";
import Link from "next/link";
import { data } from "@/app/ui/Navbar/dasboard/index";
import { useEffect, useState } from "react";
import axios from "axios";
export default function BlogUI() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/all")
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
        console.log(res.data);
      })

      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div className="px-4 mx-auto max-w-[1199px]"> 
      {blogs.data.map((blog, index) => (
        <div
          key={index}
          className="flex flex-row justify-center  py-5  w-[1199px] h-[283px] font-Roboto"
        >
          <div className="flex ">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-[373px] h-[263px]"
            />
          </div>
          <div className="flex flex-col  ml-[57px]">
            <div className="flex  w-[100%] font-medium text-[42px] pb-[29px]">
              {blog.title}
            </div>
            <div className="flex  w-[100%] ">
              <span className="">
                {/* <img src={blog.user.avtar} alt="User Avatar" /> */}
              </span>
              <span className="font-normal text-[24px]">
                {blog.author.firstname} {blog.author.lastname}
              </span>
              <span className="font-normal text-[18px] ml-[20px] text-[#6C757D]">
                {blog.createdAt}
              </span>
            </div>
            <div className="flex pt-[25px] font-normal text-[20px] ml-20px text-[#6C757D]">
              {blog.description}
            </div>
            <div className="flex flex-row pt-[29px]">
              <div className="flex">
                <Link href="/Posts" className=" text-[14px] font-normal">
                  <span> View Post</span>
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
