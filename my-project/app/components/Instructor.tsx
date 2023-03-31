import Image from 'next/image'
import React from 'react'
import zia from '../../public/zi.png'
import adil from '../../public/ad.png'
import hira from '../../public/h.png'
import daniyal from '../../public/d.png'
import zeesh from '../../public/z.png'

function Instructor() {
  return (
    
    <section>
        <div className='container py20'>
            <div className='text-center m-auto mb-20 md:w-1/2'>
                <div className='font-bold text-amber-500 mb-4'>Instructor</div>
                <div className='text-3xl md:text-5xl font-bold leading-snug mb-4'>The Best Faculty Members of PIAIC</div>
            </div>
            <div className='mt-8'>
                <div className='flex items-center justify-center flex-wrap'>
                    <Image className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' src={zia} alt='/' width={500} height={300}/>
                    <Image className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' src={adil} alt='/' width={500} height={300}/>
                    <Image className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' src={hira} alt='/' width={500} height={300}/>
                    <Image className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' src={daniyal} alt='/' width={500} height={300}/>
                    <Image className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' src={zeesh} alt='/' width={500} height={300}/>
                </div>
                <div className='grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]'>
                    <div className=''>
                        <div className='md:text-2xl mb-6'>{`Sir Zia Khan is my favourite teacher because he motivates and make me able to create these type of website's design`}</div>
                        <div className='font-bold text-amber-500  mb-1'>Muhammad Hammad</div>
                        <div>AI Batch-36 / Web3.0 & Metaverse Batch-38 Karachi (Student)</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Instructor