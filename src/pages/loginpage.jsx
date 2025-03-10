import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
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

        if (res.data.user.type.toLowerCase() == "admin") {
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
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="bg-secondary p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
          <img src="/images.png" alt="Logo" className="rounded-full w-20 mb-4" />
          <h2 className="text-2xl font-bold text-primary">Login </h2>
        </div>

        <div className="mt-6">
          <label className="block text-primary">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-accent outline-none bg-primary text-secondary"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-4">
          <label className="block text-primary">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-accent outline-none bg-primary text-secondary"
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={login}
          className="w-full bg-accent text-white mt-6 py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-primary mt-4">
          Don't have an account? <a href="/register" className="text-accent">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
