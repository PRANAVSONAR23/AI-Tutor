// Login.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye,EyeOff } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Login = () => {
  const [rootError, setRootError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange', // Enable real-time validation
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setRootError(''); // Reset root error before submitting
    try {
      const response = await axios.post('/api/login', data);

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token);
        // Redirect to dashboard or home page
      } else {
        setRootError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        setRootError(error.response.data.message || 'Login failed');
      } else {
        setRootError('Network error');
      }
    }
  };

  return (
    <div className=' flex items-center  h-screen w-screen bg-white'>
      <div className='relative h-5/6 w-2/5 overflow-hidden rounded-lg ml-[5vh]'>
        <img
          src="/loginImage.svg"
          alt="logo"
          className='w-full h-full object-cover object-top block'
        />
        <div
          className='absolute bottom-0 left-0 right-0 h-1/2'
          style={{
            background: 'linear-gradient(180deg, rgba(105, 105, 105, 0) 0%, rgba(30, 30, 30, 0.6) 60.36%, rgba(30, 30, 30, 0.8) 80%, rgb(0, 0, 0) 100%)'
          }}
        ></div>
        <div className='absolute top-96  z-10 text-white font-stolzl left-28  flex flex-col gap-4'>
          <h1 className='flex justify-center items-center text-5xl'>Welcome.</h1>
          <h2 className='flex justify-center items-center text-lg text-[#F0F0F0] font-light'>Sign in to get started on your training journey</h2>
        </div>
      </div>

      {/* form */}
      <div className='flex  w-7/12 justify-center'>
      <div className="   flex flex-col p-4 gap-4">
        <h2 className="text-4xl font-medium text-center mb-6 font-stolzl ">Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4">
          <div className='flex flex-col justify-center items-start gap-2'>
            <label className="block text-[#1C1C1C] font-stolzl text-sm">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-[22vw] px-3 py-2 border-2 rounded-lg border-[#A5A5A5]"
            />
            {errors.email && <span className="text-red-500 font-stolzl font-medium text-sm">{errors.email.message}</span>}
          </div>

          <div className='flex flex-col justify-center items-start gap-2 mt-2'>
      <label className="block text-[#1C1C1C] font-stolzl text-sm">Password</label>
      <div className="relative w-[22vw]">
        <input
          type={showPassword ? "text" : "password"}
          {...register('password')}
          className="w-full px-3 py-2 border-2 rounded-lg border-[#A5A5A5]"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <Eye className='text-[#000000]'/> :<EyeOff className='text-[#000000]'/>}
        </button>
      </div>
      {errors.password && (
        <span className="text-red-500 font-stolzl font-medium text-sm">
          {errors.password.message}
        </span>
      )}
    </div>

          {rootError && <div className="text-red-500 text-center font-stolzl text-sm  ">{rootError}</div>}

          <Button className='bg-[#387975] font-stolzl text-white text-base mt-[5vh] h-9 rounded-xl'>
            Login
          </Button>
        </form>
        <div className='flex justify-center items-center gap-1 mt-2' >
          <h1 className='font-stolzl text-base '>Don’t have an account? </h1>
          <Link className='text-[#387975] font-stolzl text-base  underline ' to='/signup'>Sign up</Link>
        </div>
        <div className=' flex justify-center items-center'>
          <Link className='text-[#387975] font-stolzl text-base  underline text-center ' to='/forgotpassword'>Forgot Password?</Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
