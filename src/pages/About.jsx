import React from 'react'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="Fashion Collection" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we bring you the latest in fashion with a focus on quality, style, and affordability. Our curated collection offers everything from everyday essentials to bold statement pieces, all designed to fit every occasion and lifestyle. We believe fashion should be comfortable, accessible, and a true reflection of your unique style.</p>
          <p>We are committed to providing an exceptional shopping experience. Our team works tirelessly to ensure that every order is handled with care, offering prompt, reliable service that puts your satisfaction first. Whether you're shopping for a special occasion or refreshing your wardrobe, we're here to make it easy and enjoyable.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to deliver fashion that empowers and inspires. We’re committed to providing high-quality, stylish pieces that make you feel confident, with exceptional service to match. Fashion made effortless, just for you.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We prioritize quality in every piece, ensuring durability, comfort, and style with every item we offer. Fashion that lasts, designed for you.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience: </b>
          <p className='text-gray-600'>Enjoy a seamless shopping experience with easy navigation, fast shipping, and effortless returns. We make shopping as convenient as possible. Your satisfaction, our priority!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist, ensuring a smooth, stress-free experience with every purchase. We’re here for you, every step of the way.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About