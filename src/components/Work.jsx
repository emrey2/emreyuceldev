import React from "react";
import WorkImg from "../assets/placeholder.jpg";

const Work = () => {
  return (
    <div name="work" className="bg-black w-full md:h-screen text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white border-dashed">
            Work
          </p>
          <p className="py-6">Recent Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="group container rounded-md flex justify-center  items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Awesome Game
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="group container rounded-md flex justify-center  items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Awesome Game
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="group container rounded-md flex justify-center  items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Awesome Game
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="group container rounded-md flex justify-center  items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Awesome Game
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 border-2 border-dashed font-bold border-white">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
