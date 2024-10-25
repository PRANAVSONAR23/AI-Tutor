import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Menu, ChevronLeftCircleIcon } from 'lucide-react';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const otpSchema = z.object({
    email: z.string().email('Invalid email address'),
});

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

const Login = () => {
    const navigate = useNavigate();
    const [rootErrorLogin, setRootErrorLogin] = useState('');
    const [rootErrorOtp, setRootErrorOtp] = useState('');
    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'onChange', // Enable real-time validation
    });

    const { register: registerOtp, handleSubmit: handleSubmitOtp, formState: { errors: errorsOtp } } = useForm({
        resolver: zodResolver(otpSchema),
        mode: 'onChange', // Enable real-time validation
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmitLogin = async (data) => {
        setRootErrorLogin(''); // Reset root error before submitting
        try {
            const response = await axios.post('/api/login', data);
            if (response.status === 200) {
                console.log('Login successful:', response.data);
                localStorage.setItem('token', response.data.token);
                // Redirect to dashboard or home page
            } else {
                setRootErrorLogin(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            if (error.response) {
                setRootErrorLogin(error.response.data.message || 'Login failed');
            } else {
                setRootErrorLogin('Network error');
            }
        }
    };

    const onSubmitOtp = async (data) => {
        setRootErrorOtp(''); // Reset root error before submitting
        try {
            const response = await axios.post('/api/forgot-password', data);
            if (response.status === 200) {
                console.log('Forgot password request successful:', response.data);
                // Handle success response, such as showing a success message or redirecting
            } else {
                setRootErrorOtp(response.data.message || 'Request failed');
            }
        } catch (error) {
            console.error('Error during forgot password request:', error);
            setRootErrorOtp('Network error');
        }
        navigate('/passwordreset');
    };
    const handleback=()=>{
        navigate(-1)
    }
   
    return (
        <div className='bg-[#387975] w-screen h-screen relative'>
            <div className='text-white px-[5vw] py-[6vh]'>
                <Menu />
            </div>
            <div className='bg-[#FFFFFF] rounded-t-3xl mt-[3vh] p-3 bottom-0 absolute w-screen'>
                <div className='mx-auto w-full max-w-[85vw] mb-[4vh]'>
                    <div className='mt-[2vh] ' onClick={handleback}>
                        <ChevronLeftCircleIcon />
                    </div>
                    <div>
                        <h1 className='font-stolzl text-3xl font-semibold mt-[2vh]'>Log in</h1>
                        <h3 className='font-stolzl text-base mt-4'>New to Dr.Mate? <Link className='text-[#387975] font-stolzl text-base  underline text-center' to='/signup'>Create account</Link></h3>
                    </div>

                    <div className='mt-[6vh]'>
                        <Tabs defaultValue="password" className="">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="password" className='w-[95%] rounded-xl font-stolzl text-[#222222] text-base font-base'>Password</TabsTrigger>
                                <TabsTrigger value="otp" className='w-[95%] rounded-xl font-stolzl text-[#222222] text-base font-base'>OTP</TabsTrigger>
                            </TabsList>
                            <TabsContent value="password" className='mt-[6vh]'>
                                <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="flex flex-col gap-4">
                                    <div className='flex flex-col justify-center items-start gap-2 relative'>
                                        <label className="block text-[#1C1C1C] font-stolzl text-sm absolute left-6 -top-2 bg-[#FFFFFF] px-[3px]">Email</label>
                                        <input
                                            type="email"
                                            {...registerLogin('email')}
                                            className="w-full px-3 py-4 border rounded-lg border-[#A5A5A5] font-stolzl text-sm"
                                        />
                                        {errorsLogin.email && <span className="text-red-500 font-stolzl font-medium text-sm">{errorsLogin.email.message}</span>}
                                    </div>

                                    <div className='flex flex-col justify-center items-start gap-2 mt-2 relative'>
                                        <label className="block text-[#1C1C1C] font-stolzl text-sm absolute left-6 -top-2 bg-[#FFFFFF] px-[3px] z-10">Password</label>
                                        <div className="relative w-full">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                {...registerLogin('password')}
                                                className="w-full px-3 py-4 border rounded-lg border-[#A5A5A5]"
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                            >
                                                {showPassword ? <Eye className='text-[#000000]' /> : <EyeOff className='text-[#000000]' />}
                                            </button>
                                        </div>
                                        {errorsLogin.password && (
                                            <span className="text-red-500 font-stolzl font-medium text-sm">
                                                {errorsLogin.password.message}
                                            </span>
                                        )}
                                    </div>

                                    {rootErrorLogin && <div className="text-red-500 text-center font-stolzl font-medium text-sm">{rootErrorLogin}</div>}
                                    <div className='flex justify-start items-center'>
                                        <Link className='text-[#387975] font-stolzl text-sm underline text-center' to='/forgotpassword'>Forgot Password?</Link>
                                    </div>

                                    <Button className='bg-[#387975] font-stolzl text-white text-sm mt-[1vh] h-9 rounded-xl py-6'>
                                        Log In
                                    </Button>
                                </form>
                            </TabsContent>
                            <TabsContent value="otp">
                                <form onSubmit={handleSubmitOtp(onSubmitOtp)} className="flex flex-col gap-6 item-center mt-[3vh]">
                                    <div className='flex flex-col justify-center items-start gap-2 relative'>
                                        <label className="block text-[#1C1C1C] font-stolzl text-sm absolute left-6 -top-2 bg-[#FFFFFF] px-[3px]">Email</label>
                                        <input
                                            type="email"
                                            {...registerOtp('email')}
                                            className="w-full px-3 py-4 border rounded-lg border-[#A5A5A5]"
                                        />
                                        {errorsOtp.email && <span className="text-red-500 font-stolzl font-medium text-sm">{errorsOtp.email.message}</span>}
                                    </div>

                                    {rootErrorOtp && <div className="text-red-500 text-center font-stolzl text-sm">{rootErrorOtp}</div>}

                                    <div className="flex justify-center">
                                        <Button className='w-full bg-[#387975] text-white h-10 rounded-xl font-stolzl text-sm  mr-2 py-6'>
                                            Get OTP
                                        </Button>
                                    </div>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className='font-stolzl text-center mt-[2vh] mb-[2vh]'>
                        <h2>OR</h2>
                    </div>
                    <div className='font-stolzl'>
                        <Button className='bg-white text-black rounded-xl border border-black w-full py-6'>Sign in with google</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
