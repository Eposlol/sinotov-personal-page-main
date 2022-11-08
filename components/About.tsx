import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
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
    src="https://static-cdn.jtvnw.net/jtv_user_pictures/150e5ead-016f-4d07-ab73-a1bcaf4ed4c6-profile_image-300x300.png"
    />
    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4x; font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]/50'>little</span> background</h4>
        <p className='text-sm'>
        Hi, my name is Oleg and I am a Full-Stack programmer with experience in object-oriented analysis and design, overseeing all aspects of the software development life cycle, from analysis and design to implementation and maintenance, as well as migration.
        My commercial experience is about two years in IT and IT implementation and using my knowledge in web development and troubleshooting. I am a team player, open to everything new and great at handling any difficulties.
        </p>
    </div>
    </motion.div>
  )
}

export default About