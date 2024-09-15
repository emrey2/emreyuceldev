import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#B3B3B3]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Emre Yücel
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Gameplay Programmer.
        </h2>
        <p className="text-[#B3B3B3] py-4 max-w-[700px]">
          I'm a dedicated game developer focused on 2D game design and
          development. With expertise in Unity and Unreal Engine, I bring
          creative concepts to life through engaging mechanics and visuals.
        </p>
        <div>
          <button className="border-2 bg-white text-black border-white px-6 py-3 my-2 flex items-center ">
            View Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
