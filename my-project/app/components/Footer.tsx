import React from 'react'
import {CiFacebook,CiLinkedin,CiTwitter,CiYoutube, } from 'react-icons/ci'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'




function Footer() {
  return (
    <section>
        <div className='bg-black relative'>
            <div className='container py-10'>
                <div className='grid gap-10 md:grid-cols-3 pb-10'>
                    <div className=' space-y-6'>
                        <h4 className='font-bold text-lg'>About Us</h4>
                        <p className=' leading-relaxed'>The Program in a Nutshell: Earn While You Learn In this brand-new
            type of curriculum, students will learn how to make money and
            boost exports in the classroom and will begin doing so within six
            months of the programs beginning.</p>
            <div className='flex gap-5 items-center'>
                <p>Follow Us</p>
            
                <Link className=' text-2xl cursor-pointer hover:text-amber-500' href=''><CiFacebook/></Link>
                <Link className=' text-2xl cursor-pointer hover:text-amber-500' href=''><CiTwitter/></Link>
                <Link className=' text-2xl cursor-pointer hover:text-amber-500' href=''><CiYoutube/></Link>
                <Link className=' text-2xl cursor-pointer hover:text-amber-500' href=''><CiLinkedin/></Link>
                <Link className=' text-2xl cursor-pointer hover:text-amber-500' href=''><FaGithub/></Link>
            </div>

                    </div>
                    <div className='flex justify-between md:justify-around'>
                        <div className='space-y-6'>
                            <h4 className='font-bold text-lg '>Quick Links</h4>
                            <ul className='space-y-3'>
                                <li><Link href='/' className=' underline hover:no-underline hover:text-amber-500 '  >Home</Link></li> 
                                <li><Link href='/' className=' underline hover:no-underline hover:text-amber-500'  >Available Course</Link></li>
                                <li><Link href='/' className='underline hover:no-underline hover:text-amber-500'  >About</Link></li>
                                <li><Link href='/' className='underline hover:no-underline hover:text-amber-500'  >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div  className=' space-y-6'>
                    <h4 className='font-bold text-lg'>Newsletter</h4>
                        <p className=' leading-relaxed'>Subscribe With Email And Loads Of News Will Be Sent To You</p>
                        <div className='flex items-center'></div>
                        <input type='text' className='w-3/4 text-black bg-amber-100  px-4 py-2 lg:py-3 rounded-l-md focus:outline-none' placeholder='Enter Your Email'/>
                        <Link href='/'><button type='submit' className='bg-gradient-to-t from-amber-200 to-amber-600 px-4 py-2 lg:px-5 lg:py-3  rounded-r-md hover:opacity-90 text-black'>send</button> </Link>

                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Footer