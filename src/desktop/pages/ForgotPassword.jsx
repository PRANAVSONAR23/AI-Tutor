import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

// Zod validation schema for the Forgot Password form
const forgotPasswordSchema = z.object({
    emailOrUsername: z.string().min(1, 'Email/Username is required'),
});

const ForgotPassword = () => {
    const navigate=useNavigate();
    const [rootError, setRootError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        mode: 'onChange', // Enable real-time validation
    });

    const onSubmit = async (data) => {
        setRootError(''); // Reset root error before submitting
        try {
            const response = await axios.post('/api/forgot-password', data);
            if (response.status === 200) {
                console.log('Forgot password request successful:', response.data);
                // Handle success response, such as showing a success message or redirecting
            } else {
                setRootError(response.data.message || 'Request failed');
            }
        } catch (error) {
            console.error('Error during forgot password request:', error);
            setRootError('Network error');
        }
        navigate('/passwordreset');
    };

    return (
        <div className='flex items-center h-screen w-screen bg-white'>
            <div className='flex w-7/12 justify-center  mb-[12vh]'>
                <div className="flex flex-col gap-4 ">
                    <h2 className="text-4xl font-medium text-center  font-stolzl leading-10">Forgot Password?</h2>
                    <h3 className='text-sm  text-center font-stolzl'>No worries, we’ll send you reset instructions</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 item-center mt-[3vh]">
                        <div className='flex flex-col w-[20vw] font-stolzl gap-3 px-3'>
                            <label className="block text-sm ">Email/Username</label>
                            <input
                                type="text"
                                {...register('emailOrUsername')}
                                className="w-[20vw] px-3 py-3 border rounded-lg border-[#A5A5A5]"
                                placeholder=''
                            />
                            {errors.emailOrUsername && <span className="text-red-500 text-xs">{errors.emailOrUsername.message}</span>}
                        </div>

                        {rootError && <div className="text-red-500 text-center font-stolzl text-sm">{rootError}</div>}

                        <div className="flex justify-center mt-[2vh] ">
                            <Button className='w-[20vw] bg-[#387975] text-white h-10 rounded-xl font-stolzl text-sm  mr-2'>
                                Reset password
                            </Button>
                        </div>
                    </form>
                    <div className='font-stolzl  text-center mr-4 text-[#387975] text-sm font-semibold'>
                        <Link className='underline' to='/login'>Back to login</Link>
                    </div>
                </div>
            </div>
            <div className='relative h-5/6 w-2/5 overflow-hidden rounded-lg mr-[5vh]'>
                <img
                    src="/signupImage.jpg"
                    alt="login illustration"
                    className='w-full h-full object-cover object-top block'
                />
                <div
                    className='absolute bottom-0 left-0 right-0 h-1/2'
                    style={{
                        background: 'linear-gradient(180deg, rgba(105, 105, 105, 0) 0%, rgba(30, 30, 30, 0.6) 60.36%, rgba(30, 30, 30, 0.8) 80%, rgb(0, 0, 0) 100%)'
                    }}
                ></div>
                {/* <div className='absolute top-96 z-10 text-white left-28 flex flex-col gap-4 font-stolzl'>
                    <h1 className='flex justify-center items-center text-5xl'>Welcome.</h1>
                    <div>
                        <h2 className='flex justify-center items-center text-lg text-[#F0F0F0] font-light leading-10'>Create an account to get started on your </h2>
                        <h2 className='flex justify-center items-center text-lg text-[#F0F0F0] font-light'>training journey</h2>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ForgotPassword;