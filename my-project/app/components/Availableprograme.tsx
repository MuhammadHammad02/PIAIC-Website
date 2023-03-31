import Image from 'next/image'
import React from 'react'
import fea from '../../public/r.png'
import Link from 'next/link'

function Availableprograme () {
  return (
    
      <section className=' bg-black relative'>
        <div className="container py-20"></div>
        <div className='text-center m-auto mb-20 md:w-1/2'>
          <h4 className='font-bold text-amber-500 mb-4'>Available Course</h4>
          <h1 className='text-3xl md:text-5xl font-bold leading-snug mb-2'>Earn While you Learn</h1>
        </div>

        <div className='container grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 lg:px-4'>
          <div className='border-2 border-solid border-amber-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-amber-100 ease-in duration-200 hover:text-black'><div>
            <Image className=' inline-block  py-4 px-6' src={fea} alt='/' width={100} height={50}/></div>
            <h3 className='text-xl font-bold py-4'>Artificial Intelligence</h3>
            <p className=' leading-relaxed pb-4'>A one year AI program designed for absolute beginners.
Getting Pakistan ready for the new ear of computing enabled by the rise of AI.</p> 
<Link href='https://www.piaic.org/artificial-inteligence'><button className=' bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Read More..</button></Link></div>

<div className='border-2 border-solid border-amber-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-amber-100 ease-in duration-200 hover:text-black'><div>
            <Image className=' inline-block  py-4 px-6' src={fea} alt='/' width={100} height={50}/></div>
            <h3 className='text-xl font-bold py-4'>Blockchain</h3>
            <p className=' leading-relaxed pb-4'>A one year AI program designed for absolute beginners.
Getting Pakistan ready for the new ear of computing enabled by the rise of AI.</p>
<Link href='https://www.piaic.org/block-chain'><button className=' bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Read More..</button></Link>
             </div>

<div className='border-2 border-solid border-amber-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-amber-100 ease-in duration-200 hover:text-black'><div>
            <Image className=' inline-block  py-4 px-6' src={fea} alt='/' width={100} height={50}/></div>
            <h3 className='text-xl font-bold py-4'>Cloud and Computing</h3>
            <p className=' leading-relaxed pb-4'>A one year AI program designed for absolute beginners.
Getting Pakistan ready for the new ear of computing enabled by the rise of AI.</p>
<Link href='https://www.piaic.org/cloud-native'><button className=' bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Read More..</button></Link> </div>

<div className='border-2 border-solid border-amber-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-amber-100 ease-in duration-200 hover:text-black'><div>
            <Image className=' inline-block  py-4 px-6' src={fea} alt='/' width={100} height={50}/></div>
            <h3 className='text-xl font-bold py-4'>Internet of Things</h3>
            <p className=' leading-relaxed pb-4'>A one year AI program designed for absolute beginners.
Getting Pakistan ready for the new ear of computing enabled by the rise of AI.</p>
<Link href='https://www.piaic.org/iot'><button className=' bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Read More..</button></Link> </div>

<div className='border-2 border-solid border-amber-500 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-amber-100 ease-in duration-200 hover:text-black'><div>
            <Image className=' inline-block  py-4 px-6' src={fea} alt='/' width={100} height={50}/></div>
            <h3 className='text-xl font-bold py-4'>Web3 & Metaverse</h3>
            <p className=' leading-relaxed pb-4'>A one year AI program designed for absolute beginners.
Getting Pakistan ready for the new ear of computing enabled by the rise of AI.</p> 
<Link href='https://www.panaverse.co/'><button className=' bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Read More..</button></Link></div>
          
        </div>

      </section>
    
  )
}

export default Availableprograme