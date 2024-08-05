"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  });
  const onSignup = async () => {};
  return (
    <div className="flex min-h-screen flex-col space-y-2 items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-3xl font-bold text-white">Sign up</h1>
      <hr />
      <label htmlFor="username" className="text-white">
        username
      </label>
      <input
        className="bg-white text-black p-2 rounded"
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email" className="text-white">
        email
      </label>
      <input
        className="bg-white text-black p-2 rounded"
        type="email"
        name="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="email" className="text-white">
        password
      </label>
      <input
        className="bg-white text-black p-2 rounded"
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="text-white rounded-md border-spacing-3 p-2 border-red-400 bg-gradient-to-r from-yellow-300 to-cyan-400"
        onClick={onSignup}
      >
        Sign up
      </button>
      <Link
        className="bg-clip-text text-transparent text-bold text-2xl bg-gradient-to-r from-yellow-300 to-cyan-400"
        href="/login"
      >
        Visit Login Page
      </Link>
    </div>
  );
}
