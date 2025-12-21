import React, { useState } from 'react';
import { Link } from 'react-router';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // ekhane login logic add korte paren
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <>
     

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-4">
        {/* Glass Card */}
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800">🔐 Login</h1>
            <p className="text-gray-600 mt-2">Please enter your credentials to login</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="📧 Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="password"
              placeholder="🔒 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-pink-400
              hover:opacity-90 text-white py-3 rounded-xl font-semibold transition"
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <div className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link to="/Registration" className="text-indigo-600 font-medium hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
