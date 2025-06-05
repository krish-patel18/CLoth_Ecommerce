import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="relative z-10 text-sm text-white px-5">
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40'>
                <div>
                    <h1 className='text-3xl font-extrabold'>VASTRA VERCE</h1>
                    <p className='w-full md:w-2/3 text-gray-400 pt-5 text-[16px]'>
                        We have clothes that suit your style and make you proud to wear. From women to men.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className="flex flex-col gap-3 text-gray-400">
                        <li>
                            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/collection" className="hover:text-white transition">Collection</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="hover:text-white transition">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="hover:text-white transition">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-400'>
                        <li>+91 99999 99999</li>
                        <li>viratkohli18@email.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr className="border-gray-700" />
                <p className='py-5 text-center text-gray-400'>
                    &copy; 2025 vastraversce.com – All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
