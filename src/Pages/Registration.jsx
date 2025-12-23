
import { Link } from 'react-router';
import CustomInput from '../Components/ui/CustomInput';
import { useForm } from "react-hook-form"


const Registration = () => {
 const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

 



  return (
    <>


      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-4">
        {/* Glass Card */}
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800">📝 Register</h1>
            <p className="text-gray-600 mt-2">Create your account to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <CustomInput
             {...register("fullName")} 

              type="text"
              placeholder="👤 Name"
       
              // onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
           
            />

            <CustomInput
             {...register("email")} 
              type="email"
              placeholder="📧 Email"
              
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
             
            />

            <CustomInput
             {...register("password")} 

              type="password"
              placeholder="🔒 Password"
             
              // onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
             
            />

            {/* <CustomInput
              type="password"
              placeholder="🔒 Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            /> */}

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-pink-400
              hover:opacity-90 text-white py-3 rounded-xl font-semibold transition"
            >
              Register
            </button>
          </form>

          {/* Extra Links */}
          <div className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  };


export default Registration;
