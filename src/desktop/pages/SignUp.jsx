import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom';
import { State, City } from 'country-state-city';

// Updated validation schema to include password fields
const signupSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number is too long'),
    state: z.string().min(1, 'State is required'),
    city: z.string().min(1, 'City is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Confirm Password must be at least 8 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

const Signup = () => {
    const [rootError, setRootError] = useState('');
    const { register, handleSubmit, formState: { errors },setValue } = useForm({
        resolver: zodResolver(signupSchema),
        mode: 'onChange', // Enable real-time validation
    });

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        // Set the states when the component mounts (India's iso code is "IN")
        const getStates = async () => {
            const stateList = State.getStatesOfCountry("IN");
            setStates(stateList);
        };
        getStates();
    }, []);

    useEffect(() => {
        // Update cities based on selected state
        const getCities = async () => {
            if (selectedState) {
                const cityList = City.getCitiesOfState("IN", selectedState);
                setCities(cityList);
                setSelectedCity(''); // Reset city selection
                setValue('city', ''); // Clear the form's city value
            } else {
                setCities([]);
            }
        };
        getCities();
    }, [selectedState, setValue]);

    const onSubmit = async (data) => {
        setRootError(''); // Reset root error before submitting
        try {
            const response = await axios.post('/api/signup', data);

            if (response.status === 200) {
                console.log('Signup successful:', response.data);
                // Redirect to login page or auto-login
            } else {
                setRootError(response.data.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            if (error.response) {
                setRootError(error.response.data.message || 'Signup failed');
            } else {
                setRootError('Network error');
            }
        }
    };

    return (
        <div className='flex items-center h-screen w-screen bg-white '>
            {/* Form Section */}
            <div className='flex w-7/12 justify-center  mt-[3vh] scale-95'>
                <div className="flex flex-col  gap-4 ">
                    <h2 className="text-4xl font-medium text-center mb-6 font-stolzl">Create an account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-8 gap-y-6 font-stolzl">
                        {/* Existing form fields */}
                        <div className='flex flex-col  w-[18vw] '>
                            <label className="block text-sm ">First name</label>
                            <input
                                type="text"
                                {...register('firstName')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5]"
                            />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </div>
                        <div className='flex flex-col w-[18vw] '>
                            <label className="block text-sm ">Last name</label>
                            <input
                                type="text"
                                {...register('lastName')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5]"
                            />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </div>
                        <div className='flex flex-col w-[18vw]'>
                            <label className="block text-sm ">Email</label>
                            <span className='text-[#515861] text-xs'>e.g. name@gmail.com</span>
                            <input
                                type="email"
                                {...register('email')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5] mt-1"
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>
                        <div className='flex flex-col w-[18vw]'>
                            <label className="block text-sm">Phone number</label>
                            <span className='text-[#515861] text-xs font-light'>10 digit number</span>
                            <div className="flex items-center mt-1 w-[18vw]">
                                <span className="px-3 py-3 border rounded-l-lg border-[#A5A5A5] border-r-0 text-gray-500 text-sm h-full">+91</span>
                                <input
                                    type="text"
                                    {...register('phoneNumber')}
                                    className="w-full px-3 py-3 border rounded-r-lg border-[#A5A5A5]"
                                    placeholder=""
                                />
                            </div>
                            {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}
                        </div>
                        <div className='flex flex-col w-[18vw]'>
                            <label className="block text-sm">State</label>
                            <select
                                {...register('state')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5]"
                                value={selectedState}
                                onChange={(e) => {
                                    setSelectedState(e.target.value);
                                    setValue('state', e.target.value);
                                }}
                            >
                                <option value="">Select a state</option>
                                {states.map(({ isoCode, name }) => (
                                    <option key={isoCode} value={isoCode}>{name}</option>
                                ))}
                            </select>
                            {errors.state && <span className="text-red-500 text-xs">{errors.state.message}</span>}
                        </div>
                        <div className='flex flex-col w-[18vw]'>
                            <label className="block text-sm">City</label>
                            <select
                                {...register('city')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5]"
                                value={selectedCity}
                                onChange={(e) => {
                                    setSelectedCity(e.target.value);
                                    setValue('city', e.target.value);
                                }}
                                disabled={!selectedState}
                            >
                                <option value="">Select a city</option>
                                {cities.map(({ name }) => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                            {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                        </div>

                        {/* Password Fields */}
                        <div className='flex flex-col w-[18vw]'>
                            <label className="block text-sm ">Password</label>
                            <input
                                type="password"
                                {...register('password')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5] "
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>
                        <div className='flex flex-col w-[18vw]'>
                            <label className="block text-sm ">Confirm Password</label>
                            <input
                                type="password"
                                {...register('confirmPassword')}
                                className="w-[18vw] px-3 py-3 border rounded-lg border-[#A5A5A5] "
                            />
                            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}
                        </div>

                        {rootError && <div className="col-span-2 text-red-500 text-center">{rootError}</div>}
                        <div className="col-span-2  flex justify-center mt-[3vh]">
                            <Button className='w-3/5 bg-[#387975] text-white h-10 rounded-xl'>
                                Send OTP
                            </Button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center gap-1 '>
                        <h1 className='text-base font-stolzl '>Already have an account?</h1>
                        <Link className='text-[#387975] text-base underline font-stolzl' to='/login'>Sign in</Link>
                    </div>
                </div>
            </div>

            {/* Image Section */}
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
                <div className='absolute top-96 z-10 text-white left-28 flex flex-col gap-4 font-stolzl'>
                    <h1 className='flex justify-center items-center text-5xl'>Welcome.</h1>
                    <div>
                        <h2 className='flex justify-center items-center text-lg text-[#F0F0F0] font-light leading-10'>Create an account to get started on your </h2>
                        <h2 className='flex justify-center items-center text-lg text-[#F0F0F0] font-light'>training journey</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
