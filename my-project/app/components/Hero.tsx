import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../../public/main.png'

const Hero = () => {
  return (
    <main className='relative'>
      <section className='relative'>
        <div className='w-80 h-80 bg-amber-400 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full'></div>
        <div className='w-80 h-80 bg-cyan-600 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full'></div>
        <div className='container py-20'>
          <div className='flex flex-col items-center z-20 md:flex-row'>
            <div className='text-center mb-12 md:text-left md:w-1/2 md:pr-10'>
              <div className='text-3xl md:text-5xl font-bold leading-snug mb-2'>Presidential Initiative</div>
              <div className='text-3xl md:text-4xl leading-snug mb-10'>for Artificial Intelligence & Computing (PIAIC)</div>
              <div className=' leading-relaxed mb-10'>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</div> 
              <Link href='/'><button className='bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Apply Now</button></Link>
            </div>
            <div className='md:w-1/2'>
              <Image src={pic} alt="/" width={500} height={500}/>
            </div>
          </div>

        </div>
      </section>
    </main>
    
  )
}

export default Hero