import React from "react";

const Analytics = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-4">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <img className=" w-[500px] mx-auto my-4" src={"/laptop.jpg"} alt="" />
        </div>

        <div className=" flex flex-col  justify-center">
          <p className=" font-bold text-[#00df9a] md:text-2xl text-[16px]">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" py-2 font-bold  md:text-4xl text-xl">Manage Data Analytics Centrally</h1>
          <p className=" text-gray-500 font-semibold ">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dicta minus harum nobis quo nihil accusamus earum, maxime commodi,
            delectus dolorem. Earum laudantium aspernatur officia. Doloribus
            perferendis cupiditate aut veritatis!
          </p>
        <button className=" w-[150px] bg-black text-[#00df9a] px-5 py-3 mt-6  font-bold rounded-md  mx-auto md:mx-0">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
