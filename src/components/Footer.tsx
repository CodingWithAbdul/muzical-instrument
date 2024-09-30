import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-16 py-10 bg-black'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center mx-10  gap-20'>
        <div className='flex gap-5 flex-col w-[11rem]'>
            <h2 className='text-white text-2xl font-bold'>About Us</h2>

            <p className='text-gray-300 text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia, corrupti illum quae quasi reiciendis?</p>
        </div>
        <div className='flex flex-col gap-8'>
            <div>
            <h2 className='text-white text-2xl font-bold'>Quick Links</h2>
            </div>
            <div className='flex flex-col gap-5 text-gray-300 text-base'>
            <Link href={"/"} className='transition-all duration-100 hover:text-white'>Home</Link>
            <Link href={"/"} className='transition-all duration-100 hover:text-white'>Courses</Link>
            <Link href={"/"} className='transition-all duration-100 hover:text-white'>Contact</Link>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
            <div>
            <h2 className='text-white text-2xl font-bold'>Follow us</h2>
            </div>
            <div  className='flex flex-col gap-5 text-gray-300 text-base'>

            <Link href={"/"} className='transition-all duration-100 hover:text-white'>Facebook</Link>
            <Link href={"/"} className='transition-all duration-100 hover:text-white'>Twitter</Link>
            <Link href={"/"} className='transition-all duration-100 hover:text-white'>Instagram</Link>
            </div>
        </div>
        <div className='flex flex-col gap-8'>

            <div>
            <h2 className='text-white text-2xl font-bold'>Contact Us</h2>
            </div>
            <div className='flex flex-col gap-5 text-gray-300 text-base'>
            <span>SalamatPura,Lahore,Pakistan</span>
            <span>info@Musicalschool.com </span>
            <span>Phone:123-456-789  </span>
            </div>    
        </div>
      </div>
      <div className='text-sm'>
        <h1>@ 2024 Music School. All rights  reserved</h1>

      </div>
    </div>
  )
}

export default Footer
