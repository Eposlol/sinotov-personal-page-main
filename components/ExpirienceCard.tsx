import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

const ExpirienceCard = ({experience}: Props) => {

 

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[320px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center 
    bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scroll-m-0  p-5 md:p-10  z-10'
    >
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration:  1.2
        }}
        whileInView={{
            opacity:1, y:0
        }}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()} alt=""/>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
            {experience.jobTitle}
            </h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
             {experience.technologies.map(technology => (
                <img 
                key={technology._id}
                className="h-5 w-5  md:h-10 md:w-10 rounded-full"
                src={urlFor(technology?.image).url()} alt=""
                />
             ))}
            </div>
            <p className='uppercase py-5 to-gray-300'> 
                {new Date(experience.dateStarted).toLocaleString("ru").split(',').slice(0,1)} - {" "} {
                experience.isCurrentWorkingHere ? "По настоящее время" : new Date(experience.dateEnded).toLocaleString("ru").split(',').slice(0,1) }
            </p>
            <ul className='list-disc list-inside space-y-2 md:space-y-4 ml-5 text-sm xl:text-lg max-h-35 h-full p-r-5 max-w-40 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>
              { experience.points.map((point, i )=> (
                <li 
                key={i}
                >{point}</li>
              ))}    
            </ul>
        </div>
    </article>
  )
}

export default ExpirienceCard