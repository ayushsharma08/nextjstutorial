"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);

      console.log("Login response", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login error", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col space-y-2 items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      {loading ? (
        "loading..."
      ) : (
        <h1 className="text-3xl font-bold text-white">Log in</h1>
      )}
      <hr />

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
        onClick={onLogin}
      >
        {buttonDisabled ? "Disabled" : "Login up"}
      </button>
      <Link
        className="bg-clip-text text-transparent text-bold text-2xl bg-gradient-to-r from-yellow-300 to-cyan-400"
        href="/signup"
      >
        Visit Signup Page
      </Link>
    </div>
  );
}
