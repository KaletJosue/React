import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const social = () => {
  return <div className='flex items-center justify-center gap-5 mb-10'>
    <RiFacebookFill className='w-14 h-14 p-4 border border-black text-black dark:text-gray-300 dark:border-gray-300 rounded-full hover:-translate-y-3 hover:border-blue-700 hover:text-blue-700 transition-all cursor-pointer dark:hover:border-blue-700 dark:hover:text-blue-700'/>
    <IoLogoWhatsapp className='w-14 h-14 p-4 border border-black text-black dark:text-gray-300 dark:border-gray-300 rounded-full hover:-translate-y-3 hover:border-green-600 hover:text-green-600 transition-all cursor-pointer dark:hover:border-green-600 dark:hover:text-green-600'/>
    <AiOutlineTwitter className='w-14 h-14 p-4 border border-black text-black dark:text-gray-300 dark:border-gray-300 rounded-full hover:-translate-y-3 hover:border-blue-700 hover:text-blue-700 transition-all cursor-pointer dark:hover:border-blue-700 dark:hover:text-blue-700'/>
    <AiFillInstagram className='w-14 h-14 p-4 border border-black text-black dark:text-gray-300 dark:border-gray-300 rounded-full hover:-translate-y-3 hover:border-pink-500 hover:text-pink-500 transition-all cursor-pointer dark:hover:border-pink-500 dark:hover:text-pink-500'/>
  </div>
}

export default social
