import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
   <section>
    <div className='container py-20'>
        <div className=' text-center m-auto mb-20 md:w-1/2'>
            <h4 className='font-bold text-amber-500 mb-4'>Have A Question</h4>
            <h1 className='text-3xl md:text-5xl font-bold leading-snug mb-4'>Get In Touch</h1>

        </div>
        <form>
            <div className='w-full m-auto text-center md:w-2/3'>
                <div className='text-black grid gap-6 mb-6 md:grid-cols-2'>
                    <input type='text' className='bg-amber-100 border-amber-500 border-2 text-sm rounded-lg block w-full p-3 focus:outline-none' placeholder='Name'/>
                    <input type='email' className='bg-amber-100 border-amber-500 border-2 text-sm rounded-lg block w-full p-3 focus:outline-none' placeholder='Email'/>
                    <input type='phone' className='bg-amber-100 border-amber-500 border-2 text-sm rounded-lg block w-full p-3 focus:outline-none' placeholder='Phone'/>
                    <input type='company' className='bg-amber-100 border-amber-500 border-2 text-sm rounded-lg block w-full p-3 focus:outline-none' placeholder='Company'/>
                </div>
           <textarea rows={4} className='text-black bg-amber-100 border-amber-500 border-2 text-sm rounded-lg block w-full p-3 focus:outline-none' placeholder='Message'></textarea>
           <Link href='/'><button className='mt-10 bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200' >Send Message</button></Link>
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact