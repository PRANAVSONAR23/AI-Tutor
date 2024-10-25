

import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Link, useNavigate } from 'react-router-dom';

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function PasswordReset() {
   const navigate=useNavigate(); 
  const [rootError, setRootError] = useState('');
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (data) => {
    setRootError(''); // Reset root error before submitting
    try {
      const response = await axios.post("/api/submit-otp", data);

      if (response.status === 200) {
        console.log("OTP submitted successfully");
        // Handle the success case
      } else {
        setRootError(response.data.message || 'Failed to submit OTP');
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
      setRootError('Network error');
    }
    navigate('/createnewpassword');
  };

  return (
    <div className='flex items-center h-screen w-screen bg-white'>
      <div className='flex w-7/12 justify-center mb-[12vh]'>
        <div className="flex flex-col gap-4 scale-110">
          <h2 className="text-4xl font-medium text-center font-stolzl leading-10">Password reset</h2>
          <h3 className='text-sm  text-center font-stolzl'>We sent a code to name@email.com</h3>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 item-center mt-[3vh] ">
            <Form {...form} className='brdr'>
              <FormField
              
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>

                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
              />
            </Form>

            {rootError && <div className="text-red-500 text-center font-stolzl text-sm">{rootError}</div>}

            <div className="flex justify-center mt-[2vh]">
              <Button className='w-[20vw] bg-[#387975] text-white h-10 rounded-xl font-stolzl text-sm mr-2'>
                Continue
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
      </div>
    </div>
  );
}
