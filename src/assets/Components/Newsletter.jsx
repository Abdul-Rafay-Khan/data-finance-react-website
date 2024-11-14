import React from 'react'

const Newsletter = () => {
  return (
    <div className="text-white w-full py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="lg:col-span-2">
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Wants tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <input
              className="my-4 p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button
              className=" md:w-[200px] bg-[#00df9a] text-black font-bold ml-0 md:ml-4 py-3 px-7 rounded-md"
            >
              Notify Me
            </button>
            
          </div>
          <p className='py-4 text-center'>We care about the protection of your data.Read our <span className=' text-[#00df9a] underline cursor-pointer'>privacy & policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter