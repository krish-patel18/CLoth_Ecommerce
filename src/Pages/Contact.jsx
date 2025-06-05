import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const Contact = () => {
  return (
    <div className='px-6 sm:px-10 lg:px-24 xl:px-32'>

      <div className='text-center text-3xl pt-12 border-t border-gray-200 mb-12'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col-reverse md:flex-row items-center gap-12 mb-28'>
        <div className='flex flex-col justify-center gap-6 text-gray-700 text-[15px] w-full md:w-1/2'>
          <div>
            <h3 className='font-semibold text-lg text-white mb-1'>Our Store</h3>
            <p className='text-gray-400'>
              6969 Japan Gate <br /> Adajan, Surat, INDIA
            </p>
          </div>

          <div>
            <p className='text-gray-400'>
              Tel: +91 1818181818 <br />
              Email: viratkohli18@gmail.com
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-lg text-white mb-1'>Careers at Krishi</h3>
            <p className='text-gray-400'>Learn more about our teams and job openings.</p>
          </div>

          <button className='mt-2 border border-white px-6 py-3 rounded-md text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 w-fit'>
            Explore Jobs
          </button>
        </div>

        <img
          className='w-full md:max-w-[480px] rounded-xl shadow-md object-cover'
          src={assets.contact_img}
          alt="Contact Us"
        />
      </div>

      <Newsletterbox />
    </div>
  )
}

export default Contact
