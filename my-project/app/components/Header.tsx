'use client'
import Image from 'next/image'
import png from '../../public/logo.png'
import {FaBars, FaTimes} from "react-icons/fa"
import React,{useState} from 'react'
import Link from 'next/link'

const Header = () => {
    const [menuMove, setMenuMove] = useState(false)
    const menuHandler = ()=>{
        setMenuMove(!menuMove)
    }
  return (
    <body className=' bg-black text-white tracking-wider'>
        <header className='sticky top-0 z-50'>
        <nav className='container flex justify-between items-center'>
            <div className='w-20 py-5'><Link href='#'>
                <Image className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2' src={png} alt="PIAIC" width={80} height={50}/></Link>
            </div>
            <div className='md:flex-shrink-0'>
                <ul className='hidden md:flex items-center space-x-6'>
                    <li className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer'><Link href='/'>Home</Link></li>
                    <li className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer'><Link href='/availableprograme'>Available Program</Link></li>
                    <li className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer'><Link href='/about'>About</Link></li>
                    <li className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer'><Link href='/contact'>Contact</Link></li>

                    <li><Link href='/'><button className='bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Apply Now</button></Link></li>
                </ul>

            </div>
            <Link onClick={menuHandler} className='md:hidden cursor-pointer text-white text-2xl' href='/'><FaBars/></Link>
            </nav>
                
                
                <div className={`bg-black w-2/3 fixed right-0 top-0 h-screen flex items-center duration-300 ${menuMove ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className='ml-10'>
                    <Link onClick={menuHandler} className='text-white text-2xl absolute top-10 left-10' href='/'><FaTimes/></Link>
                    
                    <ul className='h-full'>
                        <li className='text-white text-lg font-normal h-full  py-10 place-items-center'><Link className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer ' href="/">Home</Link></li>
                        <li className='text-white text-lg font-normal h-full  py-10 place-items-center'><Link className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer' href="/availableprograme">Available Program</Link></li>
                        <li className='text-white text-lg font-normal h-full  py-10 place-items-center'><Link className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer' href="/about">About</Link></li>
                        <li className='text-white text-lg font-normal h-full  py-10 place-items-center'><Link className='hover:bg-gradient-to-t from-amber-200 to-amber-600 p-2 hover:text-black hover:rounded-md hover:font-bold ease-in duration-200 cursor-pointer' href="/contact">Contact</Link></li>
                    
                        <li><Link href='/'><button className='bg-gradient-to-t from-amber-200 to-amber-600 text-black px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Apply Now</button></Link></li>
                    </ul>

                    </nav>
                

                </div>
            
        
    </header>
    </body>
    
  )
}

export default Header