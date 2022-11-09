import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

const ContactMe = (props: Props) => {
    const { register, handleSubmit,} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:zlugokx@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <div className='h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
         <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-20'
        >
        контакты</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-2xl sm:text-4xl font-semibold  text-center'>
            <span className='underline decoration-[#f7ab0a] '>Свяжитесь со мной</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5'>
                    <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-1xl sm:text-2xl'>+7 (915) 706 13 83</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-1xl sm:text-2xl'>zlugokx@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse'/>
                    <p className='text-1xl sm:text-2xl'>Россия, г. Тверь</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 md:w-fit mx-auto max-w-xs sm:max-w-none">
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Имя' type="text" className='contactInput w-1/2'/>
                    <input {...register('email')} placeholder='Email' type="email" className='contactInput  w-1/2'/>
                </div>
                <input {...register('subject')} placeholder='Тема' type="text" className='contactInput'/>
                <textarea {...register('message')} placeholder='Сообщение' className='contactInput'></textarea>
                <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Отправить</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe