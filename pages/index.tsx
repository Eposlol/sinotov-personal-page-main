import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import  Link  from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar
    scrollbar-track-gray-400/20  scrollbar-thumb-[#f7ab0a]'>
      <Head>
        <title>Sinotov portfolio</title>
      </Head>
       <Header/>
    <section id="hero" className='snap-start'>
        <Hero/>
    </section>
    <section id="about" className='snap-center'>
        <About/>
    </section>
    <section id="experience" className='snap-center'>
      <Experience/>
    </section>
    <section id="skills" className='snap-start'>
      <Skills/>
    </section>
    <section id="projects" className='snap-start'>
      <Projects/>
    </section>
    <section id="contactme" className='snap-start'>
      <ContactMe/>
    </section>
    <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/150e5ead-016f-4d07-ab73-a1bcaf4ed4c6-profile_image-300x300.png" alt=""/>
        </div>
      </footer>
    </Link>
    </div>
  )
}
