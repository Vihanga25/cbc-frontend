import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-500 w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 flex flex-col items-center gap-4">
        <img src="/images.png" className="rounded-full w-20 border-4 border-blue-500 shadow-md" alt="User Avatar" />

        <h1 className="text-xl font-semibold text-gray-800">Login Page</h1>

        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 w-full mt-4"
        >
          Login
        </button>

        <p className="text-sm text-gray-600 mt-2">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
