import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className=' text-white w-full h-screen  mx-auto flex flex-col text-center justify-center items-center -mt-36'>

        <p className='  md:text-xl mb-2  font-bold text-[#00df9a]'>GROWING WITH DATA ANALAYTICS</p>
        <h1 className=' text-5xl  sm:6xl mb-2 md:text-7xl font-bold'>Grow with data.</h1>
        <div className='flex items-center'>
            <p className=' md:text-5xl  sm:text-4xl text-xl font-bold'>Fast,flexible financing for</p>
            <ReactTyped className=' md:text-5xl  sm:text-4xl text-xl font-bold ml-2' strings={['BTB','BTC','SASS'] } typeSpeed={120} backSpeed={140} loop/>
        </div>

        <p className=' font-semibold md:2xl text-xl px-6 text-center text-gray-500 py-4'>Monitor your data analytics to increase revenue for BTB,BTC & SAAS platforms.</p>
        <button className=' bg-[#00df9a] text-black font-bold px-5 py-2 rounded-md'>Get Started</button>
    </div>
  )
}

export default Hero