import React, { useState } from 'react'
import { RiMenuUnfold2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleChange  = ()=>{
        setNav(!nav)
    }
  return (
    <div className=' text-white  h-24 p-4 max-w-[1240px] mx-auto flex items-center justify-between'>

        <div>
            <h1 className=' text-3xl font-bold text-[#00df9a] uppercase w-full'>React.</h1>
        </div>
        <div className=' flex items-center gap-8 hidden md:flex'>
        {!nav && (
  <ul className="flex gap-8 hidden md:flex">
    <li className="cursor-pointer">Home</li>
    <li className="cursor-pointer">Account</li>
    <li className="cursor-pointer">Sign In</li>
  </ul>
)}
            <button className=' py-2 px-5 rounded-md bg-white text-black font-semibold cursor-pointer'>Get Started</button>
          

        </div>
        <div  onClick={handleChange} className=' flex md:hidden text-white ease-in-out duration-500'>

        {!nav ?  <RiMenuUnfold2Line size={30} />: <IoMdClose size={30} />}
           </div>
           
{/* side nav */}
{nav && (
  <div className="absolute top-0 left-0 w-[70%] h-screen border-r border-gray-900 bg-[#000300] fixed  ">
    <h1 className="text-3xl font-bold text-[#00df9a] uppercase w-full m-4">React.</h1>
    <ul className="flex flex-col">
      <li className="cursor-pointer p-4 border-b border-gray-600">Home</li>
      <li className="cursor-pointer p-4 border-b border-gray-600">Account</li>
      <li className="cursor-pointer p-4 border-b border-gray-600">Sign In</li>
      <li className="cursor-pointer p-4 border-b border-gray-600">About</li>
      <li className="cursor-pointer p-4">Resources</li>
    </ul>
  </div>
)}
    </div>
  )
}

export default Navbar