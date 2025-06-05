import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/Newsletterbox'

const About = () => {
  return (
    <div className='px-4 sm:px-8 lg:px-24 text-white'>

      {/* Title Section */}
      <div className='text-3xl text-center pt-12 border-t border-gray-700'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Us Content */}
      <div className='my-16 flex flex-col md:flex-row items-center gap-16'>
        <img
          className='w-full md:max-w-[450px] rounded-2xl shadow-md object-cover'
          src={assets.about_img}
          alt="About Us"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-400 text-base leading-relaxed'>
          <p>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className='text-gray-100 text-lg'>Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-2xl text-center py-8'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Why Choose Us Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-24'>
        <div className='border  rounded-2xl px-8 py-12 shadow-md hover:shadow-xl transition duration-300 '>
          <b className='text-lg text-white'>Quality Assurance</b>
          <p className='text-gray-400 mt-4'>
            We meticulously select and vet each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className='border  rounded-2xl px-8 py-12 shadow-md hover:shadow-xl transition duration-300 '>
          <b className='text-lg text-white'>Convenience</b>
          <p className='text-gray-400 mt-4'>
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className='border  rounded-2xl px-8 py-12 shadow-md hover:shadow-xl transition duration-300 '>
          <b className='text-lg text-white'>Exceptional Customer Service</b>
          <p className='text-gray-400 mt-4'>
            Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetterBox />
    </div>
  )
}

export default About
