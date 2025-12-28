import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthServices } from "../api";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await AuthServices.login(data);
      console.log(res);


    } catch (error) {
      console.log(error.response.data.message)

      setError("Apierror", {
       message: error.response.data.messege 
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">
            🔐 Login
          </h1>
          <p className="text-gray-600 mt-2">
            Please enter your credentials to login
          </p>
        </div>

        {/* Server Error */}
        {errors.root && (
          <p className="text-red-500 text-sm text-center mb-3">
            {errors.root.message}
          </p>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
            <input
              type="email"
              placeholder="📧 Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="🔒 Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

            {
                errors?.Apierror?.message && (

                  <p className=' text-red-500 font-bold text-md'> {errors?.Apierror?.message}</p>
                )
              }

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
          Don't have an account?{" "}
          <Link
            to="/Registration"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
