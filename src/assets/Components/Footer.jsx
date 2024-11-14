import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' w-full'>
        <div className=' max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300 gap-16'>
<div>
<h1 className=' text-3xl font-bold text-[#00df9a] uppercase w-full'>React.</h1>
<p className=' py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi, pariatur ad praesentium eaque eius molestias exercitationem accusantium. Illum, provident.</p>
<div className='flex gap-8 py-4'>
        <FaFacebook    className=' text-gray-300' size={25}/>
        <FaInstagramSquare   className=' text-gray-300'  size={25}/>
        <FaSquareXTwitter    className=' text-gray-300' size={25}/>
        <FaGithub    className=' text-gray-300' size={25}/>
        <FaDribbbleSquare   className=' text-gray-300'  size={25}/>

        </div>
</div>

<div className=' lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className=' font-bold text-gray-400'>Solutions</h6>
        <ul>
            <li className=' py-2'>Analytics</li>
            <li className=' py-2'>Marketing</li>
            <li className=' py-2'>Commerce</li>
            <li className=' py-2'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className=' font-bold text-gray-400'>Support</h6>
        <ul>
            <li className=' py-2'>Pricing</li>
            <li className=' py-2'>Documentation</li>
            <li className=' py-2'>Guides</li>
            <li className=' py-2'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className=' font-bold text-gray-400'>Company</h6>
        <ul>
            <li className=' py-2'>About</li>
            <li className=' py-2'>Jobs</li>
            <li className=' py-2'>Press</li>
            <li className=' py-2'>Blog</li>
            <li className=' py-2'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className=' font-bold text-gray-400'>Legal</h6>
        <ul>
            <li className=' py-2'>Claim</li>
            <li className=' py-2'>Policy</li>
            <li className=' py-2'>Terms</li>
            
        </ul>
    </div>

</div>
      
  
        </div>

    </div>
  )
}

export default Footer