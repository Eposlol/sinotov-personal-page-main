import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-1xl'>Обо мне</h3>
    <motion.img
    initial={{
        x: -200,
        opacity: 0
    }}
    whileInView={{
    x: 0,
    opacity: 1
    }}
    transition={{
    duration: 1.2,
    }}
    viewport={{
    once: true
    }}
    className='-mb-20 md:mmb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
    src={urlFor(pageInfo?.profilePic).url()}
    />
    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4x; font-semibold'>Здесь я расскажу <span className='underline decoration-[#f7ab0a]/50'>немного</span> о себе</h4>
        <p className='text-sm'>
       {pageInfo?.backgroundInformation}
        </p>
    </div>
    </motion.div>
  )
}

export default About