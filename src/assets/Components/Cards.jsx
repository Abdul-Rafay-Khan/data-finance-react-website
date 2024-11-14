import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    <div className=' w-full bg-white py-[10rem] px-4'>
        <div className=' max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8 '>

            <div className=' w-full shadow-2xl  p-4 my-4 flex flex-col rounded-lg    ' >
                
                <img className=' w-24 mx-auto  py-4 mt-[-3rem] bg-white' src={Single} alt="" />
                <p className=' font-bold text-2xl text-center'>Single User</p>
                <h1 className=' py-4 font-bold text-4xl text-center'>149$</h1>
               
             

                <div className=' text-center font-medium '>
                    <p className=' py-2 border-b border-gray-300'>500 GB Storage</p>
                    <p className=' py-2 border-b border-gray-300'> 1 User Allowed</p>
                    <p className=' py-2 border-b border-gray-300'>Send up to 2GB</p>
                    <button className=" w-[200px] bg-[#00df9a] text-[black] px-5 py-3 mt-6  font-bold rounded-md  mx-auto md:mx-0 mb-10">Start Trial</button>
                </div>
              


            </div>

            <div className=' w-full shadow-2xl  p-4 my-4 flex flex-col rounded-lg    ' >
                
                <img className=' w-24 mx-auto  py-4 mt-[-3rem] bg-white' src={Double} alt="" />
                <p className=' font-bold text-2xl text-center'>Partnership</p>
                <h1 className=' py-4 font-bold text-4xl text-center'>199$</h1>
               
             

                <div className=' text-center font-medium '>
                    <p className=' py-2 border-b border-gray-300'>1 TB Storage</p>
                    <p className=' py-2 border-b border-gray-300'> 3 User Allowed</p>
                    <p className=' py-2 border-b border-gray-300'>Send up to 10GB</p>
                    <button className=" w-[200px] bg-[black] text-[#00df9a] px-5 py-3 mt-6  font-bold rounded-md  mx-auto md:mx-0 mb-10">Start Trial</button>
                </div>
              


            </div>

            <div className=' w-full shadow-2xl  p-4 my-4 flex flex-col rounded-lg    ' >
                
                <img className=' w-24 mx-auto  py-4 mt-[-3rem] bg-white' src={Triple} alt="" />
                <p className=' font-bold text-2xl text-center'>Group Account</p>
                <h1 className=' py-4 font-bold text-4xl text-center'>299$</h1>
               
             

                <div className=' text-center font-medium '>
                    <p className=' py-2 border-b border-gray-300'>5 TB Storage</p>
                    <p className=' py-2 border-b border-gray-300'> 10 User Allowed</p>
                    <p className=' py-2 border-b border-gray-300'>Send up to 20GB</p>
                    <button className=" w-[200px] bg-[#00df9a] text-[black] px-5 py-3 mt-6  font-bold rounded-md  mx-auto md:mx-0 mb-10">Start Trial</button>
                </div>
              


            </div>


            

        </div>

    </div>
  )
}

export default Cards