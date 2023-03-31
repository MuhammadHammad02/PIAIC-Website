import Image from 'next/image'
import React from 'react'
import president from '../../public/p.png'
import Link from 'next/link'

export default function About() {
  return (
    <div className=''>
        
        <div className='container py-20 relative '>
        <div className='w-80 h-80 bg-amber-400 absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full'></div>
        <div className='w-80 h-80 bg-cyan-600 absolute bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full'></div>
            <div className='flex flex-col items-center justify-between md:flex-row'>
                <div className='mb-12 md:w-1/2'>
                    <Image src={president} alt='/' width={300} height={300}/>
                </div>
                <div className='text-center md:text-left md:w-1/2 md:ml-20'>
                    <div className='font-bold text-amber-500 mb-4'>About</div>
                    <div className='text-3xl md:text-5xl font-bold leading-snug mb-4'>Dr. Arif Alvi</div>
                    <div className=' leading-relaxed mb-10'>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</div>
                    <div className=' leading-relaxed mb-10'>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’ </div>
                    <Link href='https://www.piaic.org/about'><button className=' bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Read More..</button></Link>
                    </div>x
                </div>
                

        </div>
    </div>
  )
}
