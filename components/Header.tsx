import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
import  Link  from 'next/link'
type Props = {}

const Header = (props: Props) => {
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
            {/* Social Icons */}
         <SocialIcon url="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D1%81%D0%B8%D0%BD%D0%BE%D1%82%D0%BE%D0%B2-4a1299226/" fgColor='gray'
         bgColor='transparent'/>
          <SocialIcon url="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D1%81%D0%B8%D0%BD%D0%BE%D1%82%D0%BE%D0%B2-4a1299226/" fgColor='gray'
         bgColor='transparent'/>
          <SocialIcon url="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%B3-%D1%81%D0%B8%D0%BD%D0%BE%D1%82%D0%BE%D0%B2-4a1299226/" fgColor='gray'
         bgColor='transparent'/>
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
            className='flex flex-row items-center to-gray-300 cursor-pointer'>
                <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </motion.div>
         </Link>
    </header>
  )
}

export default Header