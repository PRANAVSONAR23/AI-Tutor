import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from 'react-router-dom';
import { State, City } from 'country-state-city';
import { ChevronLeftCircleIcon } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';

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
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(signupSchema),
        mode: 'onChange', // Enable real-time validation
    });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const navigate = useNavigate();
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
    const handleback = () => {
        navigate(-1)
    }

    return (


        <div className='max-w-[90%] mx-auto w-full  '>
            <div className="flex flex-col  gap-3 px-2">
                <div className='mt-[5vh] ' onClick={handleback}>
                    <ChevronLeftCircleIcon />
                </div>
                <h2 className="text-3xl font-medium   font-stolzl ">Create your account</h2>
                <div className='flex justify-start items-center gap-1  '>
                    <h1 className='text-base font-stolzl '>Already have an account?</h1>
                    <Link className='text-[#387975] text-base underline font-stolzl' to='/login'>Log in</Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col font-stolzl gap-6 mt-[5vh]">
                    {/* Existing form fields */}
                    <div className='flex justify-between items-center    '>
                        <div className='flex flex-col  relative w-[48%]'>
                            <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1">First name</label>
                            <input
                                type="text"
                                {...register('firstName')}
                                className=" px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6]"
                            />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </div>
                        <div className='flex flex-col relative w-[48%]'>
                            <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1 ">Last name</label>
                            <input
                                type="text"
                                {...register('lastName')}
                                className=" px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6]"
                            />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col  relative'>
                        <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1">Email</label>

                        <input
                            type="email"
                            {...register('email')}
                            className=" px-3 py-3 border rounded-lg border-[#A5A5A5] mt-1 bg-[#FAF8F6]"
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col relative'>
                        <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1">Phone no.</label>
                        <input
                            type="text"
                            {...register('phoneNumber')}
                            className="w-full px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6]"
                            placeholder=""
                        />

                        {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}
                    </div>
                    <div className='flex flex-col relative'>
                        <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1">State</label>
                        <select
                            {...register('state')}
                            className=" px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6] "
                            value={selectedState}
                            onChange={(e) => {
                                setSelectedState(e.target.value);
                                setValue('state', e.target.value);
                            }}
                        >
                            <option value="">Select a state</option>
                            {states.map(({ isoCode, name }) => (
                                <option key={isoCode} value={isoCode} >{name}</option>
                            ))}
                        </select>
                        {errors.state && <span className="text-red-500 text-xs">{errors.state.message}</span>}
                    </div>
                    <div className='flex flex-col relative'>
                        <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1 z-10 ">City</label>
                        <select
                            {...register('city')}
                            className=" px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6]"
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
                    <div className='flex flex-col relative'>
                        <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1 z-10">Create password</label>
                        <div className="relative ">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register('password')}
                                className="w-full px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6]"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <Eye className='text-[#515861]' /> : <EyeOff className='text-[#515861]' />}
                            </button>
                        </div>
                        {errors.password && (
                            <span className="text-red-500 font-stolzl font-medium text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col relative'>
                        <label className="block text-xs absolute -top-[7px] left-5 bg-white px-1 z-10">Re-enter password</label>
                        <div className="relative ">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register('password')}
                                className="w-full px-3 py-3 border rounded-lg border-[#A5A5A5] bg-[#FAF8F6]"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <Eye className='text-[#515861]' /> : <EyeOff className='text-[#515861]' />}
                            </button>
                        </div>
                        {errors.password && (
                            <span className="text-red-500 font-stolzl font-medium text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    {rootError && <div className="text-red-500 text-center font-stolzl text-sm">{rootError}</div>}
                    <div className="col-span-2  flex justify-center mt-[1vh] ">
                        <Button className='w-full bg-[#387975] text-white h-10 rounded-xl py-6'>
                            Create account
                        </Button>
                    </div>
                </form>

            </div>
        </div>




    );
};

export default Signup;
