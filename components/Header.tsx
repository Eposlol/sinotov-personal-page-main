import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
import  Link  from 'next/link'
import { Social } from '../typings';
import { HiOutlineMail} from 'react-icons/hi'
type Props = {
    socials: Social[]
}

const Header = ({socials}: Props) => {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: - 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {socials.map((social) => (
                     <SocialIcon 
                     key={social._id}
                     url={social.url} 
                     fgColor='gray'
                     bgColor='transparent'/>
            ))}
         </motion.div>
         <Link href='#contactme'>
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer justify-center py-2'>
                <HiOutlineMail className='cursor-pointer text-gray-500 pr-2 h-auto w-10'
             />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Будь на связи</p>
            </motion.div>
         </Link>
    </header>
  )
}

export default Header