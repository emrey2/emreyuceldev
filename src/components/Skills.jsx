import React from "react";
import {
  SiUnrealengine,
  SiUnity,
  SiBlender,
  SiGithub,
  SiAseprite,
  SiAdobe,
} from "react-icons/si";

const Skills = () => {
  return (
    <div name="skills" className="bg-black text-white h-screen w-full">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white border-dashed">
            Lorem
          </p>
          <p className="py-4">//Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-8">
          <div>
            <SiUnity size={60} className="w-20 mx-auto text-white" />
            <p className="text-white my-4">Unity</p>
          </div>
          <div>
            <SiUnrealengine size={60} className="w-20 mx-auto text-white" />
            <p className="text-white my-4">Unreal Engine</p>
          </div>
          <div>
            <SiBlender size={60} className="w-20 mx-auto text-white" />
            <p className="text-white my-4">Blender</p>
          </div>
          <div>
            <SiAseprite size={60} className="w-20 mx-auto text-white" />
            <p className="text-white my-4">Aseprite</p>
          </div>
          <div>
            <SiAdobe size={60} className="w-20 mx-auto text-white" />
            <p className="text-white my-4">Adobe</p>
          </div>
          <div>
            <SiGithub size={60} className="w-20 mx-auto text-white" />
            <p className="text-white my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
