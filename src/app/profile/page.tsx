"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("error while logout", error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get(`/api/users/me`);
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="m-4">Profile</h1>
      <hr />
      <h2>
        {data === "nothing" ? (
          "nothing"
        ) : (
          <Link
            className="text-white p-3 bg-black m-4 min-h-screen bg-gradient-to-r from-[black] to-[white] "
            href={`/profile/${data}`}
          >
            {`${data.substring(0, 9)} 😎😁😊`}
          </Link>
        )}
      </h2>
      <button
        className="mt-4 text-white rounded-md border-spacing-3 p-2 border-red-400 bg-gradient-to-r from-yellow-300 to-cyan-400"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="mt-4 text-white rounded-md border-spacing-3 p-2 border-red-400 bg-gradient-to-r from-yellow-300 to-cyan-400"
        onClick={getUserDetails}
      >
        getUserDetails
      </button>
    </div>
  );
}
