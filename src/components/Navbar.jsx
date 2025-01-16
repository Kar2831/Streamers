import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { RiCloseFill, RiMenu3Line } from '@remixicon/react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
<nav className='fixed top-4 left-0 right-0 z-50 m-2'>
    <div className="flex text-neutral-500 bg-black backdrop-blur-mdmax-w-7xl mx-auto px-4 py-3 justify-between items-center rounded-xl border border-neutral-800">
            <img src={logo} width={120} height={24} />
            <div className="hidden md:flex space-x-6">
                <a href="#works" className='hover:text-neutral-200'>
                    How it works
                </a>
                <a href="#pricing" className='hover:text-neutral-200'>
                    Pricing
                </a>
                <a href="#testimonials" className='hover:text-neutral-200'>
                    Testimonials
                </a>
            </div>
            <div className='hidden md:flex space-x-4 items-center'>
                    <a href="#" className="hover:text-neutral-200">
                        Login
                    </a>
                    <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition'>Get a demo</a>
                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">Start Free Trial</a>
            </div>
            {/* Hamburger icon for mobile view */}
            <div className="md:hidden">
                <button onClick = {toggleMenu} className="focus:outline-none" arial-label={isOpen ? "Close Menu" : "Open Menu"}>
                    {isOpen ? <RiCloseFill/> : <RiMenu3Line/>}
                </button>
            </div>
    </div>
            {
                isOpen && 
                <div className='h-[300px] w-full md:hidden font-semibold flex flex-col text-[15px] justify-center items-start space-y-6 px-5 text-neutral-400 bg-neutral-900'>
                <a href="#works" className='hover:text-neutral-200r'>
                    Product
                </a>
                <a href="#pricing" className='hover:text-neutral-200'>
                    Pricing
                </a>
                <a href="#testimonials" className='hover:text-neutral-200'>
                    Resources
                </a>
                   <a href="#" className="hover:text-neutral-200">
                        Login
                    </a>
                    <a href="#" className='w-full px-4 border border-neutral-700 text-white py-2 rounded-lg hover:bg-neutral-700 transition'>Get a demo</a>
                    <a href="#" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">Start Free Trial</a>
                </div>
            }

</nav>
  )
}
