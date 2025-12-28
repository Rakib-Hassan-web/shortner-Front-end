
import { Link, useNavigate } from 'react-router';
import CustomInput from '../Components/ui/CustomInput';
import { useForm } from "react-hook-form"
import { AuthServices } from '../api';
import { toast } from 'react-toastify';


const Registration = () => {
  const navigate = useNavigate();
 const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()


const onSubmit = async (data) => {
  const payload = {
    fullName: data.fullName,
    email: data.email,
    password: data.password,
  };

  try {
    const res = await AuthServices.registration(payload);
    console.log(res);

    toast.success("🎉 Registration successful!", {
      position: "top-right",
      autoClose: 2000, 
    });

    setTimeout(() => {
      navigate('/login');
    }, 3000);

  } catch (error) {
    console.log(error.response.data.messege);
       if (error.response.data.messege === 'User Already exist') {
      setError('email',{
        message: 'User Already exist'
      })}
  }
};


 



  return (
    <>


      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-4">
        {/* -------------------Glass ---------Card */}
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
          
          {/* ----------------Header ---------------------*/}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800">📝 Register</h1>
            <p className="text-gray-600 mt-2">Create your account to get started</p>
          </div>

          {/* ---------------------Form--------------------- */} 
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <CustomInput
             {...register("fullName", { required: "FullName is required" })} 

              type="text"
              placeholder="👤 Name"
       
              
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              error={errors?.fullName?.message}
           
            />

            <CustomInput
             {...register("email", {required: "Email is required"})} 
              type="email"
              placeholder="📧 Email"
              
              
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              error={errors?.email?.message}
             
            />

            <CustomInput
             {...register("password", {required: "Password is required"})} 

              type="password"
              placeholder="🔒 Password"
           
              className="w-full border border-gray-300 rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-purple-500"
              error={errors?.password?.message}
             
            />
          

          <p className=' text-red-500 font-bold text-xl'> {errors?.response?.data?.messege}</p>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-pink-400
              hover:opacity-90 text-white py-3 rounded-xl font-semibold transition"
            >
              Register
            </button>
          </form>


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
