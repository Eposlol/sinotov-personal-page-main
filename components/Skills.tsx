import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'
type Props = {
  skills: SkillType[];
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen mx-auto items-center justify-center  xl:space-y-0'>
     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl text-1xl '>Навыки</h3>
     <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>≈ уровень</h3>
     <div className='grid gap-4 grid-cols-4 '>
        {
          skills?.slice(0, skills.length/2).map(
            skill => <Skill key={skill._id} skill={skill}/>
          )
        }
          {
          skills?.slice(skills.length/2, skills.length).map(
            skill => <Skill key={skill._id} skill={skill} directionLeft/>
          )
        }
     </div>
    </motion.div>
  )
}

export default Skills