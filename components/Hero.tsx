import React from 'react'
import  Link  from 'next/link'
import { Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [
           `Привет, я ${pageInfo?.name}`,
            "Frontend-developer",
            "<searchForNew />"],
        loop: true,
        delaySpeed: 2000,
    });

    const links = [
        {
            id: 1,
            link:"#about",
            name: 'Обо мне'
        },
        {
            id: 2,
            link:"#experience",
            name: 'Опыт работы'
        },
        {
            id: 3,
            link:"#skills",
            name: 'Навыки'
        },
        {
            id: 4,
            link:"#projects",
            name: 'Проекты'
        },
    ]
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo.heroImage).url()} alt=""/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo.role}</h2>
        <h1 className='text-xl md:text-5xl lg:text-6xl font-semibold px-10'>
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