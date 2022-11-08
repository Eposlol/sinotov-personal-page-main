import React from 'react'
import  Link  from 'next/link'
import { Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Oleg Sinotov",
            "Frontend-developer",
            "<searchForNew />"],
        loop: true,
        delaySpeed: 2000,
    });

    const links = [
        {
            id: 1,
            link:"#about",
            name: 'About'
        },
        {
            id: 2,
            link:"#experience",
            name: 'Experience'
        },
        {
            id: 3,
            link:"#skills",
            name: 'Skills'
        },
        {
            id: 4,
            link:"#projects",
            name: 'Projects'
        },
    ]
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/150e5ead-016f-4d07-ab73-a1bcaf4ed4c6-profile_image-300x300.png" alt=""/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
         <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a'/>  
        </h1>
        <div className='pt-5'>
            {
                links.map(({id, link, name}) => (
                    <Link key={id} href={link}>
                <button className='heroButton'>{name}</button>
                    </Link>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Hero