import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex items-center max-w-6xl mx-auto gap-8 min-h-screen p-4">
      <div className="w-1/2 flex flex-col gap-4 ">
        <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-5xl font-bold capitalize leading-relaxed pb-6">
          best place for your digital products
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odio
          vel eaque ipsam, placeat sit sint quis sapiente consectetur
          voluptatibus.
        </p>
        <button className=" p-3 rounded-full bg-blue-700 hover:opacity-85 uppercase w-2/5 my-3">
          see our works
        </button>
      </div>
      <div>
        <Image
          src="/img-1.jpg"
          alt="hero"
          width={700}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
