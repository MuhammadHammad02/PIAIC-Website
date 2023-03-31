import React from 'react'
import Link from 'next/link'
import pan from '../../public/pana.png'
import say from '../../public/sayl.png'
import Image from 'next/image'

function Partnerstra() {
  return (
    <section className='bg-black py-20'>
      <div className='container h-[80vh grid place-items-center]'>
        <div className='text-center md:w-2/3 m-auto'>
          <h1 className='text-3xl md:text-5xl font-bold leading-snug mb-4'> Strategic Partner</h1>
          <div className='flex flex-col md:flex-row items-center justify-center gap-5 pt-10'>
            
              <Image className='bg-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70' src={pan} alt='/' width={200} height={200}/>
              <Image className='bg-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70' src={say} alt='/' width={200} height={200}/>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Partnerstra