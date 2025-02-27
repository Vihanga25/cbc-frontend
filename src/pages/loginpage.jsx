import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post("http://localhost:5000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }

        toast.success("Login success");
        localStorage.setItem("token", res.data.token);

        if (res.data.user.type === "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        toast.error("Login failed. Please try again.");
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
          <img src="/images.png" alt="Logo" className="rounded-full w-20 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700">Welcome Back</h2>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white mt-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );
}